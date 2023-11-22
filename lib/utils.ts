import { ClassValue, clsx } from 'clsx';

import { Url } from 'next/dist/shared/lib/router/router';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(URL: Url) {
  setTimeout(function () {
    window.location = URL as any;
  }, 600);
}
