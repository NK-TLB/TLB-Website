// =============================================================================
//  PRIMARY DATA
//  ------------
//  Everything in the PRIMARY section is content that existed on the original
//  thelaundrybag.co.in website (still indexed by Google in the legacy
//  /home/index.php/pages/* URLs). This is the canonical, public-facing copy
//  that should lead the visible UI and be the main thing Google re-indexes
//  after the migration to Netlify.
//
//  SECONDARY DATA
//  --------------
//  Information added later from JustDial, IndiaMart, LinkedIn and the
//  user's own knowledge of the business (exact street address, named B2B
//  clients, on-campus student counts, Google rating, etc.). These are
//  supplementary details — useful for credibility and local SEO but they
//  should never overshadow the primary indexed copy.
// =============================================================================

// ----- PRIMARY ---------------------------------------------------------------

export const site = {
  // PRIMARY — brand identity from the original website
  name: "The LaundryBag",
  shortName: "TLB",
  legalName: "The LaundryBag™",
  tagline: "On Demand Laundry & Dry-Clean",
  promise: "Wash · Dry · Iron",
  motto: "Less laundry. More life.",
  description:
    "The LaundryBag is one of India's first on-demand laundry and dry-cleaning services — for homes, students, hotels, hospitals and businesses. Free pickup and delivery, hygienic processing, no mixing of clothes. Trusted since 2013.",
  founded: 2013,

  // PRIMARY — original contact details from the legacy site
  email: "contact@thelaundrybag.co.in",
  phone: "+91 91111 32222",
  phoneDisplay: "091111 32222",
  phoneHref: "tel:+919111132222",
  whatsappHref: "https://wa.me/919111132222",

  // PRIMARY — original cities served (as listed on the old site)
  cities: ["Raipur", "Pune", "Goa"],

  // PRIMARY — apps listed/linked from the legacy site
  android:
    "https://play.google.com/store/apps/details?id=com.starchup.thelaundrybag",
  ios: "https://apps.apple.com/in/app/the-laundry-bag-tx/id6742189723",

  // ----- SECONDARY (supplementary) ------------------------------------------
  // Local business / GMB intel — added for local SEO & Contact / Locations
  // pages. Don't lead pages with this; use it as supporting detail.
  hours: "Mon – Sun · 9:00 AM – 9:00 PM",
  rating: { value: 3.6, count: 144 },
  address: {
    street: "Jain Mandir Campus, T V Tower Road",
    landmark: "Opposite Cafe 9",
    city: "Raipur",
    region: "Chhattisgarh",
    postalCode: "492004",
    country: "India",
    countryCode: "IN",
    full: "Jain Mandir Campus, T V Tower Road, Opposite Cafe 9, Raipur, Chhattisgarh 492004, India",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=The+Laundry+Bag+Jain+Mandir+Campus+TV+Tower+Road+Raipur",
    geo: { lat: 21.2466, lng: 81.6328 },
  },
  socials: {
    instagram: "https://www.instagram.com/the_laundry_bag/",
    linkedin: "https://www.linkedin.com/company/the-laundry-bag/",
    justdial:
      "https://www.justdial.com/Raipur-Chhattisgarh/The-laundry-bag-Near-Congress-Bhawan-Shanker-Nagar/9999PX771-X771-210528144840-J3V6_BZDET",
    indiamart: "https://www.indiamart.com/thelaundry-bag/",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/commercial", label: "B2B / Commercial" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/app", label: "App" },
  { to: "/contact", label: "Contact" },
];

// PRIMARY — residential / student services copy lifted from the original
// /home/index.php/pages/laundry-and-dry-cleaning-for-residents-and-students
export const services = [
  {
    title: "Wash & Fold",
    description:
      "Pickup, sort, stain-treat, wash, dry and fold — and your laundry is back at your door, neatly packed.",
    icon: "washer",
  },
  {
    title: "Dry Cleaning",
    description:
      "Eco-friendly PERC-free dry cleaning using Lagoon Advance Care — gentle on your clothes and the environment.",
    icon: "shirt",
  },
  {
    title: "Iron & Steam Press",
    description:
      "Crisp, ready-to-wear finish for shirts, sarees, suits, kurtas and uniforms.",
    icon: "iron",
  },
  {
    title: "Shoe & Bag Cleaning",
    description:
      "Specialty cleaning for sneakers, leather handbags and other accessories.",
    icon: "bag",
  },
  {
    title: "Delicates & Designer Wear",
    description:
      "Hand-finished care for silks, embroidery, lehengas and high-value garments.",
    icon: "sparkle",
  },
  {
    title: "Free Pickup & Delivery",
    description:
      "Schedule a pickup at your preferred time — collection and delivery are free of cost.",
    icon: "truck",
  },
];

