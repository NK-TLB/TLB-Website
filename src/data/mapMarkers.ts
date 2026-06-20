// Geographic markers for the India operations map (see IndiaMap.tsx).
// Coordinates are approximate city centroids, accurate enough for a stylised
// national map and trivial to nudge later.

export type MarkerType = "hq" | "hotel" | "hospital" | "retail" | "city";

export interface MapMarker {
  id: string;
  city: string;
  state: string;
  /** Short role label shown in tooltips / list. */
  role: string;
  type: MarkerType;
  lat: number;
  lng: number;
  /** One-line description for the detail panel. */
  note: string;
  /** Plain query used to build a Google Maps directions link. */
  mapsQuery: string;
}

export const mapMarkers: MapMarker[] = [
  {
    id: "raipur",
    city: "Raipur",
    state: "Chhattisgarh",
    role: "Headquarters · Central Processing Unit",
    type: "hq",
    lat: 21.2544216,
    lng: 81.6651412,
    note: "Our HQ and central processing unit, plus fully-managed on-premise programmes for Hyatt Raipur and DKS Hospital.",
    mapsQuery: "The Laundry Bag Kusum Complex Shankar Nagar Raipur",
  },
  {
    id: "naya-raipur",
    city: "Naya Raipur",
    state: "Chhattisgarh",
    role: "Hospital linen",
    type: "hospital",
    lat: 21.16,
    lng: 81.78,
    note: "Balco Medical Center, hygienic, infection-safe linen processing.",
    mapsQuery: "Balco Medical Center Naya Raipur",
  },
  {
    id: "durg",
    city: "Durg",
    state: "Chhattisgarh",
    role: "Hospital linen",
    type: "hospital",
    lat: 21.1904,
    lng: 81.2849,
    note: "SIMS Hospital, Durg.",
    mapsQuery: "SIMS Hospital Durg",
  },
  {
    id: "goa",
    city: "Goa",
    state: "Goa",
    role: "Luxury hospitality",
    type: "hotel",
    lat: 15.4909,
    lng: 73.8278,
    note: "Five-star linen programmes for Grand Hyatt Goa and Taj Exotica Goa.",
    mapsQuery: "Grand Hyatt Goa",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    role: "Hotel laundry",
    type: "hotel",
    lat: 19.076,
    lng: 72.8777,
    note: "Linen & laundry for Hilton, Mumbai.",
    mapsQuery: "Hilton Mumbai International Airport",
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    role: "Hotel laundry",
    type: "hotel",
    lat: 18.5204,
    lng: 73.8567,
    note: "Hyatt, Pune.",
    mapsQuery: "Hyatt Pune",
  },
  {
    id: "nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    role: "Hospital linen",
    type: "hospital",
    lat: 21.1458,
    lng: 79.0882,
    note: "Lata Mangeshkar Hospital, Nagpur.",
    mapsQuery: "Lata Mangeshkar Hospital Nagpur",
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    role: "Hotel laundry",
    type: "hotel",
    lat: 13.0827,
    lng: 80.2707,
    note: "Hyatt Regency and Novotel, Chennai.",
    mapsQuery: "Novotel Chennai",
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    role: "Hotels & hospital",
    type: "hotel",
    lat: 22.5726,
    lng: 88.3639,
    note: "Hyatt Regency and Tata Medical Center, Kolkata.",
    mapsQuery: "Tata Medical Center Kolkata",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    role: "Hotel laundry",
    type: "hotel",
    lat: 17.385,
    lng: 78.4867,
    note: "Hyatt, Hyderabad.",
    mapsQuery: "Hyatt Hyderabad Gachibowli",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    role: "Hotel laundry",
    type: "hotel",
    lat: 12.9716,
    lng: 77.5946,
    note: "Hyatt Centric, Bangalore.",
    mapsQuery: "Hyatt Centric MG Road Bangalore",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    role: "Hotel laundry",
    type: "hotel",
    lat: 23.0225,
    lng: 72.5714,
    note: "Hyatt Regency and Hyatt, Vastrapur.",
    mapsQuery: "Hyatt Regency Ahmedabad",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    role: "Hotel laundry",
    type: "hotel",
    lat: 26.9124,
    lng: 75.7873,
    note: "Hyatt Place, Jaipur.",
    mapsQuery: "Hyatt Place Jaipur",
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    role: "Hotel laundry",
    type: "hotel",
    lat: 26.8467,
    lng: 80.9462,
    note: "Hyatt Regency, Lucknow.",
    mapsQuery: "Hyatt Regency Lucknow",
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "Chandigarh",
    role: "Hotel laundry",
    type: "hotel",
    lat: 30.7333,
    lng: 76.7794,
    note: "JW Marriott, Chandigarh.",
    mapsQuery: "JW Marriott Chandigarh",
  },
  {
    id: "dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    role: "Hotel laundry",
    type: "hotel",
    lat: 30.3165,
    lng: 78.0322,
    note: "Hyatt Regency, Dehradun.",
    mapsQuery: "Hyatt Regency Dehradun",
  },
  {
    id: "bodhgaya",
    city: "Bodhgaya",
    state: "Bihar",
    role: "Hotel laundry",
    type: "hotel",
    lat: 24.6961,
    lng: 84.9869,
    note: "Hyatt Place, Bodhgaya.",
    mapsQuery: "Hyatt Place Bodhgaya",
  },
  {
    id: "ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    role: "Hospital linen",
    type: "hospital",
    lat: 23.3441,
    lng: 85.3096,
    note: "Tata Trust supported hospital, Ranchi.",
    mapsQuery: "Tata Main Hospital Ranchi",
  },
  {
    id: "tirupati",
    city: "Tirupati",
    state: "Andhra Pradesh",
    role: "Hospital linen",
    type: "hospital",
    lat: 13.6288,
    lng: 79.4192,
    note: "Tata Trust supported hospital, Tirupati.",
    mapsQuery: "Tirupati hospital",
  },
];

/** Raipur and Naya Raipur share one metro in footprint totals. */
const cityGroupById: Record<string, string> = {
  raipur: "raipur",
  "naya-raipur": "raipur",
};

/** Distinct cities for network counts (grouped metros count once). */
export function uniqueCityCount(markers: MapMarker[] = mapMarkers): number {
  return new Set(markers.map((m) => cityGroupById[m.id] ?? m.id)).size;
}

/** The headquarters marker, used as the origin for the connecting arcs. */
export const HQ_MARKER = mapMarkers.find((m) => m.type === "hq")!;

export const markerTypeLabels: Record<MarkerType, string> = {
  hq: "Headquarters",
  hotel: "Hotels & resorts",
  hospital: "Hospitals",
  retail: "Processing unit",
  city: "Service city",
};
