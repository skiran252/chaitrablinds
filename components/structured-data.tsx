// JSON-LD structured data for rich search results
export default function StructuredData() {
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': 'https://chaitrablinds.com/#business',
        name: 'Chaitra Blinds & Furnishings',
        alternateName: 'Chaitra Blinds',
        description:
            'Premium custom blinds, curtains, wallpapers, mosquito mesh, invisible grills & home decor solutions in Hyderabad. Made-to-measure with expert installation.',
        url: 'https://chaitrablinds.com',
        telephone: '+917013262800',
        email: 'chaitrablinds@gmail.com',
        foundingDate: '2018',
        image: 'https://chaitrablinds.com/images/logo.png',
        logo: 'https://chaitrablinds.com/images/logo.png',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI, Bank Transfer',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Near Butterfly Circle, Opp. Volt Gym, Alkapur Township',
            addressLocality: 'Manikonda, Hyderabad',
            addressRegion: 'Telangana',
            addressCountry: 'IN',
            postalCode: '500089',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 17.3931404,
            longitude: 78.3767438,
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Hyderabad',
                '@id': 'https://www.wikidata.org/wiki/Q1361',
            },
            {
                '@type': 'City',
                name: 'Secunderabad',
            },
            {
                '@type': 'State',
                name: 'Telangana',
            },
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '22:00',
            },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            bestRating: '5',
            ratingCount: '18',
            reviewCount: '18',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Home Furnishing Products & Services',
            itemListElement: [
                {
                    '@type': 'OfferCatalog',
                    name: 'Window Blinds',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roller Blinds Installation' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zebra Blinds Installation' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wooden Blinds Installation' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venetian Blinds Installation' } },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Curtains',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Curtains Stitching & Installation' } },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Wallpapers',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wallpaper Installation' } },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Mosquito Mesh',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mosquito Mesh Doors & Windows' } },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Invisible Grills',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balcony Invisible Grills Installation' } },
                    ],
                },
            ],
        },
        sameAs: [
            'https://www.facebook.com/chaitrabambooblinds',
            'https://www.instagram.com/chaitra_blinds/',
            'https://www.youtube.com/@Chaitrablinds',
            'https://maps.app.goo.gl/tAnYU3EDyWibjTfr6',
        ],
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What types of blinds does Chaitra Blinds offer in Hyderabad?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer roller blinds, zebra blinds, wooden blinds, venetian blinds, blackout blinds, and motorized blinds. All our blinds are custom-made to your exact measurements and available in 200+ fabric options.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide free site visits and measurement?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! We provide completely free site visits with fabric samples and color swatches. Our technicians measure every opening down to the millimeter to ensure a perfect fit.',
                },
            },
            {
                '@type': 'Question',
                name: 'What areas in Hyderabad do you serve?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We serve all areas across Hyderabad and Secunderabad including Banjara Hills, Jubilee Hills, Gachibowli, Hitech City, Kondapur, Madhapur, Kukatpally, Miyapur, ECIL, Uppal, Dilsukhnagar, LB Nagar, and more.',
                },
            },
            {
                '@type': 'Question',
                name: 'How long does installation take?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Product fabrication typically takes 5-7 working days after order confirmation. Installation itself is usually completed within 2-4 hours depending on the number of windows and product type.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you offer warranty on your products?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, all our products come with a manufacturer warranty. We also provide free post-installation support and maintenance guidance to ensure your products last for years.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the price range for blinds and curtains?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our blinds start from ₹150 per sq ft and curtains from ₹100 per sq ft depending on the fabric and style chosen. We offer options for every budget without compromising on quality. Contact us for a free quote.',
                },
            },
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Chaitra Blinds & Furnishings',
        url: 'https://chaitrablinds.com',
        description: 'Premium custom blinds, curtains & home furnishing solutions in Hyderabad',
        publisher: {
            '@type': 'Organization',
            name: 'Chaitra Blinds & Furnishings',
            logo: {
                '@type': 'ImageObject',
                url: 'https://chaitrablinds.com/images/logo.png',
            },
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://chaitrablinds.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
        },
    }

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://chaitrablinds.com',
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
            />
        </>
    )
}
