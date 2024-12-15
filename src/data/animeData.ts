import { Anime } from '../types/anime';

export const animeList: Anime[] = [
  {
    id: '1',
    title: 'Sample Anime 1',
    description: 'A fascinating journey into a magical world where anything is possible.',
    thumbnail: 'https://via.placeholder.com/300x169',
    episodes: [
      {
        id: '1-1',
        number: 1,
        title: 'The Beginning',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '1-2',
        number: 2,
        title: 'The Journey Continues',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  },
  {
    id: '2',
    title: 'Sample Anime 2',
    description: 'An epic tale of friendship and adventure in a dystopian future.',
    thumbnail: 'https://via.placeholder.com/300x169',
    episodes: [
      {
        id: '2-1',
        number: 1,
        title: 'New World',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  }
];