import Link from 'next/link';

export enum F_TEXT_VAR {
  TITLE_LEFT = 'TITLE_LEFT',
  TITLE_RIGHT = 'TITLE_RIGHT',
  TEXT = 'TEXT',
  LINK = 'LINK',
}

export interface FormattedText {
  text: string;
  variant?: F_TEXT_VAR;
  href?: string;
}

export function FormattedText({ text, variant = F_TEXT_VAR.TEXT, href = '/' }: FormattedText) {
  const splitTitle = text.split(' ');
  switch (variant) {
    case F_TEXT_VAR.TITLE_RIGHT:
      return (
        <div className={'flex flex-col items-end gap-2 text-9xl leading-20 uppercase'}>
          {splitTitle.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </div>
      );
    case F_TEXT_VAR.LINK:
      return (
        <Link href={href} className={'group opacity-30 hover:opacity-100'}>
          <div className={'flex items-center gap-2'}>
            <span className={'text-6xl font-bold uppercase'}>{text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={'h-10 w-10 rotate-180 font-extrabold opacity-0 group-hover:opacity-100'}
            >
              <path d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" fill="currentColor" />
            </svg>
          </div>
        </Link>
      );
    default:
      return <span>{text}</span>;
  }
}
