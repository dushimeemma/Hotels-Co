import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  classes?: string;
}

export default function Badge({ children, classes }: Props) {
  return <div className={`badge badge-outline ${classes}`}>{children}</div>;
}
