'use server';

import { dev } from '@/lib/env';
import { client } from '@/sanity/lib/client';
import { token } from '@/sanity/lib/token';
import { type QueryOptions, type QueryParams, defineLive, groq } from 'next-sanity';
import { draftMode } from 'next/headers';
import { CTA_QUERY, NAVIGATION_QUERY } from './queries';

export async function fetchSanity<T = any>({
  query,
  params = {},
  next,
}: {
  query: string;
  params?: Partial<QueryParams>;
  next?: QueryOptions['next'];
}) {
  const preview = dev || (await draftMode()).isEnabled;

  return client.fetch<T>(
    query,
    params,
    preview
      ? {
          stega: true,
          perspective: 'drafts',
          useCdn: false,
          token,
          next: {
            revalidate: 0,
            ...next,
          },
        }
      : {
          perspective: 'published',
          useCdn: true,
          next: {
            revalidate: 3600, // every hour
            ...next,
          },
        }
  );
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});

export async function fetchSanityLive<T = any>(args: Parameters<typeof sanityFetch>[0]) {
  const preview = dev || (await draftMode()).isEnabled;

  const { data } = await sanityFetch({
    ...args,
    perspective: preview ? 'drafts' : 'published',
  });

  return data as T;
}

export async function getSite() {
  const site = await fetchSanityLive<Sanity.Site>({
    query: groq`
			*[_type == 'site'][0]{
				...,
				ctas[]{ ${CTA_QUERY} },
				headerMenu->{ ${NAVIGATION_QUERY} },
				footerMenu->{ ${NAVIGATION_QUERY} },
				socialLinks,
				'ogimage': ogimage.asset->url,
				logo{
					...,
					image{
						default{
							...,
							"image": asset->,
							altText,
							loading
						},
						light{
							...,
							"image": asset->,
							altText,
							loading
						},
						dark{
							...,
							"image": asset->,
							altText,
							loading
						}
					}
				},
				footerLogo{
					...,
					image{
						...,
						"image": asset->,
						alt
					}
				}
			}
		`,
  });

  if (!site)
    throw new Error(
      'Missing Site settings: 🫠 Your website might be having an identity crisis...\n\n' +
        'Solution: Publish the Site document in your Medal Social Studio.\n\n' +
        '💁‍♂️ https://www.medalsocial.com'
    );

  return site;
}

export async function getPageContent(pageType: string) {
  const pageContent = await fetchSanityLive<any>({
    query: groq`
      *[_type == "pageContent" && pageType == $pageType][0] {
        title,
        slug,
        pageType,
        hero {
          pretitle,
          title,
          subtitle
        },
        sections[]{
          _type,
          title,
          subtitle,
          stats[]{
            number,
            label
          },
          content[]{
            _type,
            title,
            description,
            category,
            icon,
            features[],
            stats[]{
              icon,
              text
            }
          },
          testimonials[]{
            quote,
            author,
            position,
            rating
          }
        },
        cta {
          title,
          subtitle,
          primaryButton,
          secondaryButton
        }
      }
    `,
    params: { pageType },
  });

  return pageContent;
}
