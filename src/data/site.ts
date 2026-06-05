// =============================================================================
//  THE LAUNDRY BAG — content source of truth for the new site.
//
//  PRIMARY   — verbatim copy from the existing/legacy thelaundrybag.co.in site.
//  RESEARCHED — facts gathered from public sources (LinkedIn, JustDial,
//               Play Store, press) and cross-referenced with the owner's
//               details. Clearly separated so it can be reviewed/edited.
// =============================================================================

// ----- PRIMARY ---------------------------------------------------------------

export const site = {
  name: "The Laundry Bag",
  shortName: "TLB",
  legalName: "The Laundry Bag™",
  tagline: "Commercial and Residential Laundry and Dry Cleaning",
  taglinePrimary: "India's Leading Laundry Service Provider",
  promise: "Wash · Dry · Iron",
  motto: "The most convenient way to do laundry and dry cleaning",
  description:
    "The Laundry Bag — India's Leading Laundry Service Provider. Professional laundry, dry-cleaning and linen-management services for luxury hotels, resorts, hospitals and medical centres across India — and on-demand pickup and delivery for homes from our Raipur retail outlet. Trusted since 2013.",
  founded: 2013,

  emails: {
    hr: "hr@thelaundrybag.co.in",
  },
  phone: "+91 80859 90015",
  phoneDisplay: "(+91) 8085990015",
  phoneRaw: "8085990015",
  hours: "9:00 AM – 9:00 PM · Mon–Sun",

  address: {
    street: "Shankar Nagar, TV Tower Road",
    city: "Raipur",
    region: "Chhattisgarh",
    postalCode: "492007",
    country: "India",
    countryCode: "IN",
    full: "Shankar Nagar, TV Tower Road, Raipur, Chhattisgarh, India - 492007",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=The+Laundry+Bag+Shankar+Nagar+TV+Tower+Road+Raipur",
    geo: { lat: 21.24957, lng: 81.6602156 },
  },

  cities: [
    "Raipur",
    "Goa",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Bengaluru",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh",
    "Dehradun",
    "Nagpur",
    "Durg",
  ],

  socials: {
    facebook: "https://www.facebook.com/inthelaundrybag/",
    twitter: "https://twitter.com/inthelaundrybag",
    instagram: "https://www.instagram.com/inthelaundrybag/",
    linkedin: "https://www.linkedin.com/company/the-laundry-bag/",
  },

  website: "https://www.thelaundrybag.co.in",

  press: [
    {
      title: "YourStory · The Laundry Bag",
      href: "https://yourstory.com/mystory/baff4ffd31-the-laundry-bag",
      source: "YourStory",
    },
    {
      title: "Startup Buzz · This Pune startup is redefining laundry services",
      href: "https://www.startup-buzz.com/pune-startup-redefining-laundry-services/",
      source: "Startup Buzz",
    },
    {
      title: "Startup Buzz · In conversation with Nalin Agarwal",
      href: "https://www.startup-buzz.com/conversation-nalin-agarwal-co-founder-laundry-bag/",
      source: "Startup Buzz",
    },
    {
      title: "Letsmarkup · The man behind The Laundry Bag",
      href: "http://letsmarkup.com/the-man-behind-the-laundry-bag",
      source: "Letsmarkup",
    },
  ],
};

