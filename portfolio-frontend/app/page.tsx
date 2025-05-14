import { F_TEXT_VAR, FormattedText } from '@/components/text/formatted-text';
import { routes } from '@/configs/routes';
import FormattedLink from '@/components/text/formatted-link';
import Grid from '@/components/animation/grid';

export default function Home() {
  return (
    <Grid>
      <div
        className={
          'bg-background animate-float z-20 m-2 flex items-center justify-center border-4 p-6 drop-shadow-xl'
        }
      >
        <div className={'flex flex-col items-end justify-center gap-4'}>
          <FormattedText text={'Joshua Wainwright'} variant={F_TEXT_VAR.TITLE_RIGHT} />
          <span className={'pr-3 text-3xl opacity-40'}>Software Developer</span>
        </div>
        <div className={'ml-8 flex flex-col justify-start gap-2 border-l-4 pl-8'}>
          {Object.values(routes).map((route, index) => (
            <FormattedLink key={index} label={route.label} href={route.path} />
          ))}
        </div>
      </div>
    </Grid>
  );
}
