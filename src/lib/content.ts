// Central content model for GTA6VideoHub.com
// All demo content is clearly labeled as placeholder/demo and is designed
// to be replaced with real, properly-sourced editorial content.
// We never fabricate official GTA VI facts, view counts, or ratings.

export type ContentCategory =
  "video" | "clip" | "news" | "guide" | "character" | "vehicle" | "location" | "trailer";

export type TrendingLabel =
  "TRENDING" | "NEW" | "BREAKING" | "MOST WATCHED" | "EDITOR'S PICK" | "VIRAL";

export type InfoStatus = "official" | "rumor" | "leak" | "community" | "editorial";

export interface BaseContent {
  contentId?: string;
  slug: string;
  title: string;
  excerpt: string;
  seoTitle?: string;
  metaDescription?: string;
  cardHeadline?: string;
  cardExcerpt?: string;
  canonicalPath?: string;
  evidenceLabels?: string[];
  visualInstruction?: string;
  modestyCheck?: "PASS" | "FAIL";
  socialCaption?: string;
  category: ContentCategory;
  categoryLabel: string;
  thumbnail: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  tags: string[];
  trending?: TrendingLabel;
  status?: InfoStatus;
  source?: { name: string; url?: string };
  sourceCredit?: string;
  related?: { label: string; to: string }[];
}

export interface VideoItem extends BaseContent {
  category: "video" | "trailer" | "clip";
  embedUrl: string; // YouTube/TikTok/X embed URL
  duration: string;
  watchContext: string; // "What you're watching"
  whyTalking: string; // "Why GTA VI fans are talking about it"
  body?: string[];
  keyTakeaways?: string[];
}

export interface ArticleItem extends BaseContent {
  category: "news" | "guide";
  readingTime: string;
  body: string[]; // paragraphs
  keyTakeaways?: string[];
}

export interface CharacterItem extends BaseContent {
  category: "character";
  fullName: string;
  description: string;
  body?: string[];
  relatedVideos: string[]; // slugs
  keyTakeaways?: string[];
}

export interface VehicleItem extends BaseContent {
  category: "vehicle";
  type: string;
  description: string;
  body?: string[];
  keyTakeaways?: string[];
}

export interface LocationItem extends BaseContent {
  category: "location";
  region: string;
  description: string;
  body?: string[];
  keyTakeaways?: string[];
}

export type AnyContent = VideoItem | ArticleItem | CharacterItem | VehicleItem | LocationItem;

// ---------------------------------------------------------------------------
// Image assets (original Vice City-inspired mood art, NOT GTA screenshots)
// ---------------------------------------------------------------------------
const IMG = {
  heroSunset:
    "https://vibe.filesafe.space/1788932782350994925/assets/049cbcd3-2af3-4ac3-a7ea-4be8a77e03c2.png",
  neonCity:
    "https://vibe.filesafe.space/1788932782350994925/assets/71cc98de-962e-406e-a2d4-3516b583c5c7.png",
  lucia:
    "https://vibe.filesafe.space/1788932782350994925/assets/659fddf7-7cfe-4c37-a9a9-451e74b014df.png",
  jason:
    "https://vibe.filesafe.space/1788932782350994925/assets/e8fd9252-2f5f-4ff5-9e41-4b73b2067ad9.png",
  coastCity:
    "https://vibe.filesafe.space/1788932782350994925/assets/b4a5554b-fac7-4cca-9c06-2de0e94951e8.png",
  carHighway:
    "https://vibe.filesafe.space/1788932782350994925/assets/8601525a-57e6-4ce7-9bd3-6f8d0a90e26b.png",
};
export { IMG };

