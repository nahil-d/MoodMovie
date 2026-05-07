import { MOVIE_DATABASE, Movie } from "../data/MovieDatabase";

export type MoodCategory = 
  | "SCI-FI" 
  | "ROM-COM" 
  | "ACTION" 
  | "PSYCH-THRILLER" 
  | "FANTASY" 
  | "NEO-NOIR" 
  | "HISTORICAL" 
  | "HORROR" 
  | "COMING-OF-AGE" 
  | "MOCKUMENTARY";

const MOOD_MAPPING: Record<string, MoodCategory[]> = {
  curious: ["SCI-FI", "FANTASY"],
  futuristic: ["SCI-FI"],
  romantic: ["ROM-COM"],
  lighthearted: ["ROM-COM", "MOCKUMENTARY", "COMING-OF-AGE"],
  energetic: ["ACTION"],
  adrenaline: ["ACTION", "HORROR"],
  tense: ["PSYCH-THRILLER", "HORROR"],
  confused: ["PSYCH-THRILLER", "SCI-FI"],
  escapist: ["FANTASY", "SCI-FI"],
  magical: ["FANTASY"],
  brooding: ["NEO-NOIR", "PSYCH-THRILLER"],
  stylish: ["NEO-NOIR", "ACTION"],
  reflective: ["HISTORICAL", "COMING-OF-AGE"],
  serious: ["HISTORICAL", "NEO-NOIR"],
  scared: ["HORROR", "PSYCH-THRILLER"],
  dark: ["HORROR", "NEO-NOIR"],
  nostalgic: ["COMING-OF-AGE", "HISTORICAL"],
  growing: ["COMING-OF-AGE"],
  funny: ["MOCKUMENTARY", "ROM-COM"],
  cynical: ["MOCKUMENTARY", "NEO-NOIR"],
};

export const getMoodRecommendations = (vibe: string): Movie[] => {
  const words = vibe.toLowerCase().split(/\s+/);
  let categories: MoodCategory[] = [];

  // Try to find matching keywords
  for (const word of words) {
    if (MOOD_MAPPING[word]) {
      categories.push(...MOOD_MAPPING[word]);
    }
  }

  // Fallback if no keywords matched
  if (categories.length === 0) {
    const allCategories = Object.keys(MOVIE_DATABASE) as MoodCategory[];
    categories = [allCategories[Math.floor(Math.random() * allCategories.length)]];
  }

  // Pick a random category from the matches
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  const moviesInCategory = MOVIE_DATABASE[selectedCategory];

  // Shuffle and pick 3-5
  const shuffled = [...moviesInCategory].sort(() => 0.5 - Math.random());
  const count = Math.min(shuffled.length, Math.floor(Math.random() * 3) + 3); // 3 to 5
  
  return shuffled.slice(0, count);
};

export const getTrendingVibe = () => {
  const vibes = Object.keys(MOOD_MAPPING);
  return vibes[Math.floor(Math.random() * vibes.length)];
};
