import React from 'react';
import { Link } from 'react-router-dom';
import { Anime } from '../types/anime';

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={anime.thumbnail} 
        alt={anime.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{anime.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{anime.description}</p>
        <Link 
          to={`/anime/${anime.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Watch Now
        </Link>
      </div>
    </div>
  );
};