import styles from './Header.module.css'
import { PageTitle } from '../../shared/ui/PageTitle'
import { ResetButton } from '../../features/ResetButton'

export const Header = () => {
  return (
    <div className={styles.header}>
      <PageTitle />
      <ResetButton />
    </div>
  )
}
