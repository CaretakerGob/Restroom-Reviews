
export interface Review {
  id: string;
  locationName: string;
  address: string;
  overallRating: number;
  cleanliness: number;
  smell: number;
  comfort: number;
  soapSupplies: number;
  stallSecurity: number;
  comments: string;
  isCleanedByRR: boolean;
  date: string; // ISO date string e.g., "2024-07-28"
  user?: string;
  imageUrl?: string;
}

export const mockReviewsData: Review[] = [
  {
    id: "1",
    locationName: "Grand Central Terminal",
    address: "89 E 42nd St, New York, NY 10017",
    overallRating: 4,
    cleanliness: 4,
    smell: 3,
    comfort: 4,
    soapSupplies: 5,
    stallSecurity: 4,
    comments: "Surprisingly clean for such a busy station! Plenty of soap and paper towels. The attendant was actively cleaning. Smell was okay, not great but not bad either.",
    isCleanedByRR: false,
    date: "2024-07-28T10:00:00Z",
    user: "FrequentCommuter",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "2",
    locationName: "The Bean Scene Cafe",
    address: "123 Coffee Row, Pleasantville, PV 54321",
    overallRating: 5,
    cleanliness: 5,
    smell: 5,
    comfort: 5,
    soapSupplies: 5,
    stallSecurity: 5,
    comments: "Immaculate! Smelled like fresh lavender. Soft lighting and music. This is the gold standard for cafe restrooms. They even had premium hand lotion!",
    isCleanedByRR: true,
    date: "2024-07-27T14:30:00Z",
    user: "CafeConnoisseur",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "3",
    locationName: "Downtown Public Library",
    address: "456 Book St, Readsville, RS 67890",
    overallRating: 3,
    cleanliness: 3,
    smell: 2,
    comfort: 3,
    soapSupplies: 4,
    stallSecurity: 3,
    comments: "It's a public library, so expectations are managed. Cleanliness was average, but there was a distinct stale smell. Stalls felt a bit rickety.",
    isCleanedByRR: false,
    date: "2024-07-26T11:15:00Z",
    user: "BookwormBill",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "4",
    locationName: "Highway Rest Stop 7A",
    address: "Mile 7, Interstate 95, Nowhere, NW 00000",
    overallRating: 1,
    cleanliness: 1,
    smell: 1,
    comfort: 1,
    soapSupplies: 2,
    stallSecurity: 2,
    comments: "Avoid if possible. Truly abysmal. Needs a complete overhaul. The only saving grace was that there was *some* soap.",
    isCleanedByRR: false,
    date: "2024-07-25T18:00:00Z",
    user: "RoadWarrior",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "5",
    locationName: "City Park Pavilion",
    address: "Central Park Loop, Urbanopolis, UP 11223",
    overallRating: 2,
    cleanliness: 2,
    smell: 3,
    comfort: 2,
    soapSupplies: 3,
    stallSecurity: 3,
    comments: "Pretty basic, and could use more frequent cleaning, especially on weekends. It's functional but not a pleasant experience. Often out of paper towels.",
    isCleanedByRR: false,
    date: "2024-07-29T09:20:00Z",
    user: "ParkGoerPatty",
    imageUrl: "https://placehold.co/600x400.png",
  },
   {
    id: "6",
    locationName: "Galaxy Cineplex",
    address: "Starlight Plaza, Movietown, MT 90211",
    overallRating: 4,
    cleanliness: 5,
    smell: 4,
    comfort: 4,
    soapSupplies: 5,
    stallSecurity: 4,
    comments: "Very well maintained, especially for a movie theater. Modern fixtures and always stocked. A pleasant surprise!",
    isCleanedByRR: true,
    date: "2024-07-24T20:00:00Z",
    user: "CinemaFan",
    imageUrl: "https://placehold.co/600x400.png",
  },
];
