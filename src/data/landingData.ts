export interface MovieRecommendation {
  id: string;
  title: string;
  year: number;
  type: 'Movie' | 'TV Show';
  genre: string;
  rating: number;
  matchScore: number;
  poster: string;
  backdrop: string;
  streamingOn: {
    name: string;
    logoColor: string;
    badge: string;
  }[];
  tagline: string;
  reason: string;
  runtime?: string;
  seasons?: string;
  cast?: string[];
  directorOrCreator?: string;
}

export interface MoodCategory {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  vibeTag: string;
  gradient: string;
  bgImage: string;
  featuredPicks: MovieRecommendation[];
}

export const MOODS: MoodCategory[] = [
  {
    id: "action",
    emoji: "🔥",
    title: "High-Adrenaline Action",
    subtitle: "Heart-pounding chases, explosive set-pieces, zero downtime",
    vibeTag: "High Adrenaline",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "top-gun",
        title: "Top Gun: Maverick",
        year: 2022,
        type: "Movie",
        genre: "Action • Drama",
        rating: 8.3,
        matchScore: 99,
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Prime Video", logoColor: "#00A8E1", badge: "Prime" }, { name: "Apple TV+", logoColor: "#FFFFFF", badge: "Rent" }],
        tagline: "Feel the need for speed.",
        reason: "Because you like high-stakes tactical aviation and kinetic pacing",
        runtime: "2h 10m",
      },
      {
        id: "mad-max",
        title: "Mad Max: Fury Road",
        year: 2015,
        type: "Movie",
        genre: "Action • Sci-Fi",
        rating: 8.1,
        matchScore: 96,
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "JioHotstar", logoColor: "#0063E5", badge: "Hotstar" }, { name: "Prime Video", logoColor: "#00A8E1", badge: "Prime" }],
        tagline: "What a lovely day.",
        reason: "Masterclass in relentless practical action choreography",
        runtime: "2h 00m",
      }
    ]
  },
  {
    id: "scifi",
    emoji: "🧠",
    title: "Mind-Bending Sci-Fi",
    subtitle: "Time paradoxes, alternate realities, existential questions",
    vibeTag: "Mind Bending",
    gradient: "from-purple-600/20 via-indigo-600/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "severance",
        title: "Severance",
        year: 2022,
        type: "TV Show",
        genre: "Sci-Fi • Psychological Thriller",
        rating: 8.7,
        matchScore: 98,
        poster: "https://images.unsplash.com/photo-1507499739999-097706ad8914?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Apple TV+", logoColor: "#FFFFFF", badge: "Apple TV+" }],
        tagline: "Please do not attempt to remember your life.",
        reason: "Matches your taste for subtle eerie mystery and high-concept workplace sci-fi",
        seasons: "2 Seasons",
      },
      {
        id: "interstellar",
        title: "Interstellar",
        year: 2014,
        type: "Movie",
        genre: "Sci-Fi • Adventure",
        rating: 8.7,
        matchScore: 97,
        poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Netflix", logoColor: "#E50914", badge: "Netflix" }, { name: "Prime Video", logoColor: "#00A8E1", badge: "Prime" }],
        tagline: "Mankind was born on Earth. It was never meant to die here.",
        reason: "Cosmic scale and deeply emotional storytelling",
        runtime: "2h 49m",
      }
    ]
  },
  {
    id: "mystery",
    emoji: "🕵️",
    title: "Crime & Mystery",
    subtitle: "Unsolved murders, layered puzzles, deceptive clues",
    vibeTag: "Crime & Mystery",
    gradient: "from-cyan-600/20 via-blue-900/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "from",
        title: "FROM",
        year: 2022,
        type: "TV Show",
        genre: "Mystery • Horror • Sci-Fi",
        rating: 8.4,
        matchScore: 98,
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Prime Video", logoColor: "#00A8E1", badge: "Prime" }],
        tagline: "No one can leave.",
        reason: "Because you enjoy enigmatic town mysteries with constant cliffhangers",
        seasons: "3 Seasons",
      },
      {
        id: "knives-out",
        title: "Knives Out",
        year: 2019,
        type: "Movie",
        genre: "Mystery • Comedy • Crime",
        rating: 7.9,
        matchScore: 94,
        poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Netflix", logoColor: "#E50914", badge: "Netflix" }, { name: "SonyLIV", logoColor: "#0099FF", badge: "SonyLIV" }],
        tagline: "Nothing brings family together like murder.",
        reason: "Witty whodunit with exceptional ensemble cast",
        runtime: "2h 10m",
      }
    ]
  },
  {
    id: "dark",
    emoji: "😱",
    title: "Dark & Unsettling",
    subtitle: "Psychological dread, atmospheric tension, midnight watches",
    vibeTag: "Dark & Unsettling",
    gradient: "from-rose-900/20 via-red-950/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "black-mirror",
        title: "Black Mirror",
        year: 2023,
        type: "TV Show",
        genre: "Sci-Fi • Dystopian • Drama",
        rating: 8.7,
        matchScore: 97,
        poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Netflix", logoColor: "#E50914", badge: "Netflix" }],
        tagline: "The future is broken.",
        reason: "Sharp tech-dystopia parables that linger long after the credits",
        seasons: "6 Seasons",
      }
    ]
  },
  {
    id: "comedy",
    emoji: "😂",
    title: "Feel-Good Comedy",
    subtitle: "Wholesome laughs, easy comfort viewing, zero stress",
    vibeTag: "Feel-Good Comedy",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "ted-lasso",
        title: "Ted Lasso",
        year: 2020,
        type: "TV Show",
        genre: "Comedy • Drama • Sport",
        rating: 8.8,
        matchScore: 99,
        poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Apple TV+", logoColor: "#FFFFFF", badge: "Apple TV+" }],
        tagline: "Kindness makes a comeback.",
        reason: "Ultimate comforting warmth and optimistic humor",
        seasons: "3 Seasons",
      }
    ]
  },
  {
    id: "romance",
    emoji: "❤️",
    title: "Romance & Drama",
    subtitle: "Tender connections, quiet heartbreak, poetic realism",
    vibeTag: "Romance & Drama",
    gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "past-lives",
        title: "Past Lives",
        year: 2023,
        type: "Movie",
        genre: "Drama • Romance",
        rating: 8.0,
        matchScore: 96,
        poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "JioHotstar", logoColor: "#0063E5", badge: "Hotstar" }, { name: "Prime Video", logoColor: "#00A8E1", badge: "Rent" }],
        tagline: "What if you met the one who got away?",
        reason: "Sublime emotional depth and nuanced connection",
        runtime: "1h 46m",
      }
    ]
  },
  {
    id: "chill",
    emoji: "🌙",
    title: "Something Chill",
    subtitle: "Low cognitive load, scenic journeys, unwinding after work",
    vibeTag: "Something Chill",
    gradient: "from-emerald-600/20 via-teal-700/10 to-transparent",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    featuredPicks: [
      {
        id: "chef",
        title: "Chef",
        year: 2014,
        type: "Movie",
        genre: "Comedy • Drama",
        rating: 7.7,
        matchScore: 95,
        poster: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
        backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",
        streamingOn: [{ name: "Netflix", logoColor: "#E50914", badge: "Netflix" }, { name: "Prime Video", logoColor: "#00A8E1", badge: "Prime" }],
        tagline: "Starting from scratch never tasted so good.",
        reason: "Delicious food, great music, completely stress-free",
        runtime: "1h 54m",
      }
    ]
  }
];

