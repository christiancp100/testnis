import { cn } from '../lib/utils';

type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <h1 className={cn('text-2xl font-bold flex bg-red-400 my-12')}>
      {children}
    </h1>
  );
}

export default Title;
