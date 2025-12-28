import styles from './Header.module.css'
import { PageTitle } from '../PageTitle'
import { ResetButton } from '../ResetButton'

export const Header = () => {
  return (
    <div className={styles.header}>
      <PageTitle />
      <ResetButton />
    </div>
  )
}
