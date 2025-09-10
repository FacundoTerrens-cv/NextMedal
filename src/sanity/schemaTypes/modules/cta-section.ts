import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cta-section',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading (e.g., "Klar for å dominere markedet?")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description below the main title (can be multiple lines)',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'e.g., "Book gratis konsultasjon"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'Optional: External URL to open in new tab',
        }),
        defineField({
          name: 'action',
          title: 'Action',
          type: 'string',
          description: 'Optional: Custom action (e.g., "contact", "download")',
          options: {
            list: [
              { title: 'Contact Form', value: 'contact' },
              { title: 'Download Guide', value: 'download' },
              { title: 'Schedule Call', value: 'schedule' },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'e.g., "Last ned vår guide"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'Optional: External URL to open in new tab',
        }),
        defineField({
          name: 'action',
          title: 'Action',
          type: 'string',
          description: 'Optional: Custom action (e.g., "contact", "download")',
          options: {
            list: [
              { title: 'Contact Form', value: 'contact' },
              { title: 'Download Guide', value: 'download' },
              { title: 'Schedule Call', value: 'schedule' },
            ],
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      primaryButton: 'primaryButton.text',
      secondaryButton: 'secondaryButton.text',
    },
    prepare({ title, primaryButton, secondaryButton }) {
      return {
        title: title || 'CTA Section',
        subtitle: `${primaryButton} + ${secondaryButton}`,
      };
    },
  },
});










