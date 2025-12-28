import styles from './Playlist.module.css'
import { useEffect, useState } from 'react'

type Track = {
  id: number
  attributes: {
    title: string
    lyrics?: string
    attachments?: { url: string }[]
  }
}

export const Playlist = () => {
  const [tracks, setTracks] = useState<Track[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => setTracks(json.data as Track[]))
  }, [])

  if (tracks === null) {
    return (
      <>
        <h1>MusicFun</h1>
        <p>Loading...</p>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>MusicFun</h1>
        <p>No tracks available</p>
      </>
    )
  }

  return (
    <ul className={styles.playlist}>
      {tracks.map(track => (
        <li
          key={track.id}
          style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
          onClick={() => setSelectedTrackId(track.id)}
        >
          <div>{track.attributes.title}</div>
          <audio
            src={track.attributes.attachments?.[0]?.url}
            controls
          />
        </li>
      ))}
    </ul>
  )
}
