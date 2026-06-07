import { Helmet } from "react-helmet-async";
import { seoKeywords, site } from "../data/site";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

const BASE_URL = "https://www.thelaundrybag.co.in";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Laundry Bag",
  alternateName: ["TLB", "TheLaundryBag", "The LaundryBag", "Laundry Bag"],
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.png`,
  telephone: site.phone,
  priceRange: "₹₹",
  foundingDate: `${site.founded}-01-01`,
  founder: { "@type": "Person", name: "Shourya Jain" },
  description: site.description,
  slogan: "India's Leading Laundry Service Provider",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.address.geo.lat,
    longitude: site.address.geo.lng,
  },
  areaServed: site.cities.map((c) => ({ "@type": "City", name: c })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    site.socials.facebook,
    site.socials.twitter,
    site.socials.instagram,
    site.socials.linkedin,
  ],
  keywords: seoKeywords.join(", "),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Laundry Bag",
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo.png`,
  founder: { "@type": "Person", name: "Shourya Jain" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  sameAs: [
    site.socials.facebook,
    site.socials.twitter,
    site.socials.instagram,
    site.socials.linkedin,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Laundry Bag",
  url: `${BASE_URL}/`,
  inLanguage: "en-IN",
};

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  image = "/og-image.png",
  keywords,
  schema,
  noindex,
}: SEOProps) {
  const fullTitle = title
    ? `${title} · The Laundry Bag`
    : "The Laundry Bag · India's Leading Laundry Service Provider";
  const fullDescription = description ?? site.description;
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const allKeywords = Array.from(new Set([...(keywords ?? []), ...seoKeywords]));

  const schemaPayload = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1"
        }
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="The Laundry Bag" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaPayload.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