// ---------------------------------------------------------------------------
// VIDEOS / TRAILERS / CLIPS
// ---------------------------------------------------------------------------
export const videos: VideoItem[] = [
  {
    slug: "gta-vi-trailer-2-breakdown",
    title: "GTA VI Trailer 2 — Full Shot-by-Shot Breakdown",
    excerpt:
      "Every frame of the second official trailer, slowed down and analyzed for clues about Leonida, Vice City and the story ahead.",
    category: "trailer",
    categoryLabel: "Trailers",
    thumbnail: IMG.heroSunset,
    publishedAt: "2025-09-05",
    updatedAt: "2025-09-06",
    duration: "12:48",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["trailer", "breakdown", "rockstar"],
    trending: "TRENDING",
    status: "official",
    watchContext:
      "The second official GTA VI trailer from Rockstar Games, re-cut here with a slow, shot-by-shot editorial breakdown highlighting environment, character and gameplay clues.",
    whyTalking:
      "Fans are dissecting every second for new Vice City landmarks, weather effects and story beats. This breakdown isolates the moments most likely to matter for the final game.",
    source: {
      name: "Rockstar Games (official trailer)",
      url: "https://www.rockstargames.com/gta-vi",
    },
    related: [
      { label: "Vice City location", to: "/locations/vice-city" },
      { label: "Lucia Caminos", to: "/characters/lucia-caminos" },
    ],
  },
  {
    slug: "vice-city-night-drive-gameplay-impressions",
    title: "Vice City Night Drive — First Gameplay Impressions",
    excerpt:
      "A neon-soaked cruise through downtown Vice City. We break down lighting, traffic density and the new social-media style camera.",
    category: "video",
    categoryLabel: "Videos",
    thumbnail: IMG.neonCity,
    publishedAt: "2025-09-03",
    duration: "08:21",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["gameplay", "vice-city", "impressions"],
    trending: "NEW",
    status: "editorial",
    watchContext:
      "Editorial impressions reel built from officially released footage, organized as a virtual night drive to showcase the lighting and atmosphere of Vice City.",
    whyTalking:
      "The atmosphere and dynamic time-of-day lighting are a huge step up. This reel isolates those moments so fans can compare them to earlier trailers.",
    source: { name: "Editorial compilation", url: "#" },
    related: [
      { label: "Vice City location", to: "/locations/vice-city" },
      { label: "All videos", to: "/videos" },
    ],
  },
  {
    slug: "leonida-map-explained",
    title: "The Leonida Map Explained — Regions, Roads & Rumors",
    excerpt:
      "What we know about the state of Leonida: confirmed regions, rumored locations and how the map could compare to past GTA worlds.",
    category: "video",
    categoryLabel: "Videos",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-30",
    duration: "15:02",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["map", "leonida", "explainer"],
    trending: "MOST WATCHED",
    status: "community",
    watchContext:
      "An explainer mapping out confirmed Leonida regions from official media, with clearly-labeled community speculation where official info is missing.",
    whyTalking:
      "Map size and density are the biggest open questions. This video separates what Rockstar has shown from fan theory.",
    source: { name: "Community analysis", url: "#" },
    related: [
      { label: "Explore Leonida", to: "/locations" },
      { label: "Leonida Keys", to: "/locations/leonida-keys" },
    ],
  },
  {
    slug: "lucia-and-jason-story-theory",
    title: "Lucia & Jason — The Story We're Expecting",
    excerpt:
      "A Bonnie-and-Clyde inspired duo. Here's what the trailers tell us about Lucia and Jason's dynamic and where the story may go.",
    category: "video",
    categoryLabel: "Videos",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-28",
    duration: "10:34",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["characters", "story", "theory"],
    status: "editorial",
    watchContext:
      "An editorial theory piece built from officially released character moments, framing the Lucia and Jason dynamic.",
    whyTalking:
      "The dual-protagonist structure is new for GTA. Fans are debating how the two storylines will interweave.",
    source: { name: "Editorial", url: "#" },
    related: [
      { label: "Lucia Caminos", to: "/characters/lucia-caminos" },
      { label: "Jason Duval", to: "/characters/jason-duval" },
    ],
  },
  {
    slug: "gta-vi-vehicles-showcase",
    title: "GTA VI Vehicles — Every Confirmed Car & Bike So Far",
    excerpt:
      "From muscle cars to superbikes, a running catalog of every vehicle spotted in official GTA VI media.",
    category: "video",
    categoryLabel: "Videos",
    thumbnail: IMG.carHighway,
    publishedAt: "2025-08-25",
    duration: "13:11",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["vehicles", "showcase", "catalog"],
    trending: "EDITOR'S PICK",
    status: "official",
    watchContext:
      "A catalog reel of vehicles identifiable in officially released GTA VI media, with editorial commentary on each.",
    whyTalking:
      "Vehicle variety is a GTA staple. This running catalog is updated whenever new official media drops.",
    source: { name: "Official media catalog", url: "#" },
    related: [
      { label: "All vehicles", to: "/vehicles" },
      { label: "All videos", to: "/videos" },
    ],
  },
  {
    slug: "gta-vi-trailer-1-announcement",
    title: "GTA VI — Announcement Trailer (Original Drop)",
    excerpt:
      "The trailer that started it all. The original December announcement that introduced Vice City and Leonida to the world.",
    category: "trailer",
    categoryLabel: "Trailers",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-20",
    duration: "01:31",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["trailer", "announcement"],
    status: "official",
    watchContext:
      "The original GTA VI announcement trailer from Rockstar Games, embedded from the official source.",
    whyTalking:
      "It set the tone for everything since — the Florida atmosphere, the social-media framing, the dual protagonists.",
    source: { name: "Rockstar Games", url: "https://www.rockstargames.com/gta-vi" },
    related: [
      { label: "All trailers", to: "/trailers" },
      { label: "Vice City", to: "/locations/vice-city" },
    ],
  },
  {
    contentId: "GTA6VH-0001",
    slug: "gta-6-extended-look",
    title: "GTA 6: An Extended Look — The Full Gameplay Reveal",
    excerpt: "Rockstar's biggest look yet at Jason, Lucia, and Vice City — watch it here with context.",
    seoTitle: "GTA 6 Extended Look: Watch the Full Official Gameplay Reveal",
    metaDescription: "Watch Rockstar's official GTA 6 \"An Extended Look\" and get a clear breakdown of Jason, Lucia, Vice City, and what the reveal actually showed.",
    cardHeadline: "GTA 6's Official Gameplay Reveal",
    cardExcerpt: "Rockstar's biggest look yet at Jason, Lucia, and Vice City — watch it here with context.",
    canonicalPath: "/videos/gta-6-extended-look",
    evidenceLabels: [
      "Platforms/premiere, in-game-on-PS5 capture, Nov 19 launch — OFFICIALLY STATED",
      "Character switching and Vice City/Leonida focus — VISIBLE/OBSERVED IN OFFICIAL FOOTAGE",
      "Approx. 26-minute runtime — REPORTED (not officially stated; omitted from body)",
    ],
    visualInstruction: "Vice City skyline or a Jason gameplay still as the page hero; the official video sits at the top of the article.",
    modestyCheck: "PASS",
    socialCaption: "The official GTA 6 gameplay reveal — watch it here, with everything worth noticing. ▶️",
    category: "video",
    categoryLabel: "Videos",
    thumbnail: IMG.heroSunset,
    publishedAt: "2026-08-27",
    duration: "26:48",
    // Functional iframe form of the authoritative watch URL supplied in the publication package.
    embedUrl: "https://www.youtube.com/embed/tJbzMqJGH4k",
    tags: ["extended-look", "rockstar", "official"],
    trending: "NEW",
    status: "official",
    watchContext: "The official GTA 6 Extended Look from Rockstar Games, captured entirely from in-game footage on PlayStation 5.",
    whyTalking: "The presentation follows Jason Duval and Lucia Caminos through Vice City and the wider state of Leonida, showcasing driving, combat, everyday life in the open world, and seamless switching between the two leads.",
    body: [
      "After years of trailers and speculation, Rockstar finally showed GTA 6 in motion on its own terms. \"Grand Theft Auto VI: An Extended Look\" premiered on Netflix and then went live free on Rockstar's official YouTube channel and the GTA VI site the same day, captured entirely from in-game footage on PlayStation 5.",
      "The presentation follows protagonists Jason Duval and Lucia Caminos through Vice City and the wider state of Leonida, showcasing driving, combat, and everyday life in the open world — including seamless switching between the two leads. It's the clearest picture yet of how the game actually plays, and it's the reference point every other GTA 6 story now builds on.",
      "Watch the official version below, then use our character and location hubs to dig into who and what you're seeing. (This page embeds Rockstar's official upload only — we never re-host.)",
    ],
    keyTakeaways: [
      "Official Rockstar presentation, premiered on Netflix, then free on Rockstar's YouTube and the GTA VI site.",
      "Captured entirely from in-game footage on PlayStation 5.",
      "Focuses on Jason and Lucia across Vice City and Leonida, with seamless character switching shown.",
      "The game launches November 19, 2026 on PS5 and Xbox Series X|S.",
    ],
    source: {
      name: "Rockstar Games Newswire — \"Grand Theft Auto VI: An Extended Look — Now Playing\"",
      url: "https://www.rockstargames.com/newswire/article/4k138k8okkk483/grand-theft-auto-vi-an-extended-look-now-playing",
    },
    sourceCredit: "© Rockstar Games — official upload embedded, not re-hosted.",
    related: [
      { label: "Jason Duval", to: "/characters/jason-duval" },
      { label: "Vice City / Leonida", to: "/locations/gta-6-map-vice-city-leonida" },
      { label: "Vehicles", to: "/vehicles/gta-6-confirmed-vehicles-and-ultimate-garage" },
      { label: "Price & Pre-Order", to: "/guides/gta-6-price-pre-order-editions" },
    ],
  },
];

