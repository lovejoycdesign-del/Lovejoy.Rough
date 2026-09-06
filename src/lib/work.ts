export const mediums = [
  "all",
  "poster",
  "type",
  "identity",
  "drawing",
  "promo",
  "painting",
] as const;

export type Medium = (typeof mediums)[number];

export type PlateId =
  | "rapper"
  | "line"
  | "shiners"
  | "steam-logo"
  | "steam-promo"
  | "heart"
  | "century"
  | "gill"
  | "bottle"
  | "berries"
  | "say-no"
  | "fruits";

export type Piece = {
  slug: string;
  title: string;
  year: string;
  medium: Exclude<Medium, "all">;
  tools: string[];
  status: "rough" | "study" | "published";
  plate: PlateId;
  job: string;
  caption: string;
  note: string;
  behance?: string;
};

export const pieces: Piece[] = [
  {
    slug: "rapper-poster",
    title: "Rapper Poster",
    year: "2025",
    medium: "poster",
    tools: ["Illustrator", "Photoshop"],
    status: "published",
    plate: "rapper",
    job: "01",
    caption: "Stacked type, live mark, one red hit.",
    note: "A concert sheet that had to read from across a hallway. I kept the palette to ink and one china-marker red so the name does the work. The halftone is there to dirty the black — posters that look too clean never get put up.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "line-drawing",
    title: "Line Drawing",
    year: "2025",
    medium: "drawing",
    tools: ["Pencil", "Illustrator"],
    status: "study",
    plate: "line",
    job: "02",
    caption: "One line. No shading. No second pass.",
    note: "Observational drawing with a single continuous contour. The rule was no lifting the line to cheat a proportion. What looks unfinished is the point — you can still see where the hand hesitated.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "shiners-movie-poster",
    title: "Shiners Movie Poster",
    year: "2025",
    medium: "poster",
    tools: ["InDesign", "Photoshop"],
    status: "study",
    plate: "shiners",
    job: "03",
    caption: "Noir title card. Sprockets optional.",
    note: "A title treatment for a film that does not exist yet. Serif, heavy, a little too close to the edge. I wanted the word to feel like a marquee that had been up too long — faded, still legible, slightly threatening.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "steam-care-logo",
    title: "Steam Care Logo",
    year: "2025",
    medium: "identity",
    tools: ["Illustrator"],
    status: "published",
    plate: "steam-logo",
    job: "04",
    caption: "Wordmark with rising steam.",
    note: "Identity for a garment-care idea. The steam is drawn, not a clip-art cloud — three lifting strokes that can live as small as a hangtag. The letterspacing is a little loose on purpose, like heat opening the type.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "steam-care-promo",
    title: "Steam Care Promotional",
    year: "2025",
    medium: "promo",
    tools: ["InDesign", "Illustrator"],
    status: "published",
    plate: "steam-promo",
    job: "05",
    caption: "Ad layout. Product, claim, quiet.",
    note: "The lockup after the mark. One claim, plenty of paper, no lifestyle photography. If the logo is doing its job the ad should almost disappear.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "paths-of-the-bleeding-heart",
    title: "Paths of the Bleeding Heart",
    year: "2025",
    medium: "drawing",
    tools: ["Illustrator", "Pencil"],
    status: "study",
    plate: "heart",
    job: "06",
    caption: "Geometry that refuses to close.",
    note: "A heart built from paths that almost meet. Most of it is graphite. One path is red and runs off the trim. I kept the construction lines — they are the drawing.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "century-typeface-poster",
    title: "Century Typeface Poster",
    year: "2025",
    medium: "type",
    tools: ["InDesign"],
    status: "study",
    plate: "century",
    job: "07",
    caption: "Specimen sheet. 72 / 24 / 12.",
    note: "A working specimen for Century. Big enough to see the bracketed serifs, small enough to judge the text color. The red correction is where the tracking was wrong the first time. I left it.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "gill-sans-poster",
    title: "Gill Sans Design Poster",
    year: "2025",
    medium: "type",
    tools: ["InDesign"],
    status: "study",
    plate: "gill",
    job: "08",
    caption: "British grotesque on newsprint.",
    note: "Gill Sans as a poster, not a paragraph. The R is the whole argument. I set it like a railway notice: human, slightly stubborn, no decoration except the paper.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "colors-of-a-bottle",
    title: "Colors of a Bottle",
    year: "2025",
    medium: "painting",
    tools: ["Acrylic", "Photoshop"],
    status: "study",
    plate: "bottle",
    job: "09",
    caption: "Achromatic color study. N10 to N2.",
    note: "A bottle, no local color. Just value bands — the exercise was to see the object as light, not as glass. The labels are the gray scale I mixed against, not a legend for anyone else.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "bomb-berries",
    title: "Bomb Berries Promotional",
    year: "2025",
    medium: "promo",
    tools: ["Illustrator", "Photoshop"],
    status: "rough",
    plate: "berries",
    job: "10",
    caption: "Burst, fruit, too much type.",
    note: "A loud promo on purpose. Berries as impact, not as produce. The rough still has the extra exclamation I later cut. This version is the one that had energy.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "say-no",
    title: "Say NO!",
    year: "2025",
    medium: "poster",
    tools: ["Letterpress study", "InDesign"],
    status: "study",
    plate: "say-no",
    job: "11",
    caption: "Protest sheet. One word, one strike.",
    note: "A refusal poster. SAY is small because the NO has to arrive first. The strike through is a second thought that became the composition. Keep it on cheap paper or it turns into a brand.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
  {
    slug: "fruits-on-the-canvas",
    title: "Fruits on the Canvas",
    year: "2025",
    medium: "painting",
    tools: ["Acrylic", "Canvas"],
    status: "study",
    plate: "fruits",
    job: "12",
    caption: "Still life. Overlap, table, light.",
    note: "Fruit as shapes first. The table is one line. Overlaps do the depth. I was trying to paint like a layout — crop, weight, rest — and let the canvas show through.",
    behance: "https://www.behance.net/lovejoychirombo",
  },
];

export function getPiece(slug: string) {
  return pieces.find((piece) => piece.slug === slug);
}

export function getNeighbors(slug: string) {
  const index = pieces.findIndex((piece) => piece.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: pieces[index - 1] ?? pieces[pieces.length - 1],
    next: pieces[index + 1] ?? pieces[0],
  };
}

export const mediumLabel: Record<Exclude<Medium, "all">, string> = {
  poster: "Poster",
  type: "Type",
  identity: "Identity",
  drawing: "Drawing",
  promo: "Promo",
  painting: "Painting",
};

export const statusLabel: Record<Piece["status"], string> = {
  rough: "Rough",
  study: "Study",
  published: "On Behance",
};
