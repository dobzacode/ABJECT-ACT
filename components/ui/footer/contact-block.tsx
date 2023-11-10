'use client';

import { mdiEmail, mdiFacebook, mdiInstagram } from '@mdi/js';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { v4 } from 'uuid';
import NavLink from '../header/nav-link';
import H3 from '../text/h3';
import { FooterBlockProps } from './about-us-block';
import SocialIcon from './social-icon';

const socialLinks = [
  { href: '/', mdiPath: mdiEmail },
  { href: '/', mdiPath: mdiFacebook },
  { href: '/', mdiPath: mdiInstagram }
];

export default function ContactBlock({
  variants,
  initial,
  animate,
  custom,
  exit,
  currentNavStyle,
  intent
}: FooterBlockProps) {
  const pathname = usePathname();
  const isActive = pathname.includes('/contact/');

  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
      exit={exit}
      key={v4()}
      className="flex flex-col gap-small"
    >
      <H3 className={`${isActive ? 'opacity-100' : 'opacity-40'}`} textType="sub-heading">
        Contact
      </H3>
      <ul className="body flex gap-medium">
        {socialLinks.map((socialLink) => (
          <li key={v4()}>
            <NavLink
              hover={true}
              intent={intent}
              currentNavStyle={currentNavStyle}
              href={socialLink.href}
            >
              <SocialIcon
                className="opacity-40"
                size={1.6}
                href={socialLink.href}
                mdiPath={socialLink.mdiPath}
              ></SocialIcon>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
