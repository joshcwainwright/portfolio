import { F_TEXT_VAR, FormattedText } from '@/components/text/formatted-text';
import { routes } from '@/configs/routes';
import FormattedLink from '@/components/text/formatted-link';
import Grid from '@/components/animation/grid';

export default function LandingPage() {
  return (
    <Grid>
      <div className={'bg-background -white flex items-center justify-center border-4 p-8'}>
        <FormattedText text={'Joshua Wainwright'} variant={F_TEXT_VAR.TITLE_RIGHT} />
        <div className={'ml-8 flex flex-col justify-start gap-2 border-l-4 pl-8'}>
          {routes.map((route, index) => (
            <FormattedLink key={index} label={route.label} href={route.href} />
          ))}
        </div>
      </div>
    </Grid>
  );
}
