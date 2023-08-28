export type AllowedButtonImportances = 'primary' | 'secondary';
type ButtonTypes = 'info' | 'success' | 'warning' | 'danger';

type Actions = {
  [key in AllowedButtonImportances]?: {
    type: ButtonTypes;
    text: string;
    action: () => void;
  };
}

export type MyModalProps = {
  type: 'info' | 'success' | 'warning' | 'danger';
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  hasPadding?: boolean;
  actions?: Actions
}