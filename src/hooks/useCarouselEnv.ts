import { useState } from 'react';
import { EnvType } from '@/types/carouselType';
import useClientEffect from '@/hooks/useClientEffect';
import useResizeEffect from '@/hooks/useResizeEffect';

const getEnvSize = (width: number) => {
  if (width < 768) {
    return 'mobile';
  } else if (width < 1200) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

const useCarouselEnv = () => {
  const [env, setEnv] = useState<EnvType>('desktop');
  const windowSizeToSetEnv = () => {
    let w = window.innerWidth;
    const calcEnv = getEnvSize(w);
    setEnv(calcEnv);
  };

  //set when resizing screen
  useResizeEffect(windowSizeToSetEnv);

  //set default env value
  useClientEffect(windowSizeToSetEnv, []);
  return {
    env,
  };
};

export default useCarouselEnv;
