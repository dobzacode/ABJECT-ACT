'use client';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import { cn } from 'lib/utils';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AssaultSection({ fullWidth = true }: { fullWidth?: boolean }) {
  const h2Controls = useAnimation();
  const [isReady, setIsReady] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setTimeout(() => setIsReady(true), 1000);
  }, []);

  return (
    <motion.section
      onClick={async () => {
        if (fullWidth) return;
        await router.replace(`/media/gallery?event=assault`);
        console.log('xd');
      }}
      initial={{ y: fullWidth ? 500 : 0, x: fullWidth ? 0 : 2000 }}
      animate={{ y: 0, transition: { duration: 1 }, x: 0 }}
      exit={{ y: fullWidth ? 500 : 0, x: fullWidth ? 0 : 2000 }}
      onHoverStart={() => {
        h2Controls.start({ x: fullWidth ? 1500 : 0, transition: { duration: 0 } }).then(() =>
          h2Controls.start({
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
          })
        );
      }}
      onHoverEnd={() => {
        h2Controls.start({
          opacity: fullWidth ? 0 : 1,
          x: fullWidth ? -1000 : 0,
          scale: fullWidth ? 1 : 0.6,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        });
      }}
      className={cn(
        `group/parent relative z-10 flex  items-center justify-center overflow-hidden`,
        !isReady ? 'pointer-events-none' : 'cursor-pointer',
        fullWidth ? 'h-1/2 w-full' : 'h-full w-1/2'
      )}
    >
      <Image
        alt="Assault"
        className={cn(
          '-z-10 object-cover object-center grayscale duration-slowest group-hover/parent:grayscale-0',
          searchParams.get('event') === 'assault' && 'grayscale-0'
        )}
        fill
        src={'/asset/event/assaultph.jpg'}
      ></Image>
      <motion.h2
        whileHover={{
          scale: fullWidth ? [1, 1.1, 1] : 1,
          transition: { repeat: Infinity, duration: 2, ease: easeInOut }
        }}
        initial={{ x: fullWidth ? 1500 : 0, y: 0, scale: 0.6 }}
        animate={h2Controls}
        className="heading--extra-large z-10 h-fit w-fit cursor-pointer  bg-transparent text-white"
      >
        ASSAULT
      </motion.h2>
    </motion.section>
  );
}
