import Link from 'next/link';

export interface FormattedLinkProps {
  href: string;
  label: string;
}

export default function FormattedLink({ href, label }: FormattedLinkProps) {
  return (
    <Link href={href} className={'group opacity-30 hover:opacity-100'}>
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
