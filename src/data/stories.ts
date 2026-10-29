// Real client stories only, shared with written permission. Never invent one.
// When you add the first story, set SHOW_STORIES = true in src/config/site.ts.
//
// Example shape (copy, fill in and remove the comment markers):
// {
//   slug: 'getting-back-home-after-hospital',
//   title: 'Getting back home after hospital',
//   metaDescription: 'Under 155 characters, written by hand.',
//   person: 'First name only, or a description like "A Redlands family"',
//   services: ['nursing-care-services-brisbane'],
//   situation: 'What was going on before we met.',
//   whatWeDid: 'The support we put in place.',
//   whatChanged: 'What is different now, in their words where possible.',
//   quote: 'A short quote, word for word, approved by the person.',
//   quoteBy: 'Name, relationship',
// },

export type Story = {
  slug: string;
  title: string;
  metaDescription: string;
  person: string;
  services: string[];
  situation: string;
  whatWeDid: string;
  whatChanged: string;
  quote: string;
  quoteBy: string;
};

export const stories: Story[] = [];
