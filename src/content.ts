export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.kyadekhun.app'

export const NAV_LINKS = [
  ['Home', '#top'],
  ['Features', '#features'],
  ['Mood Finder', '#mood'],
  ['Inside App', '#partners'],
  ['Why KyaDekhun', '#why'],
] as const

export const HUB_LINKS = [
  ['Netflix', 'https://www.netflix.com'],
  ['Prime Video', 'https://www.primevideo.com'],
  ['JioHotstar', 'https://www.jiohotstar.com'],
  ['SonyLIV', 'https://www.sonyliv.com'],
  ['ZEE5', 'https://www.zee5.com'],
] as const

// Placeholders: replace with the real legal / support URLs.
export const LEGAL_LINKS = [
  ['Privacy Policy', '#'],
  ['Terms of Service', '#'],
  ['Contact Support', '#'],
] as const

export const SOCIAL = {
  instagram: 'https://www.instagram.com/kyadekhunapp/',
}

// Logos supplied for these platforms; the rest fall back to text.
export const PLATFORM_LOGOS: Record<string, { src: string; icon?: boolean }> = {
  Netflix: { src: '/logos/netflix.png', icon: true },
  'Prime Video': { src: '/logos/primevideo.png' },
  JioHotstar: { src: '/logos/jiohotstar.png', icon: true },
  ZEE5: { src: '/logos/zee5.png', icon: true },
}

export const PLATFORMS = ['Netflix', 'Prime Video', 'JioHotstar', 'SonyLIV', 'ZEE5']

export const PROBLEMS = [
  {
    t: 'The Cold Dinner Dilemma',
    d: 'You unwrap hot food, pick up the remote, and keep browsing until your meal goes cold. One tap on your current mood gives you a verified title ready to play right now.',
  },
  {
    t: 'The Trailer Fatigue Trap',
    d: 'The 10 random clips drain your energy and give away the best twists. You don’t need loud marketing trailers. You need a suggestion you can trust.',
  },
  {
    t: 'The Living Room Standoff',
    d: 'One person wants a dark thriller, and the other wants an easy comedy. Half the night disappears in polite debate. KyaDekhun finds the middle ground both of you will actually enjoy.',
  },
]

export const STEPS = [
  {
    t: 'Zero-Scroll Decision Flow',
    d: 'We never dump three hundred posters onto your screen. When you need a reliable way to suggest some good movies, you get three sharp picks tailored to your headspace.',
  },
  {
    t: 'Real-Time Mood Alignment',
    d: 'A good film matches the room you are sitting in. Set your evening for laughs, tension, or quiet comfort before you press play.',
  },
  {
    t: 'Unified Direct Playback',
    d: 'Tap your pick and jump straight into Netflix, Prime Video, or JioHotstar without wasting time switching apps.',
  },
]

export const MOODS = [
  { n: 'Light', c: '#2F6BFF', c2: '#2ED3FF', t: 'Easy laughs, sharp banter, and zero emotional baggage.' },
  { n: 'Intense', c: '#E0243F', c2: '#FF7A3D', t: 'Tight suspense, fast pacing, and real stakes.' },
  { n: 'Smart', c: '#0FA56F', c2: '#7BE0B0', t: 'Clever mysteries, layered twists, and stories that stay with you.' },
  { n: 'Chill', c: '#7B3FF2', c2: '#C08BFF', t: 'Unhurried comfort cinema made to quiet a busy mind.' },
  { n: 'Romantic', c: '#E8541A', c2: '#FFB547', t: 'Genuine chemistry, warm pacing, and memorable moments.' },
]

export const ROUTES = [
  {
    t: 'Which Movie to Watch',
    d: 'Frozen by indecision? Let our quick picker settle which movie should I watch in ten seconds flat.',
    h: '#mood',
  },
  {
    t: 'Movie Mood Finder',
    d: 'Explore tailored movie recommendations by mood whenever you want your next watch to match your exact energy.',
    h: '#mood',
  },
  {
    t: 'OTT Streaming Hub',
    d: 'Check what to watch on OTT across Netflix, Prime Video, JioHotstar, SonyLIV, and ZEE5 from one unified catalog.',
    h: '#platforms',
  },
  {
    t: 'Taste Score Matcher',
    d: 'Enter one film you love to uncover hidden gems that share its storytelling DNA.',
    h: '#features',
  },
]

export const FEATURES = [
  {
    t: 'Natural Language Search',
    d: 'Just say what you feel like watching. Describe a vibe, a movie, an actor or a mood — by voice or text — and KyaDekhun understands.',
    img: '/img/screen1.webp',
    tag: 'Speak your mood',
  },
  {
    t: 'KyaDekhun Score',
    d: 'One score. Every rating. Community love and AI intelligence combined, with IMDb and TMDB shown for reference — so your pick is perfect.',
    img: '/img/screen2.webp',
    tag: 'One score to trust',
  },
  {
    t: 'Mood-Based Discovery',
    d: 'Tell us who you’re watching with and what you’re in the mood for. Find the right story for every moment — solo, partner, family or friends.',
    img: '/img/screen3.webp',
    tag: 'Vibes, not categories',
  },
  {
    t: 'Personalized Picks',
    d: 'Stories that match your vibe. Update your mood anytime and your picks refresh with twisty, smart and heartfelt matches.',
    img: '/img/screen4.webp',
    tag: 'Made for you',
  },
  {
    t: 'Trending & New Releases',
    d: 'Stay updated across OTT platforms. See what’s new on streaming, what’s trending this week and the Top 10 in India.',
    img: '/img/screen5.webp',
    tag: 'Always current',
  },
]

export const QUOTES = [
  {
    q: 'Every Friday night used to turn into a 40-minute argument over which movie should I watch. KyaDekhun turned it into a 30-second ritual. We haven’t had cold dinner since.',
    a: 'Rohan & Priyal',
    p: 'New Delhi',
  },
  {
    q: 'After nine hours of coding, my brain is fried. The mood filter gets it right every single time. Easily the cleanest cinema tool I have used.',
    a: 'Ananya S.',
    p: 'Bengaluru',
  },
  {
    q: 'Checking Netflix, Prime Video, and Hotstar in one place saved my phone from thirty open tabs.',
    a: 'Kabir M.',
    p: 'Mumbai',
  },
]

export const FAQ = [
  {
    q: 'What is the best movie recommendation app in India for Netflix, Prime Video, and JioHotstar?',
    a: 'KyaDekhun unifies catalogs across Netflix, Prime Video, JioHotstar, SonyLIV, and ZEE5. Instead of pushing paid trending banners, it uses mood filters and taste scoring to deliver three curated picks in under 30 seconds.',
  },
  {
    q: 'Which movie should I watch tonight on OTT?',
    a: 'Open our mood finder and pick how you feel, whether you want something light, intense, smart, or chill. You immediately get three high-rated titles streaming on your Indian OTT subscriptions with direct play links.',
  },
  {
    q: 'How does KyaDekhun suggest some good movies without biased advertising?',
    a: 'Traditional platforms promote titles based on licensing budgets. KyaDekhun looks at story quality, director track record, and real audience love to bring you picks that fit your personal taste.',
  },
  {
    q: 'How to decide what to watch when exhausted by endless scrolling?',
    a: 'Decision fatigue happens when you stare at too many uncurated choices at once. When you are stuck on how to decide what to watch, KyaDekhun narrows your options by mood, runtime, and platform so you can press play with confidence.',
  },
  {
    q: 'Is KyaDekhun completely free to use?',
    a: 'Yes. KyaDekhun is completely free on both web and mobile with zero subscription fees or paywalls.',
  },
]
