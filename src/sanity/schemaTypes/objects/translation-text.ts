import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'translationText',
  title: 'Translation Text',
  type: 'object',
  fields: [
    defineField({
      name: 'no',
      title: 'Norwegian (Norsk)',
      type: 'text',
      rows: 3,
      description: 'Norwegian translation',
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
      description: 'English translation',
    }),
  ],
  preview: {
    select: {
      no: 'no',
      en: 'en',
    },
    prepare({ no, en }) {
      const text = no || en || 'Translation Text';
      return {
        title: text.length > 50 ? text.substring(0, 50) + '...' : text,
        subtitle: no && en ? 'NO / EN' : no ? 'NO only' : en ? 'EN only' : 'No translations',
      };
    },
  },
});
