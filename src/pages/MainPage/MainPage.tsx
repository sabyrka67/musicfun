import React, { useCallback, useState } from 'react'
import styles from './MainPage.module.css'
import { Header } from '../../widgets/Header'
import { Playlist } from '../../widgets/Playlist'
import { TrackDetails } from '../../entities/Track/TrackDetails'

export interface Track {
  id: string
  attributes: {
    title: string
    lyrics?: string
    attachments?: { url: string }[]
  }
}

export const MainPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  const handleResetSelection = useCallback(() => {
    setSelectedTrack(null)
    setSelectedTrackId(null)
  }, [])

  const handleTrackIdSelect = useCallback((trackId: string) => {
    setSelectedTrackId(trackId)
  }, [])

  const handleTrackSelect = useCallback((track: Track | null) => {
    setSelectedTrack(track)
  }, [])

  return (
    <div className={styles.mainPage}>
      <Header onResetSelection={handleResetSelection} />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <Playlist
          trackId={selectedTrackId}
          onTrackIdSelect={handleTrackIdSelect}
        />
        <TrackDetails
          trackId={selectedTrackId}
          selectedTrack={selectedTrack}
          onTrackSelect={handleTrackSelect}
        />
      </div>
    </div>
  )
}
