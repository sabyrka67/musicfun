import styles from './ResetButton.module.css'
import { useState } from 'react'

type Track = {
  id: number
  attributes: {
    title: string
    lyrics?: string
    attachments?: { url: string }[]
  }
}

export const ResetButton = () => {
  const [_, setSelectedTrack] = useState<Track | null>(null)
  const [__, setSelectedTrackId] = useState<number | null>(null)

  return (
    <button
      type="button"
      className={styles.resetButton}
      onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}
    >
      Reset selection
    </button>
  )
}
