import { ReactNode } from 'react';

export default function Grid({ children }: { children: ReactNode }) {
  return (
    <div className={'flex h-dvh w-dvw items-center justify-center overflow-hidden'}>
      <div className={'z-10'}>{children}</div>
      <div className={'fixed z-0 flex h-full w-[120%] flex-wrap'}>
        {[...Array(1500)].map((_, i) => (
          <div
            className={
              'group p-1 opacity-0 transition-all duration-75 not-hover:translate-1 not-hover:delay-500 not-hover:duration-1000 hover:opacity-100'
            }
            key={i}
          >
            <div className={'h-8 w-8 border-4 border-white'} />
          </div>
        ))}
      </div>
    </div>
  );
}
