'use client';

import { motion } from 'framer-motion';

export default function TestLogo() {
  return (
    <motion.svg
      className="stroke-white stroke-[4px]"
      initial={{}}
      animate={{}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4220.4 6799.9"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0.3 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: { duration: 2, ease: 'easeOut', delay: 3 }
        }}
        d="M4141.2 1854.3h-600.1l-274.6 757.8-860.9-2296.6h-590.8l-861 2296.6-274.6-757.8H79.1L658.5 3400 79.1 4945.6h600.1l274.6-757.8 860.9 2296.6h590.8l860.9-2296.6 274.6 757.8h600.1L3561.9 3400l579.3-1545.7zM2091.7 1048h36.9L2851 3041.2H1369.4L2091.7 1048zm37 4703.9h-36.9l-722.3-1993.2H2851l-722.3 1993.2z"
      />
    </motion.svg>
  );
}
