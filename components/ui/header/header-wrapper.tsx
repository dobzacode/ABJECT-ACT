'use client';

import { motion } from 'framer-motion';

export default function HeaderWrapper({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
