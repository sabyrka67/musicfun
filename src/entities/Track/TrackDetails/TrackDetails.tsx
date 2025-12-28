import styles from './TrackDetails.module.css'
import { useEffect, useState } from 'react'

type Track = {
  id: number
  attributes: {
    title: string
    lyrics?: string
    attachments?: { url: string }[]
  }
}

export const TrackDetails = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [selectedTrackId, __] = useState<number | null>(null)

  useEffect(() => {
    if (!selectedTrackId) return

    setSelectedTrack(null)
    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: { 'api-key': import.meta.env.VITE_API_KEY },
    })
      .then(res => res.json())
      .then(json => setSelectedTrack(json.data as Track))
  }, [selectedTrackId])

  return (
    <div className={styles.trackDetails}>
      <h2>Track details</h2>
      {selectedTrackId === null ? (
        'No Track selected'
      ) : selectedTrack === null ? (
        'Loading Track...'
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
