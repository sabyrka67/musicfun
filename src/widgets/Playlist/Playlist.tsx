import styles from './Playlist.module.css'
import { useEffect, useState } from 'react'
import type { Track } from '../../pages/MainPage/MainPage'
import { TrackItem } from '../../entities/Track/TrackItem'

interface Props {
  trackId: string | null
  onTrackIdSelect: (trackId: string) => void
}

export const Playlist = ({ trackId, onTrackIdSelect }: Props) => {
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => setTracks(json.data))
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
        <TrackItem
          key={trackId}
          track={track}
          trackId={trackId}
          onTrackIdSelect={onTrackIdSelect}
        />
      ))}
    </ul>
  )
}
