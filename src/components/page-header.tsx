import { ReactNode } from 'react';

type Props = {
  title: string[];
  description: string;
  children?: ReactNode;
};

export default function PageHeader({ description, title, children }: Props) {
  return (
    <div>
      <h1 className="text-4xl font-bold leading-snug">
        {title.map((value) => (
          <>
            {value}
            <br />
          </>
        ))}
      </h1>
      <p className="mt-4 text-lg">{description}</p>
      {children}
    </div>
  );
}
