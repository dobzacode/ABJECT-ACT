
import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js';
import { VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { FC, HTMLAttributes } from 'react';
import { sectionVariants } from '../header/header';
import SocialIcon from './social-icon';

interface FooterProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
  textColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
}

const Footer: FC<FooterProps> = ({ className, size, intent }: FooterProps) => {
  return (
    <footer className={cn(sectionVariants({ size, intent, className }))}>
      <address className="gap-medium flex justify-center ">
        <SocialIcon size={3} href="/" mdiPath={mdiInstagram}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiFacebook}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiTwitter}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiLinkedin}></SocialIcon>
      </address>
    </footer>
  );
};

export default Footer;
