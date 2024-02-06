/* 윈도우 창의 화면 크기가 바뀔 때마다 innerWidth를 측정해 리턴하는 훅 */

import { useState } from 'react';

import useClientEffect from '@/hooks/useClientEffect';
import useResizeEffect from '@/hooks/useResizeEffect';

const useWindowInnerWidth = () => {
  const [dynamicWid, setDynamicWid] = useState<number>(0);
  const windowSizeToSetEnv = () => {
    let w = typeof window !== 'undefined' ? window.innerWidth : 0;
    setDynamicWid(w);
  };

  //set when resizing screen
  useResizeEffect(windowSizeToSetEnv);

  //set default env value
  useClientEffect(windowSizeToSetEnv, []);
  return {
    dynamicWid,
  };
};

export default useWindowInnerWidth;
