// Form validation with plain words, inline errors and an error summary.
// Without JavaScript the browser's own validation still runs and the form
// still posts to Web3Forms.

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const isHidden = (el: Element) => !!el.closest('[hidden]');

function controlsOf(field: HTMLElement): Control[] {
  return Array.from(field.querySelectorAll<Control>('input, select, textarea'));
}

function errorFor(field: HTMLElement): string | null {
  const controls = controlsOf(field);
  if (!controls.length || isHidden(field)) return null;
  const required = field.dataset.requiredMsg ?? 'This field needs an answer';

  if (field.dataset.group === 'radio') {
    return controls.some((c) => (c as HTMLInputElement).checked) ? null : required;
  }
  const control = controls[0];
  if (control.validity.valueMissing) return required;
  if (control.validity.typeMismatch || control.validity.patternMismatch || control.validity.badInput) {
    return field.dataset.typeMsg ?? 'Check this answer';
  }
  return null;
}

function show(field: HTMLElement, message: string | null) {
  const error = field.querySelector<HTMLElement>('.field-error');
  const controls = controlsOf(field);
  field.classList.toggle('has-error', !!message);
  for (const c of controls) {
    if (message) c.setAttribute('aria-invalid', 'true');
    else c.removeAttribute('aria-invalid');
  }
  if (error) {
    error.hidden = !message;
    error.textContent = message ? `Error: ${message}` : '';
  }
}

function setupReveal(form: HTMLFormElement) {
  const control = form.querySelector<HTMLSelectElement>('[data-reveal-control]');
  const targets = Array.from(form.querySelectorAll<HTMLElement>('[data-reveal-when]'));
  if (!control || !targets.length) return;
  const update = () => {
    for (const t of targets) {
      const visible = control.value === t.dataset.revealWhen;
      t.hidden = !visible;
      if (!visible) for (const c of controlsOf(t)) c.value = '';
    }
  };
  control.addEventListener('change', update);
  update();
}

function setup(form: HTMLFormElement) {
  form.noValidate = true;
  const summary = form.querySelector<HTMLElement>('.error-summary');
  const list = summary?.querySelector('ul');
  const fields = Array.from(form.querySelectorAll<HTMLElement>('[data-field]'));
  setupReveal(form);

  // Coming back with the browser's back button can restore a disabled button.
  window.addEventListener('pageshow', () => {
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (button) button.disabled = false;
  });

  form.addEventListener('submit', (event) => {
    const problems: { field: HTMLElement; message: string }[] = [];
    for (const field of fields) {
      const message = errorFor(field);
      show(field, message);
      if (message) problems.push({ field, message });
    }

    if (!problems.length) {
      if (summary) summary.hidden = true;
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (button) button.disabled = true;
      return;
    }

    event.preventDefault();
    if (!summary || !list) return;
    list.replaceChildren(
      ...problems.map(({ field, message }) => {
        const target = controlsOf(field)[0];
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${target.id}`;
        a.textContent = message;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          target.focus();
          field.scrollIntoView({ block: 'center' });
        });
        li.append(a);
        return li;
      }),
    );
    summary.hidden = false;
    summary.focus();
  });

  // Once a field has shown an error, re-check it as the person fixes it.
  for (const field of fields) {
    const recheck = () => {
      if (field.classList.contains('has-error')) show(field, errorFor(field));
    };
    field.addEventListener('input', recheck);
    field.addEventListener('change', recheck);
  }
}

export function initForms() {
  for (const form of document.querySelectorAll<HTMLFormElement>('form[data-validate]')) {
    if (form.dataset.ready) continue;
    form.dataset.ready = 'true';
    setup(form);
  }
}
