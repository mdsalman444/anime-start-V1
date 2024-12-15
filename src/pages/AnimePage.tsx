import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { animeList } from '../data/animeData';

export const AnimePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const anime = animeList.find(a => a.id === id);

  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
      <p className="text-gray-600 mb-8">{anime.description}</p>
      
      <div className="space-y-8">
        {anime.episodes.map(episode => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Episode {episode.number}: {episode.title}
            </h2>
            <VideoPlayer url={episode.embedUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};