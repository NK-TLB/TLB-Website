// =============================================================================
//  PRIMARY DATA — sourced verbatim from the original thelaundrybag.co.in
//  PHP/CodeIgniter site (still indexed by Google in the legacy
//  /home/index.php/pages/* URLs). This is the canonical, public-facing copy
//  that leads the visible UI and is what Google should re-index after the
//  migration to Netlify.
//
//  SECONDARY DATA — supplementary intel later added from JustDial, IndiaMart,
//  LinkedIn and the user's own knowledge of the business (exact street
//  address, named B2B clients, on-campus student counts, Google rating, etc.).
// =============================================================================

// ----- PRIMARY ---------------------------------------------------------------

export const site = {
  name: "The Laundry Bag",
  shortName: "TLB",
  legalName: "The Laundry Bag™",
  tagline: "Commercial and Residential Laundry and Dry Cleaning",
  promise: "Wash · Dry · Iron",
  motto: "The most convenient way to do laundry and dry cleaning",
  description:
    "The Laundry Bag provides professional laundry and dry-cleaning services to government establishments, hospitals, hotels, restaurants, colleges, schools and companies of all sizes — and on-demand pickup and delivery for homes and students. Trusted since 2013.",
  founded: 2013,

  // PRIMARY — original contact details from the legacy site (header/footer)
  email: "contact@thelaundrybag.co.in",
  emails: {
    query: "query@thelaundrybag.co.in",
    contact: "contact@thelaundrybag.co.in",
    hr: "hr@thelaundrybag.co.in",
    franchise: "nalin@thelaundrybag.co.in",
  },
  phone: "+91 91111 32222",
  phoneDisplay: "+91 9111132222",
  phoneRaw: "9111132222",
  phoneHref: "tel:+919111132222",
  whatsappHref: "https://wa.me/919111132222",
  hours: "9:00 AM – 9:00 PM · Mon–Sun",

  // PRIMARY — addresses as shown in the legacy header/footer
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

  // PRIMARY — cities from the embedded Google Map on the legacy site
  cities: ["Raipur", "Pune", "Goa", "Delhi", "Noida", "Gurgaon"],

  // PRIMARY — apps linked from the legacy slider (Play Store + iTunes)
  android:
    "https://play.google.com/store/apps/details?id=com.thelaundrybagplus.app",
  ios: "https://apps.apple.com/in/app/the-laundry-bag/id1470016128",

  // PRIMARY — social links from the legacy footer
  socials: {
    facebook: "https://www.facebook.com/inthelaundrybag/",
    twitter: "https://twitter.com/inthelaundrybag",
    instagram: "https://www.instagram.com/inthelaundrybag/",
    linkedin: "https://www.linkedin.com/company/the-laundry-bag/",
  },

  // PRIMARY — news / press links from the legacy nav
  press: [
    {
      title: "YourStory · The Laundry Bag",
      href: "https://yourstory.com/mystory/baff4ffd31-the-laundry-bag",
    },
    {
      title: "Startup Buzz · This Pune startup is redefining laundry services",
      href: "https://www.startup-buzz.com/pune-startup-redefining-laundry-services/",
    },
    {
      title: "Startup Buzz · In conversation with Nalin Agarwal",
      href: "https://www.startup-buzz.com/conversation-nalin-agarwal-co-founder-laundry-bag/",
    },
    {
      title: "Letsmarkup · The man behind The Laundry Bag",
      href: "http://letsmarkup.com/the-man-behind-the-laundry-bag",
    },
  ],
};

// PRIMARY — navigation as on the legacy site, lightly adapted to multi-page.
export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "For your Home" },
  { to: "/commercial", label: "For your Business" },
  { to: "/about", label: "Who we are" },
  { to: "/faq", label: "FAQ" },
  { to: "/app", label: "App" },
  { to: "/contact", label: "Contact Us" },
];

// PRIMARY — 3 hero service cards from the legacy home page.
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
    accent: "green" as const,
    href: "/commercial",
  },
];

// PRIMARY — "What we do for your business" carousel (legacy home.php).
export const businessServices = [
  {
    title: "Hotel Laundry",
    description:
      "Having served hotel businesses of all sizes, The Laundry Bag can handle laundry facilities of top hotel chains as well as local motels. Our approach is flexible. We can get equipment installed or work with your existing facility; handle rental linens or wash what you already own. With a new suite of high-end finishing equipment and high-efficiency machines, we'll continue to be the most sustainable, affordable, and responsive solution for local hotels.",
  },
  {
    title: "Hospital Laundry",
    description:
      "From a government Hospital to a mid-sized health clinic to a local therapist's office, we've managed all of it and also have been able to dramatically decrease linen budgets for healthcare providers. Our team can manage your facility's on-premise laundry to ensure responsiveness or process off-site to free up space in your building. Plus, we're the only provider that can handle your linen contract and your patient personal laundry with the same care and attention to detail.",
  },
  {
    title: "On Campus Laundromats",
    description:
      "Be it a college, a society or an IT campus, a fully functional outlet is setup in the premises for easy access to daily laundry needs of the clients. Such outlets are fitted with hi-tech washers, dryers & ironers and unlike European laundromats we have a total team which takes care of your entire laundry while you sit at home and relax.",
  },
  {
    title: "Small Local Businesses",
    description:
      "From an owner-operated hair salon to a government hospital and everything in between, we are the most responsive and cost-competitive laundry and linen provider in your city. We're the fastest, most responsive, most affordable laundry and linen solution for small to large businesses in our area.",
  },
];

