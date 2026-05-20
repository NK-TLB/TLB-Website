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

const defaultLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Laundry Bag",
  alternateName: [
    "TLB",
    "TheLaundryBag",
    "The LaundryBag",
    "TLB Raipur",
    "Laundry Bag",
  ],
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo.jpg`,
  image: `${BASE_URL}/og-image.svg`,
  telephone: site.phone,
  email: site.email,
  priceRange: "₹₹",
  foundingDate: `${site.founded}-01-01`,
  founder: { "@type": "Person", name: "Shourya Jain" },
  description: site.description,
  slogan: site.motto,
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
  logo: `${BASE_URL}/logo.jpg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      email: site.email,
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
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  image = "/og-image.svg",
  keywords,
  schema,
  noindex,
}: SEOProps) {
  const fullTitle = title
    ? `${title} · The Laundry Bag`
    : "The Laundry Bag · Commercial and Residential Laundry and Dry Cleaning";
  const fullDescription =
    description ??
    "The Laundry Bag provides professional laundry and dry-cleaning services to government establishments, hospitals, hotels, restaurants, colleges, schools and companies — and on-demand pickup and delivery for homes and students across Raipur, Pune and Goa, India.";
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const allKeywords = [...(keywords ?? []), ...seoKeywords];

  const schemaPayload = [
    defaultLocalBusinessSchema,
    organizationSchema,
    websiteSchema,
    ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta
        name="keywords"
        content={Array.from(new Set(allKeywords)).join(", ")}
      />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large,max-snippet:-1"
        }
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />
      <meta
        name="bingbot"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />
      <meta name="author" content="The Laundry Bag" />
      <meta name="publisher" content="The Laundry Bag" />
      <meta name="geo.region" content="IN-CT" />
      <meta name="geo.placename" content="Raipur" />
      <meta
        name="geo.position"
        content={`${site.address.geo.lat};${site.address.geo.lng}`}
      />
      <meta
        name="ICBM"
        content={`${site.address.geo.lat}, ${site.address.geo.lng}`}
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="The Laundry Bag" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:alt"
        content="The Laundry Bag — Commercial and Residential Laundry and Dry Cleaning"
      />

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
