import { F_TEXT_VAR, FormattedText } from '@/components/text/formatted-text';
import { routes } from '@/configs/routes';

export default function LandingPage() {
  return (
    <div className={'flex w-full items-center justify-center'}>
      <FormattedText text={'Joshua Wainwright'} variant={F_TEXT_VAR.TITLE_RIGHT} />
      <div className={'m-8 flex flex-col justify-start gap-8 border-l-4 p-8'}>
        {routes.map((route, index) => (
          <FormattedText
            key={index}
            text={route.label}
            variant={F_TEXT_VAR.LINK}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
}
