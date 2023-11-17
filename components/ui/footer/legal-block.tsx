import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { v4 } from 'uuid';
import NavLink from '../header/nav-link';
import H3 from '../text/h3';
import { FooterBlockProps } from './about-us-block';

const links = [
  { href: '/legal/terms', name: 'Terms & Conditions' },
  { href: '/legal/informations', name: 'Legal Informations' },
  { href: '/legal/privacy', name: 'Privacy Policy' }
];

export default function LegalBlock({
  variants,
  initial,
  animate,
  custom,
  exit,
  currentNavStyle,
  intent
}: FooterBlockProps) {
  const pathname = usePathname();
  const isActive = pathname.includes('legal');

  return (
    <motion.div
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
      exit={exit}
      key={'legal-block'}
      className="flex flex-col gap-small mobile-large:gap-extra-small"
    >
      <H3
        className={`${
          isActive ? 'opacity-100' : 'opacity-40'
        } max-mobile-medium:text-body max-mobile-medium:font-medium`}
        textType="sub-heading"
      >
        LEGAL
      </H3>
      <ul className="body flex gap-extra-small  mobile-medium:gap-small mobile-large:gap-medium">
        {links.map((link, index) =>
          index === 0 ? (
            <NavLink
              hover={true}
              intent={intent}
              currentNavStyle={currentNavStyle}
              key={v4()}
              href={link.href}
            >
              {link.name}
            </NavLink>
          ) : (
            <NavLink
              hover={true}
              intent={intent}
              currentNavStyle={currentNavStyle}
              key={v4()}
              href={link.href}
            >
              {link.name.split(' ')[0]}
              <span className="hidden mobile-medium:block">
                {link.name.split('`').slice(1).join(' ')}
              </span>
            </NavLink>
          )
        )}
      </ul>
    </motion.div>
  );
}
