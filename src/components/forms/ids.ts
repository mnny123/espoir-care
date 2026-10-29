export const fieldId = (form: string, name: string) =>
  `${form}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
