import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'translation',
  title: 'Translation',
  type: 'object',
  fields: [
    defineField({
      name: 'no',
      title: 'Norwegian (Norsk)',
      type: 'string',
      description: 'Norwegian translation',
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      description: 'English translation',
    }),
  ],
  preview: {
    select: {
      no: 'no',
      en: 'en',
    },
    prepare({ no, en }) {
      return {
        title: no || en || 'Translation',
        subtitle: no && en ? 'NO / EN' : no ? 'NO only' : en ? 'EN only' : 'No translations',
      };
    },
  },
});
