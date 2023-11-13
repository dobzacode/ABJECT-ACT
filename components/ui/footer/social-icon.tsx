import Icon from '@mdi/react';
import { IconProps } from '@mdi/react/dist/IconProps';
import { LinkProps } from 'next/link';
import { FC } from 'react';

interface SocialIconProps extends LinkProps<IconProps> {
  mdiPath: string;
  className?: string;
  size: number;
}

const SocialIcon: FC<SocialIconProps> = ({ mdiPath, size, className }: SocialIconProps) => {
  return (
    <>
      <Icon className={className} path={mdiPath} size={size}></Icon>
    </>
  );
};

export default SocialIcon;
