'use client';

import { mdiEmail, mdiFacebook, mdiInstagram, mdiSoundcloud } from '@mdi/js';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { v4 } from 'uuid';
import NavLink from '../header/nav-link';
import H3 from '../text/h3';
import { FooterBlockProps } from './about-us-block';
import SocialIcon from './social-icon';

export const socialLinks = [
  { href: 'mailto:abject.act@gmail.com', mdiPath: mdiEmail, name: 'Email' },
  {
    href: 'https://www.facebook.com/AbjectAct?locale=fr_FR',
    mdiPath: mdiFacebook,
    name: 'Facebook'
  },
  { href: 'https://www.instagram.com/abject_act/', mdiPath: mdiInstagram, name: 'Instagram' },
  { href: 'https://soundcloud.com/abject-act', mdiPath: mdiSoundcloud, name: 'Soundcloud' }
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
      key={'contact-block'}
      className="flex flex-col gap-small tablet:-order-none tablet:gap-medium"
    >
      <H3
        className={`${
          isActive ? 'opacity-100' : 'opacity-40'
        } max-mobile-medium:text-body max-mobile-medium:font-medium`}
        textType="sub-heading"
      >
        Contact
      </H3>
      <ul className="body flex gap-extra-small  mobile-medium:gap-small mobile-large:gap-5">
        {socialLinks.map((socialLink) => (
          <NavLink
            key={v4()}
            hover={true}
            intent={intent}
            currentNavStyle={currentNavStyle}
            href={socialLink.href}
          >
            <SocialIcon
              className=""
              size={1.3}
              href={socialLink.href}
              mdiPath={socialLink.mdiPath}
            ></SocialIcon>
          </NavLink>
        ))}
      </ul>
    </motion.div>
  );
}