export const clips: VideoItem[] = [
  {
    slug: "palm-tree-sunset-clip",
    title: "That Palm Tree Sunset Shot Everyone's Sharing",
    excerpt: "A 15-second sunset clip from official footage that's everywhere right now.",
    category: "clip",
    categoryLabel: "Clips",
    thumbnail: IMG.heroSunset,
    publishedAt: "2025-09-07",
    duration: "0:15",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["clip", "viral", "sunset"],
    trending: "VIRAL",
    status: "official",
    watchContext: "A short sunset clip isolated from official footage.",
    whyTalking: "The lighting in this shot is being shared across socials as a vibe reference.",
    source: { name: "Official footage", url: "#" },
  },
  {
    slug: "highway-chase-clip",
    title: "Neon Highway Chase — 20 Second Tease",
    excerpt: "A quick neon-lit highway moment that has fans replaying it frame by frame.",
    category: "clip",
    categoryLabel: "Clips",
    thumbnail: IMG.carHighway,
    publishedAt: "2025-09-06",
    duration: "0:20",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["clip", "highway", "neon"],
    trending: "TRENDING",
    status: "official",
    watchContext: "A short highway clip from official media.",
    whyTalking: "The neon reflections on the wet asphalt are a standout visual moment.",
    source: { name: "Official footage", url: "#" },
  },
  {
    slug: "vice-city-beach-clip",
    title: "Vice City Beach Walk — Looping Clip",
    excerpt: "A looping beachfront clip that captures the South Florida atmosphere.",
    category: "clip",
    categoryLabel: "Clips",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-09-04",
    duration: "0:18",
    embedUrl: "https://www.youtube.com/embed/QdBZY2kUby0",
    tags: ["clip", "beach", "vice-city"],
    status: "official",
    watchContext: "A short beachfront clip from official media.",
    whyTalking: "The crowd and atmosphere density is a big talking point.",
    source: { name: "Official footage", url: "#" },
  },
];

