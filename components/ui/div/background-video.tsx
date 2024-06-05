'use client';

import { motion } from 'framer-motion';

export default function VideoBackground({ src }: { src: string }) {
  return (
    <div className="fixed left-0 top-0 -z-20 h-full w-full overflow-hidden">
      <motion.video
        animate={{ opacity: 1, transition: { duration: 1 } }}
        autoPlay
        muted
        playsInline
        loop
        className="h-full w-full object-cover opacity-0"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
}
