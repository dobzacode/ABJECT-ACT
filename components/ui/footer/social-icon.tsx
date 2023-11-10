import Icon from '@mdi/react';
import { IconProps } from '@mdi/react/dist/IconProps';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface SocialIconProps extends LinkProps<IconProps> {
  mdiPath: string;
  className?: string;
  size: number;
}

const SocialIcon: FC<SocialIconProps> = ({
  mdiPath,
  href,
  size,
  className,
  ...props
}: SocialIconProps) => {
  return (
    <Link href={href} {...props}>
      <Icon className={className} path={mdiPath} size={size}></Icon>
    </Link>
  );
};

export default SocialIcon;