// PRIMARY — "What we do for your home" carousel (legacy home.php).
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

// PRIMARY — "Who we serve" cards (legacy home.php).
export const whoWeServe = [
  {
    title: "Retail Customers",
    description:
      "Be it laundry, dryclean or on site cleaning, we are a one stop solution for all that is to take care of, currently serving in Raipur we have made almost 3000 customers in a short duration of one and half years.",
  },
  {
    title: "Small Local Businesses",
    description:
      "Serving end number of small businesses, chain of salons and spas we have made quite many customers who love doing business with us, to name a few — Toni & Guy, VLCC, Hotel Ivy, Hotel Puneet International and so on.",
  },
  {
    title: "On Campus Laundromats",
    description:
      "Symbiosis International University, BITS Goa, IIT Jabalpur, Hidayatullah National Law University, IIIT Raipur, NIT Raipur.",
  },
  {
    title: "Hospital Laundry",
    description: "Shankaracharya Institute of Medical Sciences (CG).",
  },
  {
    title: "Hotel Laundry",
    description: "Zone by The Park, Ginger Hotels.",
  },
];

// PRIMARY — 4-step process (legacy home.php / footer modal).
export const howItWorks = [
  { step: "Step 1", title: "Bag up all your dirty clothes" },
  { step: "Step 2", title: "We pick up your clothes" },
  { step: "Step 3", title: "We clean your clothes" },
  { step: "Step 4", title: "We deliver clean, folded clothes" },
];

// PRIMARY — 3 operational models (legacy home.php / what-we-do.php).
export const operationalModels = [
  {
    title: "On Campus Laundromats",
    description:
      "A fully functional outlet is set up on the premises for easy access to daily laundry needs of clients. Such outlets are fitted with hi-tech washers, dryers & ironers. We have successfully installed such laundromats in educational institutes like Symbiosis International University, IIIT Jabalpur, BITS Pilani Goa Campus etc.",
  },
  {
    title: "Central Processing Units",
    description:
      "The Laundry Bag™ has successfully installed central processing units in Raipur (Chhattisgarh) & Noida (Uttar Pradesh). Both facilities are equipped with state-of-the-art equipment required to provide best quality services to clients who wish to outsource their daily laundry needs. A network of well-managed logistics channels helps in providing consistent service.",
  },
  {
    title: "On Premise Laundry Unit",
    description:
      "The Laundry Bag™ also helps in setting up and operating on-premise laundry facilities. These facilities are customised according to the requirement of an organisation and are fitted with best-in-class equipment. We've successfully set up an operational on-premises laundry unit at Shankaracharya Medical College, Durg (Chhattisgarh) — catering to 3,000 medical students and a 100-bed hospital.",
  },
];

// PRIMARY — "Why Choose Us" (legacy home.php / who-we-are.php).
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

// PRIMARY — counters (legacy home.php / who-we-are.php).
export const counters = [
  { value: "5,00,000+", label: "Laundry Done" },
  { value: "15", label: "Washing Machines Works" },
  { value: "50,000+", label: "Dry Cleaned Items" },
  { value: "3,500", label: "Happy Customers" },
];

// PRIMARY — testimonials (legacy home.php carousel).
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
      "I am truly happy with The Laundry Bag! Though as far as the app is concerned, there is still a way to go in the UI.",
  },
  {
    name: "Jyoti",
    quote:
      "Awesome application to operate. Variety of stuff in the application. Their services are amazing — you all will be satisfied with them. Highly recommended.",
  },
  {
    name: "Sumit",
    quote:
      "App is very smooth and simple, the time-slot function is amazing. Great work team.",
  },
];

// PRIMARY — features grid from residents/students page.
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

// PRIMARY — commercial features grid from institutions/businesses page.
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

// PRIMARY — commercial sub-features (legacy commercial page).
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

