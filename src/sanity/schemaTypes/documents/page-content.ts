import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Services', value: 'services' },
          { title: 'Projects', value: 'projects' },
          { title: 'About Us', value: 'about' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'pretitle',
          title: 'Pre-title',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'statsSection',
          title: 'Stats Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Section Subtitle',
              type: 'text',
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
                    }),
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Section Subtitle',
              type: 'text',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'service',
                  title: 'Service',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Service Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'icon',
                      title: 'Icon Name',
                      type: 'string',
                      description: 'Lucide icon name (e.g., Target, Users, TrendingUp)',
                    }),
                    defineField({
                      name: 'features',
                      title: 'Features',
                      type: 'array',
                      of: [{ type: 'string' }],
                    }),
                  ],
                },
                {
                  type: 'object',
                  name: 'project',
                  title: 'Project',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Project Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'category',
                      title: 'Category',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'stats',
                      title: 'Project Stats',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'icon',
                              title: 'Icon',
                              type: 'string',
                            }),
                            defineField({
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
        {
          type: 'object',
          name: 'testimonialSection',
          title: 'Testimonial Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Section Subtitle',
              type: 'text',
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
                      name: 'quote',
                      title: 'Quote',
                      type: 'text',
                    }),
                    defineField({
                      name: 'author',
                      title: 'Author Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'position',
                      title: 'Position/Company',
                      type: 'string',
                    }),
                    defineField({
                      name: 'rating',
                      title: 'Rating',
                      type: 'number',
                      validation: (Rule) => Rule.min(1).max(5),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'CTA Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'CTA Subtitle',
          type: 'text',
        }),
        defineField({
          name: 'primaryButton',
          title: 'Primary Button Text',
          type: 'string',
        }),
        defineField({
          name: 'secondaryButton',
          title: 'Secondary Button Text',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
    },
    prepare(selection) {
      const { title, pageType } = selection;
      return {
        title: title || 'Untitled Page',
        subtitle: pageType ? `${pageType.charAt(0).toUpperCase() + pageType.slice(1)} Page` : 'Page',
      };
    },
  },
});
