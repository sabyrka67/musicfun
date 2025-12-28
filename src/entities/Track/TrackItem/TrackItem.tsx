import styles from './TrackItem.module.css'
import type { Track } from '../../../pages/MainPage/MainPage'

interface Props {
  track: Track
  trackId: string | null
  onTrackIdSelect: (trackId: string) => void
}

export const TrackItem = ({ track, trackId, onTrackIdSelect }: Props) => {
  const handleTrackSelect = () => onTrackIdSelect(track.id)

  return (
    <li
      className={`${styles.track} ${track.id === trackId ? styles.active : ''}`}
      onClick={handleTrackSelect}
    >
      <div>{track.attributes.title}</div>
      <audio
        src={track.attributes.attachments?.[0]?.url}
        controls
      />
    </li>
  )
}
