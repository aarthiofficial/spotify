export const fetchPlaylists = async (accessToken: string) => {
  const res = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch playlists");
  }
  return res.json();
};