// PRIMARY — commercial / institutional services copy lifted from the original
// /home/index.php/pages/commercial-laundry-for-institutions-and-businesses
export const commercial = [
  {
    title: "Hotels & Resorts",
    description:
      "Bed linen, towels, robes and F&B uniforms — cleaned to hospitality-grade standards.",
  },
  {
    title: "Hospitals & Clinics",
    description:
      "Hygienic, sanitised processing of scrubs, gowns, bedding and patient laundry with strict segregation.",
  },
  {
    title: "Universities & Hostels",
    description:
      "On-campus laundromats and pickup/drop plans for students and staff.",
  },
  {
    title: "Restaurants & Cafés",
    description:
      "Aprons, napkins, tablecloths and chef whites returned crisp and on schedule.",
  },
  {
    title: "Sheets, Towels & Linen Rentals",
    description:
      "Rent professionally laundered linen — no capital expense, no inventory headaches.",
  },
  {
    title: "Upholstery & Carpet Cleaning",
    description:
      "Deep cleaning for sofas, curtains, carpets and rugs at your premises or ours.",
  },
];

// PRIMARY — original three cities served
export const locations = [
  {
    city: "Raipur",
    state: "Chhattisgarh",
    role: "Headquarters",
    description:
      "Our home base. Doorstep pickup and delivery for homes, hostels and businesses across the city.",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    role: "On-campus laundromats",
    description:
      "On-campus laundromat operations at Symbiosis International University.",
  },
  {
    city: "Goa",
    state: "Goa",
    role: "On-campus laundromats",
    description:
      "On-campus laundromat at BITS Pilani Goa Campus.",
  },
];

// PRIMARY — FAQ answers shaped from the original FAQ page
export const faqs = [
  {
    q: "How does The LaundryBag work?",
    a: "Schedule a pickup via the app, website or a phone call. We collect your laundry from your doorstep, clean it in our hygienic facility, and deliver it back — usually within 48 hours.",
  },
  {
    q: "Do you mix my clothes with other customers' laundry?",
    a: "Never. Every customer's clothes are tagged, tracked and cleaned separately. No mixing — that's been our promise since 2013.",
  },
  {
    q: "What is your turnaround time?",
    a: "Standard turnaround is 48 hours. We can go faster on request, or slower if you prefer.",
  },
  {
    q: "How much does it cost?",
    a: "Our prices are simple and affordable. We offer Silver, Gold and Platinum packages. Commercial pricing is customised based on volume and frequency.",
  },
  {
    q: "Is pickup and delivery free?",
    a: "Yes — pickup and delivery are free of cost within our service area. You only pay for the laundry service itself.",
  },
  {
    q: "Which cities do you operate in?",
    a: "We currently operate in Raipur (headquarters), Pune (on-campus at Symbiosis International University) and Goa (on-campus at BITS Pilani Goa Campus). We also serve commercial clients in other cities.",
  },
  {
    q: "Is dry cleaning safe for my garments?",
    a: "We use Lagoon Advance Care — a PERC-free dry-cleaning solution that's gentle on fabrics and skin-friendly. Delicates, embroidery and designer wear are hand-finished.",
  },
  {
    q: "Do you offer corporate, hospital or hotel contracts?",
    a: "Yes. We work with hotels, hospitals, salons, restaurants, schools and corporates across India. Visit our Commercial page or email contact@thelaundrybag.co.in.",
  },
];

// ----- SECONDARY -------------------------------------------------------------
// The data below is supplementary and should appear in clearly-labeled
// "Featured partners", "By the numbers" or detail sections — never as the
// hero/lead content of a page.

// SECONDARY — named B2B partners gathered from IndiaMart / public profiles.
export const featuredClients = [
  "Hotel Ivy",
  "Hotel Puneet International",
  "Toni & Guy",
  "VLCC",
  "Shankracharya Institute of Medical Sciences",
  "IIIT Raipur",
  "NIT Raipur",
  "Symbiosis International University · Pune",
  "BITS Pilani · Goa Campus",
];

// SECONDARY — campus / retail volume metrics (IndiaMart profile).
export const locationDetails: Record<
  string,
  { stat?: string; partner?: string; note?: string }
> = {
  Raipur: {
    stat: "3,000+ retail customers",
    note: "Flagship outlet at Jain Mandir Campus, T V Tower Road.",
  },
  Pune: {
    stat: "~3,000 students served",
    partner: "Symbiosis International University · 3 campuses",
  },
  Goa: {
    stat: "~2,200 students served",
    partner: "BITS Pilani · Goa Campus",
  },
};

// SECONDARY — high-level "by the numbers" used in supporting strips.
export const stats = [
  { value: "12+", label: "Years in business" },
  { value: "5,000+", label: "Happy customers" },
  { value: "3", label: "Cities served" },
  { value: "20+", label: "B2B clients" },
];

// SEO — non-visible keyword list (meta tags, JSON-LD, robots-friendly).
// Keep these in code only; they should NOT appear as visible UI copy.
export const seoKeywords = [
  "laundry",
  "laundry bag",
  "the laundry bag",
  "thelaundrybag",
  "laundry basket",
  "TLB",
  "best laundry",
  "best laundry service",
  "laundry service India",
  "laundry service Raipur",
  "laundry near me",
  "laundry Raipur",
  "dry cleaning Raipur",
  "dry cleaners Raipur",
  "laundry pickup delivery",
  "on demand laundry",
  "wash and fold",
  "wash dry iron",
  "commercial laundry India",
  "hotel laundry service",
  "hospital laundry service",
  "campus laundry",
  "linen rental India",
  "laundromat Raipur",
  "TLB Raipur",
  "TLB laundry",
  "laundry Chhattisgarh",
];
