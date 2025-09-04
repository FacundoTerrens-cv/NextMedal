import { groq } from 'next-sanity';

export const SLUG_QUERY = groq`
	array::join([...parent[]->metadata.slug.current, metadata.slug.current], '/')
`;

export const LINK_QUERY = groq`
	...,
	internal->{
		_type,
		title,
		parent[]->{ metadata { slug } },
		metadata
	}
`;

export const NAVIGATION_QUERY = groq`
	title,
	items[]{
		${LINK_QUERY},
		link{ ${LINK_QUERY} },
		links[]{ ${LINK_QUERY} },
		categories[]{
		...,
			links[]{ ${LINK_QUERY} }
		}
	}
`;

export const CTA_QUERY = groq`
	...,
	link{ ${LINK_QUERY} },
		internalLink-> {
		...
	}
`;

export const MODULES_QUERY = groq`
	...,
	ctas[]{${CTA_QUERY}},
	_type == 'blog-list' => { filteredCategory-> },
	_type == 'breadcrumbs' => { crumbs[]{ ${LINK_QUERY} } },
	_type == 'callout' => {
		"copy": content,
	},
	_type == 'hero.saas' => {
		content[]
	},
	_type == 'hero.split' => {
		content[]
	},
	_type== 'galleryHero' => {
		...,
		content[],
		assets[]{..., "image": image.asset->, alt, loading}
	},
	_type == 'logo-list' => { logos[]-> },
	_type == 'person-list' => { 
		...,
		people[]->{...,  "image": image.asset->, altText, loading},
	},
	_type == 'pricing-list' => {
		tiers[]->{
			...,
			ctas[]{${CTA_QUERY}}
		}
	},
	_type == 'richtext-module' => {
		'headings': select(
			tableOfContents => content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
				style,
				'text': pt::text(@)
			}
		),
	},
	_type == 'tabbedContent' => {
		tabs[]{
			...,
			ctas[]{ ${CTA_QUERY} },
			content[]{
				...,
				_type == 'featuredHero' => {
					...,
					ctas[]{ ${CTA_QUERY} },
					content[],
					image{..., "image": image.asset->, altText, loading}

				},
			}
		}
	},
	_type == 'featuredHero' => {
		ctas[]{ ${CTA_QUERY} },
		content[],
		image{..., "image": image.asset->, altText, loading}
	},
	_type == 'feature-grid' => {
		...,
		items[]{
			...,
			link{ ${LINK_QUERY} }
		}
	},
	_type == 'videoHero' => {
		_type,
		type,
		videoId,
		muxVideo{
			...,
			asset->{
				...,
				"playbackId": playback_ids[0].id
			}
		},
		thumbnail,
		title
	},
	_type == 'partners-section' => {
		...,
		partners[]{
			...,
			logo{
				...,
				"image": asset->,
				altText,
				loading
			}
		}
	},
	_type == 'services-section' => {
		...,
		services[]{
			...,
			image{
				...,
				"image": asset->,
				altText,
				loading
			}
		}
	},
`;

export const GLOBAL_MODULE_QUERY = groq`
	string::startsWith($slug, path)
	&& select(
		defined(excludePaths) => count(excludePaths[string::startsWith($slug, @)]) == 0,
		true
	)
`;

export const SITE_QUERY = groq`
	*[_type == "site"][0] {
		title,
		tagline,
		logo {
			image {
				asset->{
					_id,
					url,
					metadata {
						dimensions
					}
				},
				alt
			},
			width,
			height
		},
		footerLogo {
			image {
				asset->{
					_id,
					url,
					metadata {
						dimensions
					}
				},
				alt
			},
			width,
			height
		},
		announcements[]->{
			title,
			content,
			cta
		},
		copyright,
		ctas[]{
			${CTA_QUERY}
		},
		headerMenu->{
			${NAVIGATION_QUERY}
		},
		footerMenu->{
			${NAVIGATION_QUERY}
		},
		socialLinks[]{
			text,
			url
		}
	}
`;

export const PAGE_CONTENT_QUERY = groq`
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
`;
