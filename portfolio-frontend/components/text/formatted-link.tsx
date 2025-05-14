import Link from 'next/link';
import clsx from 'clsx';

export enum LINK_VARIANT {
  HOME,
  NAV,
}

export interface FormattedLinkProps {
  href: string;
  label: string;
  variant?: LINK_VARIANT;
  selected?: boolean;
  svgPath?: string;
}

export default function FormattedLink({
  href,
  label,
  variant = LINK_VARIANT.HOME,
  selected = false,
  svgPath,
}: FormattedLinkProps) {
  if (variant === LINK_VARIANT.HOME) {
    return (
      <Link href={href} className={'group opacity-40 hover:opacity-100'}>
        <div className={'flex items-center gap-1'}>
          <span className={'text-6xl font-bold uppercase'}>{label}</span>
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
  }
  if (variant === LINK_VARIANT.NAV) {
    const linkClasses = clsx('hover:opacity-100 leading-80', {
      'opacity-100': selected,
      'opacity-40': !selected,
    });
    const selectorClasses = clsx('h-5 w-5 font-extrabold transition-all duration-300', {
      'rotate-90': selected,
    });
    return (
      <Link href={href} className={linkClasses}>
        <div className={'flex items-center justify-between gap-2'}>
          <div className={'flex items-center gap-1'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={selectorClasses}>
              <path d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" fill="currentColor" />
            </svg>
            <span className={'text-3xl leading-18 font-bold uppercase'}>{label}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={'h-8 w-8'}>
            <path d={svgPath} fill="currentColor" />
          </svg>
        </div>
      </Link>
    );
  }
}
