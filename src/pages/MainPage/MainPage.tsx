import styles from './MainPage.module.css'
import { Header } from '../../widgets/Header'
import { Playlist } from '../../widgets/Playlist'
import { TrackDetails } from '../../entities/Track/TrackDetails'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <Playlist />
        <TrackDetails />
      </div>
    </div>
  )
}
