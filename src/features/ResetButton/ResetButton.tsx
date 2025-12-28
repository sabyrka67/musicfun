import styles from './ResetButton.module.css'

interface Props {
  onResetSelection: () => void
}

export const ResetButton = ({ onResetSelection }: Props) => {
  return (
    <button
      type="button"
      className={styles.resetButton}
      onClick={onResetSelection}
    >
      Reset selection
    </button>
  )
}
