import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'why-choose-us',
  title: 'Why Choose Us',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading (e.g., "Hvorfor velge Tech Norway?")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main description paragraph',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number/Value',
              type: 'string',
              description: 'e.g., "150+", "2.5B"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Startups hjulpet", "NOK i funding"',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'number',
              subtitle: 'label',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(4),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              description: 'Rating out of 5 (e.g., 4.9)',
              validation: (Rule) => Rule.min(0).max(5).precision(1),
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              description: 'Customer testimonial quote',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Author Position',
              type: 'string',
              description: 'e.g., "CEO, TechStart AS"',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'author',
              subtitle: 'position',
              rating: 'rating',
            },
            prepare({ title, subtitle, rating }) {
              return {
                title: title || 'Testimonial',
                subtitle: `${subtitle} - ${rating}/5`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(10),
      description: 'Add multiple customer testimonials (will be displayed in a slider)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      features: 'features',
      testimonials: 'testimonials',
    },
    prepare({ title, features, testimonials }) {
      return {
        title: title || 'Why Choose Us',
        subtitle: `${features?.length || 0} features, ${testimonials?.length || 0} testimonials`,
      };
    },
  },
});
