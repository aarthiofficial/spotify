'use client'

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { fetchPlaylists } from '@/lib/spotify';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      if (session?.accessToken) {
        const data = await fetchPlaylists(session.accessToken);
        setPlaylists(data.items);
      }
    };
    getPlaylists();
  }, [session]);

  if (status === 'loading') return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Your Playlists</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {playlists.map((pl: any) => (
          <div key={pl.id} className="bg-zinc-800 rounded p-3">
            <img src={pl.images?.[0]?.url} alt={pl.name} className="rounded mb-2" />
            <p>{pl.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
