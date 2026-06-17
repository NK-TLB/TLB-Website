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

const PERSON_ID =
  "https://www.shouryainfraventure.com/shourya-jain.html#person";
const ORG_ID = `${BASE_URL}/#organization`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  name: "The Laundry Bag",
  alternateName: ["TLB", "TheLaundryBag", "The LaundryBag", "Laundry Bag"],
  url: `${BASE_URL}/`,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.png`,
  telephone: site.phone,
  priceRange: "₹₹",
  foundingDate: `${site.founded}-01-01`,
  founder: { "@type": "Person", "@id": PERSON_ID, name: "Shourya Jain" },
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
  founder: { "@type": "Person", "@id": PERSON_ID, name: "Shourya Jain" },
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

// Founder entity. The shared @id (the Shourya Infraventure about page) is what
// tells Google and AI engines that the founder of The Laundry Bag and the
// real-estate partner at Shourya Infraventure are one and the same person.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Shourya Jain",
  alternateName: [
    "Shourya Jain Raipur",
    "Shourya Jain The Laundry Bag",
    "Shourya Jain founder The Laundry Bag",
    "Shourya Jain Chhattisgarh",
  ],
  jobTitle:
    "Founder, The Laundry Bag; Partner, Shourya Infraventure",
  description:
    "Shourya Jain is a Raipur, Chhattisgarh based entrepreneur. He is the founder of The Laundry Bag, India's leading commercial laundry, dry-cleaning and linen-management brand, operating across Raipur and other Indian cities since 2013. He is also the third-generation real estate partner at Shourya Infraventure, the Jain family infrastructure firm of Raipur established in 1958.",
  nationality: { "@type": "Country", name: "India" },
  homeLocation: { "@type": "Place", name: "Raipur, Chhattisgarh, India" },
  worksFor: [
    { "@id": ORG_ID },
    { "@id": "https://www.shouryainfraventure.com/#organization" },
  ],
  sameAs: [
    "https://www.shouryainfraventure.com/shourya-jain.html",
    "https://www.shouryainfraventure.com/about.html",
    "https://www.shouryainfraventure.com/",
    site.socials.linkedin,
    "https://www.linkedin.com/in/shourya-jain-raipur",
    "https://www.wikidata.org/wiki/Q140263424",
  ],
  knowsAbout: [
    "Commercial Laundry",
    "Linen Management",
    "On-Demand Laundry Services",
    "Dry Cleaning",
    "Hospitality Laundry",
    "Hospital Linen",
    "Real Estate Development",
    "Land Banking",
    "Plotted Development",
  ],
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
    personSchema,
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
