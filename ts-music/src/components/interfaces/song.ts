interface Song {
  album: album;
  artist: artist;
  duration?: number;
  id: number;
  title: string;
  preview?: string;
}

interface album {
  cover: string;
  id: number;
  title: string;
  tracklist?: string;
}

interface artist {
  id: number;
  name: string;
  picture: string;
  tracklist?: string;
}
export default Song;
