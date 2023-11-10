'use client';
import { easeInOut, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function PulsarSection() {
  const h2Controls = useAnimation();

  return (
    <motion.section
      initial={{ y: -500 }}
      animate={{ y: 0, transition: { duration: 1 } }}
      exit={{ y: -500 }}
      onHoverStart={() => {
        h2Controls.start({ x: -1500, transition: { duration: 0 } }).then(() =>
          h2Controls.start({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
          })
        );
      }}
      onHoverEnd={() => {
        h2Controls.start({
          opacity: 0,
          x: 1000,
          transition: { type: 'spring', stiffness: 200, damping: 20 }
        });
      }}
      className="group/parent relative z-10 flex h-1/2 w-full items-center justify-center overflow-hidden"
    >
      <Image
        alt="Pulsar"
        className="-z-10 object-cover object-center grayscale duration-slowest group-hover/parent:grayscale-0"
        fill
        src={'/asset/event/pulsarph.jpg'}
      ></Image>
      <motion.h2
        whileHover={{
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 2, ease: easeInOut }
        }}
        initial={{ x: -1500 }}
        animate={h2Controls}
        className="heading--extra-large z-10 h-fit w-fit cursor-pointer bg-transparent text-white"
      >
        PULSAR
      </motion.h2>
    </motion.section>
  );
}
