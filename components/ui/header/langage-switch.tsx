import { mdiWeb } from '@mdi/js';
import Icon from '@mdi/react';
import { cn } from 'lib/utils';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../../navigation';
import Button from '../button/button';
import P from '../text/p';

export default function LangageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLangage = (locale: 'fr' | 'en') => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="fadeIn flex items-center gap-extra-small ">
      <Icon path={mdiWeb} color="white" size={1.5}></Icon>
      <span className="body flex gap-2 text-white">
        <Button
          onClick={() => (locale !== 'en' ? switchLangage('en') : '')}
          className={cn(locale !== 'en' && 'opacity-50', 'hover:opacity-100')}
        >
          EN
        </Button>
        <P className="opacity-50">|</P>
        <Button
          onClick={() => (locale !== 'fr' ? switchLangage('fr') : '')}
          className={cn(locale !== 'fr' && 'opacity-50', 'hover:opacity-100')}
        >
          FR
        </Button>
      </span>
    </div>
  );
}