// PRIMARY — navigation. Grouped for the new mega/standard nav.
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "For your Home" },
  { to: "/commercial", label: "For your Business" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "Our Story" },
  { to: "/clients", label: "Clients & Press" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const homeServices = [
  {
    title: "Laundry",
    description:
      "We pickup your laundry, sort them, treat all the stains, wash, dry, iron and deliver back to you in one neat easy package.",
    icon: "washer",
    accent: "blue" as const,
    href: "/services",
  },
  {
    title: "Dry Cleaning Services",
    description:
      "We use Lagoon advance care for dry-clean-only tags. Fast, easy and green cleaning solutions for professional textile care.",
    icon: "shirt",
    accent: "grey" as const,
    href: "/services",
  },
  {
    title: "Commercial Laundry",
    description:
      "From an owner-operated hair salon to a government hospital and everything in between, we are the most responsive and cost-competitive laundry and linen provider in your city.",
    icon: "factory",
    accent: "brand" as const,
    href: "/commercial",
  },
];

export const businessServices = [
  {
    title: "Hotel Laundry",
    description:
      "Having served hotel chains of all sizes, The Laundry Bag handles laundry for properties from Grand Hyatt and Taj Exotica to JW Marriott, Hilton and Novotel. Our approach is flexible — install equipment on-site or process at our facility, handle rental linen or wash what you already own. With high-end finishing equipment and high-efficiency machines, we deliver a sustainable, affordable and responsive solution for hotels.",
  },
  {
    title: "Hospital Laundry",
    description:
      "From large medical centres like Tata Medical Center and Balco Medical Center to district hospitals, we manage hygienic, infection-safe linen processing — on-premise to maximise responsiveness or off-site to free up space. We're equipped to handle both your linen contract and patient personal laundry with the same care and attention to detail.",
  },
  {
    title: "Resorts & Premium Hospitality",
    description:
      "For resorts and luxury retreats such as Grand Hyatt Goa and Taj Exotica Goa, we deliver consistent, five-star linen, spa and F&B laundry — meeting the exacting standards your guests expect, every single day.",
  },
  {
    title: "Linen Rental & Management",
    description:
      "Save your capital on linen. We supply, launder, track and replace sheets, towels, robes and uniforms on a flexible rental model sized to your occupancy — you order, we handle the rest.",
  },
];

export const homeWeDo = [
  {
    title: "Laundry",
    description:
      "We pickup your laundry, sort them, treat all the stains, wash, dry, iron and deliver back to you in one neat easy package.",
  },
  {
    title: "Dry Clean",
    description:
      "We use Lagoon advance care for dry-clean-only tags. Fast, easy and green cleaning solutions for professional textile care.",
  },
  {
    title: "On Site Cleaning",
    description:
      "To keep your investment safe, we recommend professional deep cleaning your carpet every few months, and we are best at doing that.",
  },
];

export const whoWeServe = [
  {
    title: "Luxury Hotels & Resorts",
    description:
      "From Grand Hyatt and Taj Exotica in Goa to JW Marriott Chandigarh, Hilton Mumbai, Novotel Chennai and Hyatt properties across India — we manage guest linen, F&B and uniform laundry to five-star standards.",
  },
  {
    title: "Hospitals & Medical Centres",
    description:
      "Tata Medical Center Kolkata, Balco Medical Center Naya Raipur, Lata Mangeshkar Hospital Nagpur, DKS Hospital Raipur, SIMS Hospital Durg and Tata Trust hospitals in Ranchi & Tirupati trust us with hygienic, infection-safe linen processing.",
  },
  {
    title: "Linen Rental & Management",
    description:
      "We supply, launder and replace sheets, towels, robes and uniforms on a flexible rental model — so hotels and hospitals save on capital, storage and replacement costs.",
  },
  {
    title: "Retail Customers",
    description:
      "Walk in to our Laundry Bag outlet at Shankar Nagar, Raipur, or book free doorstep pickup and delivery for everyday laundry, dry cleaning, shoes, bags and upholstery.",
  },
];

export const howItWorks = [
  { step: "Step 1", title: "Bag up all your dirty clothes", icon: "bag" },
  { step: "Step 2", title: "We pick up your clothes", icon: "truck" },
  { step: "Step 3", title: "We clean your clothes", icon: "washer" },
  { step: "Step 4", title: "We deliver clean, folded clothes", icon: "check" },
];

export const operationalModels = [
  {
    title: "On-Premise Laundry Units",
    description:
      "The Laundry Bag™ sets up and operates fully-managed laundry facilities inside your premises, customised to your operation and fitted with best-in-class equipment — the model we run for hotels and hospitals such as Hyatt Raipur and DKS Hospital, Raipur.",
  },
  {
    title: "Central Processing Units",
    description:
      "Our central processing unit in Raipur (Chhattisgarh) is equipped with state-of-the-art machinery for clients who prefer to outsource their daily laundry. A network of well-managed logistics channels keeps service consistent and on-time across the cities we serve.",
  },
  {
    title: "Linen Rental & Management",
    description:
      "Beyond cleaning, we own and manage your linen — supplying, laundering and replacing hotel and hospital linen on a flexible rental model that frees up your capital, storage and replacement budgets.",
  },
];

export const whyChooseUs = [
  {
    title: "Eco Friendly",
    description:
      "We believe in water conservation and we save approximately 5,000 Litres of water per day!",
    icon: "leaf",
  },
  {
    title: "Affordable",
    description:
      "We at TLB aim at providing laundry at par to the laundry done at home, and our KG-based model proves to be successful in replacing the day-to-day laundry done at home through help or through machines.",
    icon: "tag",
  },
  {
    title: "Technology",
    description:
      "Laundry is all about combination of technology, detergent and water. We at TLB are loyal ELECTROLUX users.",
    icon: "spark",
  },
  {
    title: "Quality",
    description:
      "We use the best in class products, to assure that your favourite clothes are always there for you to wear.",
    icon: "shield",
  },
  {
    title: "Express Delivery",
    description:
      "Forgot to wash your clothes for an interview / business meeting? Never mind — with our super express delivery, we get your laundry done in less than 48 hours.",
    icon: "truck",
  },
  {
    title: "A Class Apart",
    description:
      "We are an ISO-certified company which aims at providing all water-based cleaning solutions; all our technology guarantees no hazardous emissions that could affect the environment.",
    icon: "star",
  },
];

export const counters = [
  { value: "5,00,000+", label: "Laundry Done" },
  { value: "15", label: "Washing Machines Works" },
  { value: "50,000+", label: "Dry Cleaned Items" },
  { value: "3,500", label: "Happy Customers" },
];

export const testimonials = [
  {
    name: "Rohit Shree",
    quote:
      "Service is quite good, though they need to improve on sticking to their delivery and pick up timings.",
  },
  {
    name: "Sudhanshu Dixit",
    quote: "Their service is so good. I like their work. The staff is so excellent.",
  },
  {
    name: "Sourabh",
    quote:
      "I am truly happy with The Laundry Bag! Consistent quality and reliable pickup every time.",
  },
  {
    name: "Jyoti",
    quote:
      "Their services are amazing — you all will be satisfied with them. Highly recommended.",
  },
  {
    name: "Sumit",
    quote:
      "Scheduling pickups is easy and the turnaround is quick. Great work team.",
  },
];

export const homeFeatures = [
  {
    title: "Eco-Friendly Dry Cleaning",
    description:
      "Our standardised process and imported equipment gives you best-in-class dry-cleaning results.",
  },
  {
    title: "Wash & Fold",
    description:
      "Your clothes go through an extensive process of treatment. Each garment is spotted for stains before the final treatment. Our USP — WE DO NOT MIX CLOTHES.",
  },
  {
    title: "Bag & Shoes",
    description:
      "Yes, we wash shoes & bags as well. If they are washable then trust us, nobody will do a better job than us.",
  },
  {
    title: "Delicate Garment Cleaning",
    description:
      "Special clothes require more than just dry-cleaning. Latest alternative technology and experienced staff give you high-quality results in cleaning your delicate garments.",
  },
  {
    title: "Drying",
    description:
      "Our sophisticated dryers dry your clothes in no time, helping us provide you a quick service.",
  },
  {
    title: "Ironing",
    description:
      "Use of steam iron gives you a creaseless finish with best quality ironing.",
  },
];

export const commercialFeatures = [
  {
    title: "Laundry",
    description:
      "Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.",
    image: "/images/img_02.jpg",
  },
  {
    title: "Dry Cleaning Services",
    description:
      "We use Lagoon Advanced Care for Dry-Clean-Only tags. Fast, easy and green cleaning solutions for professional textile care.",
    image: "/images/img_03.jpg",
  },
  {
    title: "Upholstery & Carpet Cleaning",
    description:
      "To keep your investment safe, we recommend professional deep cleaning your carpet every few months, and we are best at doing that.",
    image: "/images/img_04.jpg",
  },
];

export const commercialSubFeatures = [
  {
    title: "Sheets & Towels",
    description:
      "Our linen program covers a range of products appropriate for use in businesses of all types and sizes. From the bedding for a 100-bed hospital to the hand towels at a local coffee shop.",
  },
  {
    title: "Janitorial Supplies",
    description:
      "We offer a flat weekly rental price for items which includes our sustainable laundering and delivery service. We are also available to launder items you may already own.",
  },
  {
    title: "Entryway and Floor Mats",
    description:
      "We offer standard or customizable floor and entryway mats for a professional, clean appearance at your business that also increase safety and comfort for staff and customers.",
  },
  {
    title: "Linen Rentals",
    description:
      "Save investments on all the linen you purchase for your business — just order from us according to your occupancy and we'll handle the rest.",
  },
  {
    title: "All Under One Roof",
    description:
      "From Sofa, Carpets to Upholstery — we have it all under control for you.",
  },
];

export const locations = [
  {
    city: "Raipur",
    state: "Chhattisgarh",
    role: "Headquarters · Retail & CPU",
    image: "/images/raipur-location.png",
    description:
      "Our headquarters and central processing unit. Walk in to our Laundry Bag retail outlet at Shankar Nagar, or book free doorstep pickup and delivery. We also run on-premise and linen programmes for Hyatt Raipur, DKS Hospital and Balco Medical Center, Naya Raipur.",
  },
  {
    city: "Goa",
    state: "Goa",
    role: "Luxury hospitality",
    image: "/images/goa-location-new.png",
    description:
      "We manage linen for Goa's marquee hospitality — including Grand Hyatt Goa and Taj Exotica Goa — delivering five-star washing, finishing and linen-rental programmes for resorts and the guests they host.",
  },
  {
    city: "Across India",
    state: "20+ cities",
    role: "Hotels & Hospitals",
    image: "/images/pune-location.png",
    description:
      "From Hilton Mumbai, JW Marriott Chandigarh and Novotel Chennai to Tata Medical Center Kolkata and Lata Mangeshkar Hospital Nagpur, our teams run laundry and linen programmes for leading hotels and hospitals nationwide.",
  },
];

export const extraCities = [
  { city: "Mumbai", note: "Linen & laundry for Hilton, Mumbai." },
  { city: "Chennai", note: "Hyatt Regency and Novotel, Chennai." },
  { city: "Kolkata", note: "Hyatt Regency and Tata Medical Center, Kolkata." },
  { city: "Hyderabad", note: "Hyatt, Hyderabad." },
  { city: "Bengaluru", note: "Hyatt Centric, Bangalore." },
  { city: "Ahmedabad", note: "Hyatt Regency and Hyatt, Vastrapur." },
  { city: "Jaipur", note: "Hyatt Place, Jaipur." },
  { city: "Lucknow", note: "Hyatt Regency, Lucknow." },
  { city: "Dehradun", note: "Hyatt Regency, Dehradun." },
  { city: "Chandigarh", note: "JW Marriott, Chandigarh." },
  { city: "Bodhgaya", note: "Hyatt Place, Bodhgaya." },
  { city: "Pune", note: "Hyatt, Pune." },
  { city: "Nagpur", note: "Lata Mangeshkar Hospital, Nagpur." },
  { city: "Durg", note: "SIMS Hospital, Durg." },
  { city: "Ranchi & Tirupati", note: "Tata Trust supported hospitals." },
];

export const faqs = [
  {
    category: "Your First Order!",
    items: [
      {
        q: "What should I prepare for the first pickup?",
        a: "Bag up all your dirty clothes — that's it. Our pickup partner will arrive at your scheduled time slot with a tagged Laundry Bag. You can mention specific notes per garment on a paper slip or when you call us; we'll take it from there.",
      },
      {
        q: "How long does cleaning take?",
        a: "We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you'd prefer we went a little slower then that's not a problem — just let us know when you want your clothes back.",
      },
      {
        q: "Can I add extra items to my order when you collect?",
        a: "Absolutely. Hand any extra items to the pickup partner and we'll add them to your order automatically. We'll confirm the updated list and price with you before delivery.",
      },
      {
        q: "Which items should be dry cleaned and which should be laundered?",
        a: "As a rule of thumb: suits, blazers, silks, woollens, sarees with zari/embroidery and structured garments go to dry cleaning. Everyday cottons, t-shirts, jeans, kurtas, undergarments and linens go to wash & fold. Not sure? Tell us in the notes and our team will pick the safest method.",
      },
      {
        q: "Can I order by phone or email?",
        a: "Yes. Call us on (+91) 8085990015 and we'll schedule a pickup at your preferred time.",
      },
      {
        q: "How do I know if you can clean a specific type of clothing?",
        a: "If you're unsure about a garment, call us on (+91) 8085990015 and we'll confirm the right cleaning process before pickup.",
      },
      {
        q: "I'm not sure how my items should be cleaned. What should I do?",
        a: "Leave it to us. We inspect every garment and choose the safest cleaning method based on fabric, colour-fastness and care label. We never use anything harsh on delicates.",
      },
      {
        q: "Where are my clothes cleaned?",
        a: "Retail laundry is cleaned at our central processing unit in Raipur. For hotel and hospital clients, we process either at an on-premise unit inside your facility or at our nearest processing unit, with managed logistics ensuring consistent turnaround.",
      },
      {
        q: "Why do women's blouses cost more than men's shirts?",
        a: "Women's blouses generally require more hand-finishing — they're cut closer to the body, often have delicate trims, and need a smaller iron and more attention to crease the right way. The extra time means a slightly higher price.",
      },
      {
        q: "Are there any fabrics you don't clean?",
        a: "We clean almost everything, but we'll refuse anything we believe will be damaged by cleaning (heavily decomposed garments, items with leather/fur trims that need specialist treatment, etc.). In such cases we contact you first.",
      },
    ],
  },
  {
    category: "Dry Cleaning",
    items: [
      {
        q: "What if my clothes are damaged?",
        a: "Any items determined to have been damaged by The Laundry Bag will be reimbursed in accordance with the International Fabricare Fair Claims Guide and shall not exceed ten (10) times our charge for cleaning that garment regardless of brand or condition.",
      },
      {
        q: "What's this little sticker you've put on my clothes?",
        a: "It's a barcode tag we attach during sorting so we can track your garment through every step of the process. The tag comes off before delivery — if any remain, they peel off without residue.",
      },
      {
        q: "Can you remove all stains?",
        a: "We treat every stain we find with the safest effective method, but we can't guarantee removal of every stain — some set permanently before they reach us. If a stain is unsafe to remove without damaging the fabric, we won't risk it.",
      },
    ],
  },
  {
    category: "Wash, Tumble Dry & Fold",
    items: [
      {
        q: "Do I need to weigh my Wash, Tumble Dry & Fold bag?",
        a: "No — we weigh the bag at our facility. We'll confirm the exact weight and final price with you before delivery.",
      },
      {
        q: "Are there any clothes you cannot clean in a Wash, Tumble Dry & Fold?",
        a: "Anything labelled dry-clean-only, delicates with embroidery or beading, leather and items that need ironing-only should be flagged separately. We'll move them to the right service.",
      },
      {
        q: "Do I need to sort my clothes into colours and whites?",
        a: "No — our team sorts every order by colour, fabric and wash temperature. Our USP is that we do not mix clothes between customers either.",
      },
      {
        q: "What temperature do you wash the clothes at?",
        a: "Most everyday cottons and linens wash at 30°C–40°C. Whites and heavily soiled items wash hotter; delicates wash cold. The choice is always driven by the garment, not the bag.",
      },
      {
        q: "Do you dry my clothes?",
        a: "Yes — our sophisticated dryers dry your clothes in no time. Items that shouldn't be tumble-dried (e.g. woollens) are flat-dried or hung-dried instead.",
      },
      {
        q: "Do I get to keep the bag?",
        a: "Yes — the Laundry Bag is yours. Use it for your next pickup.",
      },
    ],
  },
];

// ----- RESEARCHED ------------------------------------------------------------
// Sourced from public profiles (LinkedIn, JustDial, Play Store, press) and
// cross-referenced with the owner's known details. Review before publishing.

// Founders / leadership (LinkedIn, Startup Buzz, Letsmarkup).
export const founders = [
  {
    name: "Shourya Jain",
    role: "Founder",
    bio: "Founder of The Laundry Bag™. Based in Raipur, Chhattisgarh, Shourya leads the company's vision of building one of India's leading laundry networks and a Built-Own-Operate linen platform for hotels, hospitals and enterprises.",
    href: "https://www.linkedin.com/in/shourya-jain-1b2562162",
  },
  {
    name: "Nalin Agarwal",
    role: "Co-Founder",
    bio: "Co-founder of The Laundry Bag™. Nalin helped build the company's B2B laundry and linen-management programmes for leading hotels and hospitals across India.",
    href: "https://www.linkedin.com/in/nalin-agarwal-94603335",
  },
  {
    name: "Honey Jain",
    role: "Co-Founder",
    bio: "Co-founder of The Laundry Bag™, part of the founding team that started the venture together.",
    href: site.socials.linkedin,
  },
];

// Company facts for the "Our Story" / about section.
export const companyFacts = [
  { label: "Founded", value: "2013" },
  { label: "Headquarters", value: "Raipur, Chhattisgarh" },
  { label: "Industry", value: "Laundry & Dry Cleaning" },
  { label: "Presence", value: "India · 20+ cities" },
];

// Brand story timeline (compiled from press + the legacy site).
export const timeline = [
  {
    year: "2013",
    title: "The idea is born",
    text: "Two college friends set out to fix laundry for homes and institutions — one of the first Indian companies to run a managed laundromat model where soiled laundry is finished in a clean, hygienic environment within 24 hours.",
  },
  {
    year: "2014",
    title: "The Laundry Bag™ launches",
    text: "The brand formally launches, built on a simple promise: we never mix your laundry with anyone else's, processed with professional, state-of-the-art equipment and continuous personal care.",
  },
  {
    year: "B2B expansion",
    title: "Hotels & hospitals",
    text: "The Laundry Bag scales into hospitality and healthcare — running laundry and linen programmes for leading hotel chains (Hyatt, Marriott, Hilton, Taj, Novotel) and major hospitals (Tata Medical Center, Balco Medical Center, Lata Mangeshkar Hospital) across India.",
  },
  {
    year: "Scale-up",
    title: "Central processing unit",
    text: "A central processing unit comes online in Raipur (Chhattisgarh), supported by a managed logistics network that keeps B2B and retail service consistent across the cities we serve.",
  },
  {
    year: "Today",
    title: "Built-Own-Operate platform",
    text: "The Laundry Bag operates as a linen partner on a Built-Own-Operate platform for hotels, hospitals and enterprises across the country — present in more than 20 cities.",
  },
];

// Differentiators / USPs (legacy + Play Store copy).
export const usps = [
  {
    title: "We never mix your clothes",
    description:
      "Unlike other laundry operators in your city, WE DO NOT MIX YOUR LAUNDRY with anybody else's. Your clothes get individual care and personal attention.",
    icon: "shield",
  },
  {
    title: "24-hour finish",
    description:
      "Soiled or stained laundry is processed and finished in a clean, hygienic environment — typically within 24 hours on the laundromat concept.",
    icon: "clock",
  },
  {
    title: "Free pickup & delivery",
    description:
      "On-demand, free pick-up and delivery right at your doorstep, at a time of your liking — just a call away.",
    icon: "truck",
  },
  {
    title: "PERC-free & eco-friendly",
    description:
      "We wash in all-natural detergents and our dry-cleaning process is PERC-free, saving roughly 5,000 litres of water a day.",
    icon: "leaf",
  },
];

// Client / partner directory grouped by sector (legacy + research).
export const clientGroups = [
  {
    sector: "Hospitality",
    items: [
      "Grand Hyatt, Goa",
      "Taj Exotica, Goa",
      "JW Marriott, Chandigarh",
      "Hilton, Mumbai",
      "Novotel, Chennai",
      "Five Lotus, Raitum",
      "Hyatt Regency · Chennai, Kolkata, Lucknow, Ahmedabad, Dehradun",
      "Hyatt Centric, Bangalore",
      "Hyatt Place · Jaipur, Bodhgaya",
      "Hyatt · Hyderabad, Pune, Raipur, Vastrapur",
    ],
  },
  {
    sector: "Healthcare",
    items: [
      "Tata Medical Center, Kolkata",
      "Tata Trust Hospitals · Ranchi & Tirupati",
      "Balco Medical Center, Naya Raipur",
      "Lata Mangeshkar Hospital, Nagpur",
      "DKS Hospital, Raipur",
      "SIMS Hospital, Durg",
    ],
  },
  {
    sector: "Retail",
    items: ["The Laundry Bag Retail · Shankar Nagar, Raipur"],
  },
];

// Brand-level logo wall for the home-page & commercial marquees. `logo` points
// to an SVG in /public/images/clients. If a logo file is missing, the marquee
// gracefully falls back to a styled wordmark of `name`.
export const clientLogos = [
  { name: "Taj Hotels", logo: "/images/clients/taj.svg" },
  { name: "Marriott", logo: "/images/clients/marriott.svg" },
  { name: "Hyatt", logo: "/images/clients/hyatt.svg" },
  { name: "Hilton", logo: "/images/clients/hilton.svg" },
  { name: "Novotel", logo: "/images/clients/novotel.svg" },
  {
    name: "Tata Medical Center",
    logo: "/images/clients/tata-medical-center.png",
  },
  { name: "Balco Medical Centre", logo: "/images/clients/balco.png" },
  { name: "SIMS Hospital", logo: "/images/clients/sims-hospital.webp" },
];

// Flat name list (kept for back-compat / SEO use).
export const featuredClients = [
  "Grand Hyatt, Goa",
  "Taj Exotica, Goa",
  "JW Marriott, Chandigarh",
  "Hilton, Mumbai",
  "Novotel, Chennai",
  "Hyatt Regency, Kolkata",
  "Hyatt Regency, Chennai",
  "Hyatt Regency, Lucknow",
  "Hyatt Regency, Ahmedabad",
  "Hyatt Regency, Dehradun",
  "Hyatt Centric, Bangalore",
  "Hyatt Place, Jaipur",
  "Hyatt Place, Bodhgaya",
  "Hyatt, Hyderabad",
  "Hyatt, Pune",
  "Hyatt, Raipur",
  "Hyatt, Vastrapur",
  "Five Lotus, Raitum",
  "Tata Medical Center, Kolkata",
  "Tata Trust Hospitals · Ranchi & Tirupati",
  "Balco Medical Center, Naya Raipur",
  "Lata Mangeshkar Hospital, Nagpur",
  "DKS Hospital, Raipur",
  "SIMS Hospital, Durg",
];

// Ratings / reputation (JustDial) — review before publishing.
export const ratings = [
  {
    source: "JustDial",
    score: "3.3",
    scale: "5",
    detail: "Based on 167 customer ratings",
  },
];

// SEO — non-visible keyword list (meta tags + JSON-LD).
// Full superset carried over from the legacy site, expanded with the new
// founder/co-founder names and the pan-India hotel/hospital footprint so the new site never
// regresses on the keyword permutations Googlebot already indexes.
export const seoKeywords = [
  // brand / business
  "laundry",
  "laundry bag",
  "the laundry bag",
  "The Laundry Bag",
  "thelaundrybag",
  "the laundrybag",
  "laundry basket",
  "TLB",
  "TLB Raipur",
  "TLB laundry",
  "TLB India",
  "best laundry",
  "best laundry service",
  "best laundry in India",
  "best laundry in Raipur",
  "best dry cleaning Raipur",
  "best dry cleaning India",
  // geography
  "India",
  "Raipur",
  "Chhattisgarh",
  "Raipur Chhattisgarh",
  "Raipur India",
  "Chhattisgarh India",
  "Pune",
  "Goa",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Bengaluru",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Dehradun",
  "Nagpur",
  "Durg",
  // service permutations
  "laundry service India",
  "laundry service Raipur",
  "laundry service Chhattisgarh",
  "laundry service in India",
  "laundry service in Raipur",
  "laundry service in Chhattisgarh",
  "laundry near me",
  "laundry Raipur",
  "laundry Chhattisgarh",
  "laundry India",
  "laundry in raipur",
  "laundry in india",
  "laundry in chhattisgarh",
  "laundry in pune",
  "laundry in goa",
  "laundry in mumbai",
  "laundry in chennai",
  "laundry in kolkata",
  "laundry in hyderabad",
  "the laundry bag Raipur",
  "the laundry bag India",
  "the laundry bag Chhattisgarh",
  // commercial / specialty
  "commercial laundry",
  "commercial laundry India",
  "commercial laundry in india",
  "commercial laundry Raipur",
  "on demand laundry",
  "on demand dry cleaning",
  "laundry pickup delivery",
  "wash and fold",
  "wash dry iron",
  "hotel laundry service",
  "hospital laundry service",
  "luxury hotel laundry",
  "5 star hotel laundry",
  "hotel linen rental",
  "hospital linen management",
  "resort laundry service",
  "dry cleaning",
  "dry cleaning Raipur",
  "dry cleaners Raipur",
  "dry cleaning in india",
  "laundromat",
  "laundromat in India",
  "laundromat Raipur",
  "linen rental India",
  // founder permutations (intentional, requested)
  "Shourya Jain",
  "shourya jain",
  "Shourya",
  "Jain",
  "Shourya Jain Raipur",
  "Shourya Jain Chhattisgarh",
  "Shourya Jain India",
  "Shourya Jain TLB",
  "Shourya Jain the laundry bag",
  "Shourya Jain laundry",
  "Shourya Jain founder",
  "founder of The Laundry Bag",
  "owner of The Laundry Bag",
  "the laundry bag Shourya Jain",
  "laundry bag Shourya Jain",
  "TLB Shourya Jain",
  "Shourya Jain Raipur Chhattisgarh",
  "Nalin Agarwal",
  "Nalin Agarwal The Laundry Bag",
  "Nalin Agarwal co-founder",
  "Honey Jain",
  "Honey Jain The Laundry Bag",
  "Honey Jain co-founder",
];

// Convenience aliases for back-compat.
export const services = homeFeatures;
export const commercial = commercialFeatures;
export const stats = counters;
