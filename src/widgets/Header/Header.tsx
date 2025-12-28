import styles from './Header.module.css'
import { PageTitle } from '../../shared/ui/PageTitle'
import { ResetButton } from '../../features/ResetButton'

interface Props {
  onResetSelection: () => void
}

export const Header = ({ onResetSelection }: Props) => {
  return (
    <header className={styles.header}>
      <PageTitle />
      <ResetButton onResetSelection={onResetSelection} />
    </header>
  )
}