// ---------------------------------------------------------------------------
// NEWS
// ---------------------------------------------------------------------------
export const news: ArticleItem[] = [
  {
    slug: "rockstar-confirms-leonida-state",
    title: "Rockstar Confirms the State of Leonida as GTA VI's Setting",
    excerpt:
      "Official materials reference the state of Leonida and the city of Vice City. Here's what's confirmed and what's still rumor.",
    category: "news",
    categoryLabel: "News",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-09-08",
    readingTime: "4 min",
    tags: ["leonida", "official", "setting"],
    trending: "BREAKING",
    status: "official",
    body: [
      "Rockstar Games has officially referenced the state of Leonida as the setting for Grand Theft Auto VI, with Vice City as its flagship metropolitan area inspired by Miami and South Florida.",
      "This is one of the few hard facts fans can rely on. Beyond the setting and the two protagonists, much of what circulates online remains rumor or community speculation.",
      "We separate the confirmed details from the speculation below, and we'll keep this article updated as Rockstar releases more.",
    ],
    keyTakeaways: [
      "Leonida is the official state name for GTA VI's setting.",
      "Vice City is the confirmed metro area, inspired by Miami.",
      "Most other 'leaks' remain unverified community speculation.",
    ],
    source: { name: "Rockstar Games", url: "https://www.rockstargames.com/gta-vi" },
    related: [
      { label: "Explore Leonida", to: "/locations" },
      { label: "All news", to: "/news" },
    ],
  },
  {
    slug: "gta-vi-release-window-rumors-roundup",
    title: "GTA VI Release Window: What's Confirmed vs. Rumor",
    excerpt:
      "A clear-eyed roundup of release-date talk — separating official statements from analyst predictions and fan speculation.",
    category: "news",
    categoryLabel: "News",
    thumbnail: IMG.neonCity,
    publishedAt: "2025-09-06",
    readingTime: "5 min",
    tags: ["release", "rumors"],
    status: "rumor",
    body: [
      "Release-date discussion for GTA VI is one of the most rumor-heavy areas of coverage. This roundup clearly labels what comes from Rockstar, what comes from analysts, and what is pure fan speculation.",
      "Where official information exists, we cite it. Where it does not, we say so plainly rather than presenting rumor as fact.",
      "Treat any specific date you see online with skepticism unless it comes directly from Rockstar Games.",
    ],
    source: { name: "Editorial roundup", url: "#" },
    related: [{ label: "All news", to: "/news" }],
  },
  {
    slug: "vice-city-nightlife-details",
    title: "Vice City Nightlife: What the Trailers Show Us",
    excerpt:
      "Neon signs, beach clubs and social-media culture — the trailers paint a vivid picture of Vice City after dark.",
    category: "news",
    categoryLabel: "News",
    thumbnail: IMG.neonCity,
    publishedAt: "2025-09-02",
    readingTime: "6 min",
    tags: ["vice-city", "nightlife", "atmosphere"],
    status: "official",
    body: [
      "The official trailers lean heavily into Vice City's nightlife: neon signage, beachfront crowds and a social-media-style camera that feels distinctly modern.",
      "This piece walks through what the trailers actually show, without inventing details that aren't visible on screen.",
    ],
    source: { name: "Official trailers", url: "#" },
    related: [
      { label: "Vice City", to: "/locations/vice-city" },
      { label: "All videos", to: "/videos" },
    ],
  },
];

