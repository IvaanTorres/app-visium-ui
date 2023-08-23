export type MyButtonProps = {
  children: React.ReactNode
  onClick: () => void
  type: 'info' | 'success' | 'warning' | 'danger'
  importance: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  className?: string
}