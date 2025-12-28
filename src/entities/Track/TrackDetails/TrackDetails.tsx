import styles from './TrackDetails.module.css'
import { useEffect } from 'react'
import type { Track } from '../../../pages/MainPage/MainPage'

interface Props {
  trackId: string | null
  selectedTrack: Track | null
  onTrackSelect: (track: Track | null) => void
}

export const TrackDetails = ({ trackId, selectedTrack, onTrackSelect }: Props) => {
  useEffect(() => {
    if (!trackId) return

    onTrackSelect(null)
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => onTrackSelect(json.data))
  }, [onTrackSelect, trackId])

  return (
    <div className={styles.trackDetails}>
      <h2>Track details</h2>
      {trackId === null ? (
        'No track selected'
      ) : selectedTrack === null ? (
        'Loading...'
      ) : (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <div>
            <h4>Lyrics</h4>
            <p>{selectedTrack.attributes.lyrics}</p>
          </div>
        </div>
      )}
    </div>
  )
}