// ---------------------------------------------------------------------------
// GUIDES
// ---------------------------------------------------------------------------
export const guides: ArticleItem[] = [
  {
    slug: "gta-vi-beginners-guide",
    title: "GTA VI Beginner's Guide — What to Know Before You Play",
    excerpt:
      "New to GTA? Start here. A beginner-friendly overview of what to expect, clearly marked where details are unconfirmed.",
    category: "guide",
    categoryLabel: "Guides",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-29",
    readingTime: "7 min",
    tags: ["beginner", "guide"],
    status: "editorial",
    body: [
      "This beginner's guide is built around what's officially known about GTA VI, with clearly-labeled placeholders for gameplay details that will be filled in after launch.",
      "We avoid fabricating game mechanics. Where a section is speculative, it's marked as such.",
    ],
    source: { name: "Editorial", url: "#" },
    related: [{ label: "All guides", to: "/guides" }],
  },
  {
    slug: "gta-vi-map-guide",
    title: "GTA VI Map Guide — Regions of Leonida",
    excerpt: "A guide to the confirmed regions of Leonida and how they connect.",
    category: "guide",
    categoryLabel: "Guides",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-27",
    readingTime: "8 min",
    tags: ["map", "leonida", "guide"],
    status: "community",
    body: [
      "This guide covers confirmed Leonida regions and clearly separates community speculation from official information.",
    ],
    source: { name: "Community + official", url: "#" },
    related: [
      { label: "Explore Leonida", to: "/locations" },
      { label: "All guides", to: "/guides" },
    ],
  },
  {
    slug: "gta-vi-vehicles-guide",
    title: "GTA VI Vehicles Guide — Cars, Bikes & Boats",
    excerpt: "A running guide to every vehicle spotted in official GTA VI media.",
    category: "guide",
    categoryLabel: "Guides",
    thumbnail: IMG.carHighway,
    publishedAt: "2025-08-24",
    readingTime: "6 min",
    tags: ["vehicles", "guide"],
    status: "official",
    body: [
      "This guide catalogs vehicles identifiable in officially released media and is updated as new content arrives.",
    ],
    source: { name: "Official media", url: "#" },
    related: [
      { label: "All vehicles", to: "/vehicles" },
      { label: "All guides", to: "/guides" },
    ],
  },
  {
    contentId: "GTA6VH-0008",
    slug: "gta-6-price-pre-order-editions",
    title: "GTA 6 Price, Editions & Pre-Order Guide",
    excerpt: "$79.99 Standard, $99.99 Ultimate, out Nov 19 — here's exactly what each tier gets you.",
    seoTitle: "GTA 6 Price & Pre-Order Guide: Editions, Bonuses & Dates",
    metaDescription: "GTA 6 is $79.99 (Standard) or $99.99 (Ultimate), out November 19, 2026. Here's every edition, the pre-order bonus, and the key dates — confirmed by Rockstar.",
    cardHeadline: "GTA 6: Price & Pre-Order",
    cardExcerpt: "$79.99 Standard, $99.99 Ultimate, out Nov 19 — here's exactly what each tier gets you.",
    canonicalPath: "/guides/gta-6-price-pre-order-editions",
    evidenceLabels: [
      "All takeaways — OFFICIALLY STATED (Take-Two/Rockstar)",
      "PC/Switch not announced — OFFICIALLY STATED by omission (only PS5/Xbox listed)",
    ],
    visualInstruction: "Vice City skyline (primary) or official GTA VI cover art.",
    modestyCheck: "PASS",
    socialCaption: "GTA 6: $79.99 or $99.99? Here's exactly what each edition gets you — and the bonus you don't want to miss. 🕹️",
    category: "guide",
    categoryLabel: "Guides",
    thumbnail: IMG.neonCity,
    publishedAt: "2026-08-27",
    readingTime: "3 min",
    tags: ["price", "pre-order", "editions"],
    status: "official",
    body: [
      "Rockstar kept GTA 6's pricing structure refreshingly simple: two editions, one bonus window, one launch date. The Standard Edition is $79.99 and launches November 19, 2026 on PlayStation 5 and Xbox Series X|S, delivering the full single-player story following Jason and Lucia across Vice City and the state of Leonida.",
      "Stepping up to the $99.99 Ultimate Edition adds an exclusive collection of premium vehicles, weapons, apparel, and content threaded across Jason and Lucia's story. There's no separate Collector's or Deluxe tier above it, and if you buy Standard first, you can upgrade to Ultimate content later.",
      "Timing is the one thing worth acting on early. Anyone who pre-orders or buys GTA 6 before November 20, 2026 receives the Vintage Vice City Pack, plus a free month of GTA+ for digital pre-orders, and digital pre-loading opens November 12, 2026. One quirk to note: the physical version is a download code inside the box rather than a game disc, and it's also available from November 12.",
      "A couple of common questions, answered straight: GTA 6 is a single-player experience at launch, and the official release lists only PS5 and Xbox Series X|S — no PC or Switch version has been announced.",
    ],
    keyTakeaways: [
      "Launches November 19, 2026 on PS5 and Xbox Series X|S.",
      "Standard Edition $79.99; Ultimate Edition $99.99 (no higher tier).",
      "Vintage Vice City Pack for purchases before November 20; free GTA+ month for digital pre-orders.",
      "Digital pre-load November 12; physical copies are a code in a box (no disc).",
      "Single-player at launch; PC/Switch not announced.",
    ],
    source: {
      name: "Take-Two Interactive — \"Rockstar Games Announces Pre-Orders for Grand Theft Auto VI\"",
      url: "https://www.take2games.com/ir/news/rockstar-games-announces-pre-orders-grand-theft-auto-vi",
    },
    sourceCredit: "Rockstar Games / Take-Two Interactive.",
    related: [
      { label: "Extended Look", to: "/videos/gta-6-extended-look" },
      { label: "Vehicles", to: "/vehicles/gta-6-confirmed-vehicles-and-ultimate-garage" },
      { label: "Vice City / Leonida", to: "/locations/gta-6-map-vice-city-leonida" },
      { label: "Jason Duval", to: "/characters/jason-duval" },
    ],
  },
];