// PRIMARY — original location cards (residents/students page).
export const locations = [
  {
    city: "Raipur",
    state: "Chhattisgarh",
    role: "Headquarters · Retail",
    image: "/images/raipur-location.png",
    description:
      "Raipur is an on-demand laundry service. Gone are the days when you had to take your clothes to a laundry and drycleaner or wait relentlessly for your family dhobi to collect your garments from your home. The Laundry Bag™ provides free pick-up and delivery at your doorstep, at the time of your liking.",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    role: "On-campus laundromats",
    image: "/images/pune-location.png",
    description:
      "In Pune, we are working very closely with Symbiosis International University and are currently operating on-campus laundromats on 3 different campuses — Lavale, SB Road & Viman Nagar. Serving nearly 3,000 students on a daily basis, we take care of the entire laundry requirement of the students, faculty and staff of the campus. Services offered include washing, drying, ironing & dry cleaning.",
  },
  {
    city: "Goa",
    state: "Goa",
    role: "On-campus laundromat",
    image: "/images/goa-location-new.png",
    description:
      "In Goa, The Laundry Bag™ provides its laundromat facility to the scenic and huge campus of Birla Institute of Technology, Pilani Goa Campus. Serving more than 2,200 students on a daily basis, we take care of the entire laundry requirement of the students, faculty and staff of the campus. Services offered include washing, drying, ironing & dry cleaning.",
  },
];

// PRIMARY — extra city presences from the legacy Google Map (info windows).
export const extraCities = [
  { city: "Delhi", note: "The Laundry Bag also caters its services in Delhi." },
  { city: "Noida", note: "The Laundry Bag also caters its services in Noida." },
  {
    city: "Gurgaon",
    note: "The Laundry Bag also caters its services in Gurgaon.",
  },
];

// PRIMARY — FAQ questions are from the legacy FAQ page; the original
// answers were placeholder duplicates, so we've supplied accurate answers
// consistent with the rest of the legacy copy (turnaround, no mixing, etc.).
export const faqs = [
  {
    category: "Your First Order!",
    items: [
      {
        q: "What should I prepare for the first pickup?",
        a: "Bag up all your dirty clothes — that's it. Our pickup partner will arrive at your scheduled time slot with a tagged Laundry Bag. You can mention specific notes per garment in the app or on a paper slip; we'll take it from there.",
      },
      {
        q: "How long does cleaning take?",
        a: "We aim to collect your clothes, clean them to a professional standard and get them back to you all within 48 hours. If you'd prefer we went a little slower then that's not a problem — just let us know when you want your clothes back.",
      },
      {
        q: "Can I add extra items to my order when you collect?",
        a: "Absolutely. Hand any extra items to the pickup partner and we'll add them to your order automatically. You'll see the final list and price updated in your account.",
      },
      {
        q: "Which items should be dry cleaned and which should be laundered?",
        a: "As a rule of thumb: suits, blazers, silks, woollens, sarees with zari/embroidery and structured garments go to dry cleaning. Everyday cottons, t-shirts, jeans, kurtas, undergarments and linens go to wash & fold. Not sure? Tell us in the notes and our team will pick the safest method.",
      },
      {
        q: "Can I order by phone or email?",
        a: "Yes. Call us on +91 9111132222 or email contact@thelaundrybag.co.in and we'll schedule a pickup at your preferred time.",
      },
      {
        q: "How do I know if you can clean a specific type of clothing?",
        a: "If you're unsure about a garment, send us a quick photo on WhatsApp at +91 9111132222 and we'll confirm the right cleaning process before pickup.",
      },
      {
        q: "I'm not sure how my items should be cleaned. What should I do?",
        a: "Leave it to us. We inspect every garment and choose the safest cleaning method based on fabric, colour-fastness and care label. We never use anything harsh on delicates.",
      },
      {
        q: "Where are my clothes cleaned?",
        a: "All laundry processed in Raipur is cleaned at our central processing unit in the city. Campus orders in Pune and Goa are cleaned at the on-campus laundromat we operate. Nothing ever leaves the area you live in.",
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
        a: "No — we weigh the bag at our facility. You'll see the exact weight and final price in your account before delivery.",
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

// ----- SECONDARY -------------------------------------------------------------
// Supplementary intel. Should appear in clearly-labelled "Featured partners",
// "By the numbers" or detail sections — never as the hero/lead content.

export const featuredClients = [
  "Hotel Ivy",
  "Hotel Puneet International",
  "Toni & Guy",
  "VLCC",
  "Zone by The Park",
  "Ginger Hotels",
  "Shankaracharya Institute of Medical Sciences",
  "Hidayatullah National Law University",
  "IIIT Raipur",
  "NIT Raipur",
  "Symbiosis International University · Pune",
  "BITS Pilani · Goa Campus",
  "IIT Jabalpur",
];

// SEO — non-visible keyword list (meta tags, JSON-LD, robots-friendly).
// Permutations and combinations of brand + locality + founder so Googlebot
// can index TLB for every plausible variant. Kept long and deduped via Set.
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
  "Delhi",
  "Noida",
  "Gurgaon",
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
  "laundry in delhi",
  "laundry in noida",
  "laundry in gurgaon",
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
  "campus laundry",
  "on campus laundromats",
  "small local business laundry",
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
];

// Convenience aliases for back-compat with earlier component code
export const services = homeFeatures;
export const commercial = commercialFeatures;
export const stats = counters;
