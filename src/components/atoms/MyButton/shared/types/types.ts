export type MyButtonProps = {
  children: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  type: 'info' | 'success' | 'warning' | 'danger'
  importance: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  className?: string
  isSubmit?: boolean
}