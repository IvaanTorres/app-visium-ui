export type MyLinkProps = {
  to: string;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  state?: object,
  children: React.ReactNode;
  className?: string;
}