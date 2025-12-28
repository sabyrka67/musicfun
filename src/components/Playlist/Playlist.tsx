import styles from './Playlist.module.css'
import { Track } from '../Track'

export const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <Track />
    </div>
  )
}
