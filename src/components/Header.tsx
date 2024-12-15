import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">AnimeStream</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/latest" className="hover:text-gray-300">Latest</Link>
            <Link to="/popular" className="hover:text-gray-300">Popular</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};