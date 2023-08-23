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
  className?: string;
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  hasPadding?: boolean;
  actions?: Actions
}