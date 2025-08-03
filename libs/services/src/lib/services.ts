import { Utils } from '@seo-monorepo/utils';
import { CommonStringFn } from '@seo-monorepo/types';

export const services: CommonStringFn = () => {
  const utilsResult = Utils();
  return `services uses: ${utilsResult}`;
};
