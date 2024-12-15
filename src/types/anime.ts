export interface Anime {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  episodes: Episode[];
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  embedUrl: string;
}