export const POPULAR_VS_PERSONAL = {
  popular: {
    title: "What's Popular",
    subtitle: "Generic trending feeds dictated by algorithms pushing billboard titles",
    items: [
      {
        title: "Reality TV Show Season 18",
        genre: "Reality • Drama",
        badge: "Trending #1 in India",
        flaw: "90% of people abandon by episode 3",
        match: "32% Taste Match",
        platform: "Streaming App",
      },
      {
        title: "Generic Franchise Sequel IV",
        genre: "Action • CGI",
        badge: "Box Office Hit",
        flaw: "2hr 40min with cookie-cutter plot",
        match: "45% Taste Match",
        platform: "Streaming App",
      },
      {
        title: "Overhyped Celebrity Docuseries",
        genre: "Documentary",
        badge: "Promoted Everywhere",
        flaw: "Heavy PR, very little substance",
        match: "28% Taste Match",
        platform: "Streaming App",
      }
    ]
  },
  personal: {
    title: "Picked For You",
    subtitle: "Curated directly for your current energy, watch history, and unspoken taste",
    items: [
      {
        title: "FROM",
        genre: "Mystery • Psychological Sci-Fi",
        badge: "Exact Vibe Match",
        advantage: "Matches your Dark & Mind-Bending appetite",
        match: "98% Taste Match",
        platform: "Prime Video",
        rating: 8.4,
      },
      {
        title: "Severance",
        genre: "Sci-Fi • Thriller",
        badge: "High Resonance",
        advantage: "Zero filler, every minute keeps you guessing",
        match: "99% Taste Match",
        platform: "Apple TV+",
        rating: 8.7,
      },
      {
        title: "Past Lives",
        genre: "Poetic Drama • Romance",
        badge: "Underrated Gem",
        advantage: "Critically acclaimed, emotionally rich watch",
        match: "96% Taste Match",
        platform: "JioHotstar",
        rating: 8.0,
      }
    ]
  }
};

export const FEATURES = [
  {
    icon: "Sparkles",
    title: "Personalized Recommendations",
    description: "Recommendations calibrated to what you actually love, not what algorithms want to sell."
  },
  {
    icon: "Flame",
    title: "Mood-Based Discovery",
    description: "Filter instantly by your current mental energy, whether intense, chill, or dark."
  },
  {
    icon: "Film",
    title: "Movie & TV Discovery",
    description: "Effortlessly toggle between quick 90-minute movies or multi-season binge-worthy series."
  },
  {
    icon: "Layers",
    title: "Smart Genre Matching",
    description: "Blends sub-genres like 'cyberpunk noir' or 'wholesome workplace' for precision picks."
  },
  {
    icon: "Star",
    title: "Ratings & Reviews",
    description: "Aggregated verified scores and quick summaries without spoiler-heavy essays."
  },
  {
    icon: "Tv",
    title: "Streaming Availability",
    description: "Know exactly which platform has it—Netflix, Prime, Disney+, Apple TV+, or SonyLIV."
  },
  {
    icon: "BookmarkCheck",
    title: "Universal Watchlist",
    description: "One single clean watchlist across all your streaming platforms and devices."
  },
  {
    icon: "Compass",
    title: "Explore New Releases",
    description: "Stay ahead of fresh theater drops and direct-to-OTT premieres worth your time."
  }
];

export const TESTIMONIALS = [
  {
    quote: "I opened KyaDekhun because I couldn't decide. Found something in under a minute.",
    author: "Rohan M.",
    role: "Weekend Binge Watcher",
    tag: "Saved 25 mins every night"
  },
  {
    quote: "Finally, an app that understands the 'What should we watch tonight?' problem.",
    author: "Ananya S.",
    role: "Movie Enthusiast",
    tag: "No more endless scrolling"
  },
  {
    quote: "The mood filter is scary accurate. Wanted something mind-bending and it gave me Severance instantly.",
    author: "Karan D.",
    role: "Sci-Fi Fan",
    tag: "Found 4 new favorite shows"
  }
];