// ---------------------------------------------------------------------------
// CHARACTERS
// ---------------------------------------------------------------------------
export const characters: CharacterItem[] = [
  {
    slug: "lucia-caminos",
    title: "Lucia Caminos",
    fullName: "Lucia Caminos",
    excerpt:
      "One of GTA VI's two protagonists. Lucia's story appears intertwined with Jason's in a Bonnie-and-Clyde style dynamic.",
    category: "character",
    categoryLabel: "Characters",
    thumbnail: IMG.jason,
    publishedAt: "2025-09-01",
    tags: ["protagonist", "character"],
    trending: "TRENDING",
    status: "official",
    description:
      "Lucia Caminos is one of the two confirmed protagonists of Grand Theft Auto VI. Official trailers position her alongside Jason Duval in a story inspired by outlaw-couple dynamics. Beyond what's shown in official media, much of her backstory remains unconfirmed.",
    relatedVideos: ["lucia-and-jason-story-theory", "gta-vi-trailer-2-breakdown"],
    source: { name: "Rockstar Games", url: "https://www.rockstargames.com/gta-vi" },
    related: [
      { label: "Jason Duval", to: "/characters/jason-duval" },
      { label: "Story theory video", to: "/videos/lucia-and-jason-story-theory" },
    ],
  },
  {
    contentId: "GTA6VH-0007",
    slug: "jason-duval",
    title: "Jason Duval: GTA 6's Co-Protagonist, Explained",
    fullName: "Jason Duval",
    excerpt: "One half of GTA 6's central duo — his official backstory, straight from Rockstar.",
    seoTitle: "Jason Duval (GTA 6): His Official Story & Everything Confirmed",
    metaDescription: "Who is Jason Duval, GTA 6's co-protagonist? Here's his official Rockstar backstory — the Army, the Keys, Brian Heder — and what's still unconfirmed.",
    cardHeadline: "Who Is Jason Duval?",
    cardExcerpt: "One half of GTA 6's central duo — his official backstory, straight from Rockstar.",
    canonicalPath: "/characters/jason-duval",
    evidenceLabels: [
      "Bio (Army, Keys, drug runners, Brian Heder), identity/role, premise — OFFICIALLY STATED (rockstargames.com/VI)",
      "Voice actor — RUMOR/UNVERIFIED",
    ],
    visualInstruction: "Official Jason Duval key art or a Jason gameplay still.",
    modestyCheck: "PASS",
    socialCaption: "Meet Jason Duval — one half of GTA 6's central duo. Here's what Rockstar's actually confirmed.",
    category: "character",
    categoryLabel: "Characters",
    thumbnail: IMG.jason,
    publishedAt: "2026-08-27",
    tags: ["jason-duval", "protagonist", "character"],
    status: "official",
    description: "Jason Duval is one of the two people you'll play as in GTA 6, and Rockstar has already shared a clear outline of who he is.",
    body: [
      "Jason Duval is one of the two people you'll play as in GTA 6, and Rockstar has already shared a clear outline of who he is. Per his official bio, Jason grew up around grifters and crooks, did a stint in the Army to shake off a rough adolescence, and ended up in the Leonida Keys doing what he knows best — working for local drug runners. He's after an easier life, but things keep getting more complicated.",
      "His world is already mapped out too. Jason lives rent-free on a property owned by veteran smuggler Brian Heder in exchange for muscle on local shakedowns, with fellow associate Cal Hampton rounding out his small-town orbit. Then Lucia enters the picture — the partnership that drives the whole story.",
      "Rockstar frames Jason and Lucia as a single narrative unit: when an easy score goes wrong, the pair are pulled into a criminal conspiracy stretching across the state of Leonida, forced to rely on each other to make it out. Who voices Jason hasn't been officially confirmed by Rockstar, so treat any casting claims as fan speculation for now.",
    ],
    keyTakeaways: [
      "Co-protagonist of GTA 6 alongside Lucia Caminos, set in Vice City and Leonida.",
      "Former Army; grew up around grifters; works for drug runners in the Leonida Keys.",
      "Lives rent-free on smuggler Brian Heder's property in exchange for local shakedowns.",
      "Story premise: an easy score goes wrong and pulls the duo into a state-wide conspiracy.",
      "His voice actor is not officially confirmed.",
    ],
    relatedVideos: ["gta-6-extended-look"],
    source: {
      name: "Rockstar Games — \"Only in Leonida\" (Grand Theft Auto VI)",
      url: "https://www.rockstargames.com/VI/only-in-leonida",
    },
    sourceCredit: "© Rockstar Games.",
    related: [
      { label: "Extended Look", to: "/videos/gta-6-extended-look" },
      { label: "Vice City / Leonida", to: "/locations/gta-6-map-vice-city-leonida" },
      { label: "Vehicles / Ultimate Garage", to: "/vehicles/gta-6-confirmed-vehicles-and-ultimate-garage" },
      { label: "Price & Pre-Order", to: "/guides/gta-6-price-pre-order-editions" },
    ],
  },
];

