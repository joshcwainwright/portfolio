import { Route } from '@/configs/routes';
import FormattedLink, { LINK_VARIANT } from '@/components/text/formatted-link';
import clsx from 'clsx';

export function NavBarSection({
  route,
  pathname,
  index,
  isLast,
}: {
  route: Route;
  pathname: string;
  index: number;
  isLast: boolean;
}) {
  const isSelected = route.path === pathname;
  const isFirst = index === 0;
  const classes = clsx(
    'flex -m-0.5 flex-col px-4',
    { 'border-y-white': isSelected },
    { 'border-y-4': !isFirst },
    { 'border-b-4': isFirst },
    { 'border-b-white-opacity-10 border-t-white-opacity-5': isLast && !isSelected },
    { 'border-y-white-opacity-5': !isLast && !isSelected },
  );
  return (
    <div className={classes}>
      <FormattedLink
        href={route.path}
        label={route.label}
        variant={LINK_VARIANT.NAV}
        selected={isSelected}
        svgPath={route.svgPath}
      />
    </div>
  );
}
