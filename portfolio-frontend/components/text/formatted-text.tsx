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
    default:
      return <span>{text}</span>;
  }
}