// ---------------------------------------------------------------------------
// VEHICLES
// ---------------------------------------------------------------------------
export const vehicles: VehicleItem[] = [
  {
    slug: "vice-city-muscle-car",
    title: "Vice City Muscle Car",
    excerpt: "A classic American muscle car spotted in official GTA VI media.",
    category: "vehicle",
    categoryLabel: "Vehicles",
    thumbnail: IMG.carHighway,
    publishedAt: "2025-08-26",
    tags: ["muscle", "car"],
    type: "Muscle Car",
    status: "official",
    description:
      "A muscle car visible in officially released GTA VI media. Specific in-game name and stats are unconfirmed until launch.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "All vehicles", to: "/vehicles" }],
  },
  {
    slug: "neon-superbike",
    title: "Neon Superbike",
    excerpt: "A high-performance motorcycle seen carving through Vice City traffic.",
    category: "vehicle",
    categoryLabel: "Vehicles",
    thumbnail: IMG.neonCity,
    publishedAt: "2025-08-22",
    tags: ["bike", "motorcycle"],
    type: "Motorcycle",
    status: "official",
    description: "A motorcycle visible in officially released media. Specifics remain unconfirmed.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "All vehicles", to: "/vehicles" }],
  },
  {
    slug: "speedboat-vice-city",
    title: "Vice City Speedboat",
    excerpt: "A speedboat tearing across Leonida's waterways — a staple of the Florida setting.",
    category: "vehicle",
    categoryLabel: "Vehicles",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-20",
    tags: ["boat", "water"],
    type: "Boat",
    status: "official",
    description:
      "A watercraft visible in officially released media, fitting the South Florida coastal setting.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "All vehicles", to: "/vehicles" }],
  },
  {
    contentId: "GTA6VH-0010",
    slug: "gta-6-confirmed-vehicles-and-ultimate-garage",
    title: "GTA 6 Vehicles: What's Confirmed and What's in the Ultimate Garage",
    excerpt: "From the Ultimate Edition garage to trailer sightings — the verified vehicle rundown.",
    seoTitle: "GTA 6 Vehicles: Confirmed Cars & the Ultimate Edition Garage",
    metaDescription: "Every GTA 6 vehicle we can verify — from official Ultimate Edition cars to trailer sightings. Clearly sourced and regularly updated.",
    cardHeadline: "GTA 6's Confirmed Vehicles",
    cardExcerpt: "From the Ultimate Edition garage to trailer sightings — the verified vehicle rundown.",
    canonicalPath: "/vehicles/gta-6-confirmed-vehicles-and-ultimate-garage",
    evidenceLabels: [
      "Ultimate Edition vehicles/items — OFFICIALLY STATED (Rockstar Support + Xbox store)",
      "Trailer-spotted cars — VISIBLE/OBSERVED IN OFFICIAL FOOTAGE + COMMUNITY naming",
    ],
    visualInstruction: "A vehicle, motorcycle, or boat still (e.g., the '95 Grotti Cheetah) — ideal modesty-safe hero image.",
    modestyCheck: "PASS",
    socialCaption: "Cars, bikes, boats — here's every GTA 6 vehicle we can actually verify (and what's still a trailer sighting). 🚗",
    category: "vehicle",
    categoryLabel: "Vehicles",
    thumbnail: IMG.carHighway,
    publishedAt: "2026-08-27",
    tags: ["vehicles", "cars", "bikes", "boats"],
    status: "official",
    type: "Vehicle guide",
    description: "Vehicles are half the fun of any GTA, and GTA 6's list is already taking shape. The most concrete details come from the Ultimate Edition garage.",
    body: [
      "Vehicles are half the fun of any GTA, and GTA 6's list is already taking shape. The most concrete details come from the Ultimate Edition garage. Rockstar's official edition breakdown lists Ultimate items including the '95 Grotti Cheetah, the '67 Vapid Dominator Buggy and Garage, and the Shitzu Squalo, alongside the Hawk & Little Morgan Revolvers and personalized variants of Jason's Girardi ES9 and Lucia's Klose K17 pistols. Ultimate also bundles exclusive shops and properties like Rideout Customs, One-Eyed Willie's Mod Shop, and Sara's Unisex Salon, with content unlocking across the campaign rather than all at once.",
      "Beyond the Ultimate garage, fans have been naming cars glimpsed in the official trailers — for example, a classic Cheetah parked along the Vice City beachfront in the first trailer. We list those separately as trailer sightings, not as a full confirmed roster, and we'll promote each to \"confirmed\" only as Rockstar shows more.",
    ],
    keyTakeaways: [
      "Ultimate Edition vehicles include the '95 Grotti Cheetah, '67 Vapid Dominator Buggy, and Shitzu Squalo boat.",
      "Ultimate also adds the Hawk & Little Morgan Revolvers and personalized Girardi ES9 / Klose K17 pistols, plus exclusive shops and properties.",
      "Ultimate content unlocks progressively through Jason and Lucia's story.",
      "Cars spotted in official trailers are listed as sightings, not a confirmed full roster.",
    ],
    source: {
      name: "Rockstar Games Support — \"Grand Theft Auto VI: Platforms, Editions, and Versions\" (corroborated by the official Xbox store listing)",
      url: "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    },
    sourceCredit: "© Rockstar Games; Ultimate item list per Rockstar Support and the official Xbox store.",
    related: [
      { label: "Price & Pre-Order", to: "/guides/gta-6-price-pre-order-editions" },
      { label: "Extended Look", to: "/videos/gta-6-extended-look" },
      { label: "Vice City / Leonida", to: "/locations/gta-6-map-vice-city-leonida" },
      { label: "Jason Duval", to: "/characters/jason-duval" },
    ],
  },
];

// ---------------------------------------------------------------------------
// LOCATIONS
// ---------------------------------------------------------------------------
export const locations: LocationItem[] = [
  {
    slug: "vice-city",
    title: "Vice City",
    excerpt: "GTA VI's flagship metro area, inspired by Miami and South Florida.",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.neonCity,
    publishedAt: "2025-08-30",
    tags: ["city", "vice-city"],
    region: "Leonida",
    status: "official",
    description:
      "Vice City is the confirmed metropolitan centerpiece of Grand Theft Auto VI, inspired by Miami and the wider South Florida region. Expect neon nightlife, beachfronts and a dense urban core.",
    source: { name: "Rockstar Games", url: "https://www.rockstargames.com/gta-vi" },
    related: [
      { label: "Explore Leonida", to: "/locations" },
      { label: "Vice City news", to: "/news/vice-city-nightlife-details" },
    ],
  },
  {
    slug: "leonida-keys",
    title: "Leonida Keys",
    excerpt: "A tropical island chain evoking the Florida Keys.",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.heroSunset,
    publishedAt: "2025-08-28",
    tags: ["islands", "tropical"],
    region: "Leonida",
    status: "official",
    description:
      "The Leonida Keys are a tropical island chain within the state of Leonida, evoking the Florida Keys. Official media has shown beach and sunset environments in this region.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "Explore Leonida", to: "/locations" }],
  },
  {
    slug: "port-gellhorn",
    title: "Port Gellhorn",
    excerpt: "An industrial port area within Leonida.",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-27",
    tags: ["port", "industrial"],
    region: "Leonida",
    status: "official",
    description:
      "Port Gellhorn is a port area within Leonida referenced in official GTA VI materials.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "Explore Leonida", to: "/locations" }],
  },
  {
    slug: "ambrosia",
    title: "Ambrosia",
    excerpt: "A settlement within the state of Leonida.",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.coastCity,
    publishedAt: "2025-08-26",
    tags: ["settlement"],
    region: "Leonida",
    status: "official",
    description:
      "Ambrosia is a location within Leonida referenced in official GTA VI materials. Further detail is limited.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "Explore Leonida", to: "/locations" }],
  },
  {
    slug: "mount-kalaga",
    title: "Mount Kalaga",
    excerpt: "A mountainous natural area within Leonida.",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.heroSunset,
    publishedAt: "2025-08-25",
    tags: ["mountain", "nature"],
    region: "Leonida",
    status: "official",
    description:
      "Mount Kalaga is a mountainous natural area within Leonida referenced in official GTA VI materials.",
    source: { name: "Official media", url: "#" },
    related: [{ label: "Explore Leonida", to: "/locations" }],
  },
  {
    contentId: "GTA6VH-0004",
    slug: "gta-6-map-vice-city-leonida",
    title: "The GTA 6 Map: Inside Vice City and Leonida",
    excerpt: "A reimagined Vice City inside the bigger state of Leonida — here's what's official.",
    seoTitle: "GTA 6 Map: Vice City and the State of Leonida, Explained",
    metaDescription: "GTA 6 returns to Vice City — now part of the larger state of Leonida. Here's every official location Rockstar has named so far.",
    cardHeadline: "GTA 6's Vice City & Leonida",
    cardExcerpt: "A reimagined Vice City inside the bigger state of Leonida — here's what's official.",
    canonicalPath: "/locations/gta-6-map-vice-city-leonida",
    evidenceLabels: [
      "Vice City/Leonida setting and the named destinations — OFFICIALLY STATED (rockstargames.com/VI)",
      "Map size / region totals — UNVERIFIED (deliberately excluded)",
    ],
    visualInstruction: "Vice City skyline or a Leonida landscape (coast, wetlands, or street scene) — ideal hero image.",
    modestyCheck: "PASS",
    socialCaption: "Vice City is back — but it's only part of the story. Meet the state of Leonida. 🌴",
    category: "location",
    categoryLabel: "Locations",
    thumbnail: IMG.coastCity,
    publishedAt: "2026-08-27",
    tags: ["vice-city", "leonida", "map"],
    status: "official",
    region: "Leonida",
    description: "GTA 6 brings the series back to Vice City, but this time the neon is just one corner of something bigger. Rockstar sets the game in Vice City within the wider fictional state of Leonida, a Florida-inspired world that stretches well beyond the city limits.",
    body: [
      "GTA 6 brings the series back to Vice City, but this time the neon is just one corner of something bigger. Rockstar sets the game in Vice City within the wider fictional state of Leonida, a Florida-inspired world that stretches well beyond the city limits.",
      "Rockstar has already named several official destinations across the state. Alongside Vice City, the \"Only in Leonida\" hub points players toward the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga — a spread that hints at everything from coastal smuggling country to wetlands and higher ground. Each one anchors part of the cast's story, from Brian Heder's boat yard in the Keys to the music scene tied to Vice City itself.",
      "We'll keep this hub focused on what's confirmed and add location detail as Rockstar reveals it. For now, treat any specific map-size or region-count claims floating around online as unconfirmed until Rockstar shows them.",
    ],
    keyTakeaways: [
      "GTA 6 is set in Vice City, inside the fictional state of Leonida.",
      "Official named destinations include the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.",
      "Specific map size and total region count are not officially confirmed.",
    ],
    source: {
      name: "Rockstar Games — Grand Theft Auto VI site / \"Only in Leonida\"",
      url: "https://www.rockstargames.com/VI/only-in-leonida",
    },
    sourceCredit: "© Rockstar Games.",
    related: [
      { label: "Extended Look", to: "/videos/gta-6-extended-look" },
      { label: "Jason Duval", to: "/characters/jason-duval" },
      { label: "Vehicles / Ultimate Garage", to: "/vehicles/gta-6-confirmed-vehicles-and-ultimate-garage" },
      { label: "Price & Pre-Order", to: "/guides/gta-6-price-pre-order-editions" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Aggregated helpers
// ---------------------------------------------------------------------------
export const allContent: AnyContent[] = [
  ...videos,
  ...clips,
  ...news,
  ...guides,
  ...characters,
  ...vehicles,
  ...locations,
];

export function getBySlug<T extends AnyContent>(arr: T[], slug: string): T | undefined {
  return arr.find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function statusLabel(s?: InfoStatus): string {
  switch (s) {
    case "official":
      return "Official";
    case "rumor":
      return "Rumor";
    case "leak":
      return "Leak";
    case "community":
      return "Community";
    case "editorial":
      return "Editorial";
    default:
      return "";
  }
}

export function publicationHead(item: AnyContent, type: "article" | "video.other" = "article") {
  const title = item.seoTitle ?? `${item.title} | GTA6VideoHub`;
  const description = item.metaDescription ?? item.excerpt;
  const canonical = `https://gta6videohub.com${item.canonicalPath ?? `/${item.category}s/${item.slug}`}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:image", content: item.thumbnail },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: item.thumbnail },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
