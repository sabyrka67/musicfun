import styles from './MainPage.module.css'
import { Header } from '../../components/Header'
import { Playlist } from '../../components/Playlist'
import { TrackDetails } from '../../components/TrackDetails'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Playlist />
      <TrackDetails />
    </div>
  )
}
