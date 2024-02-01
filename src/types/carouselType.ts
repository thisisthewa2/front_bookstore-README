export type NewBook = {
  imageUrl: string;
  title: string;
  authorname: string;
};

export type ResponSive = {
  desktop: Desktop;
  tablet: Tablet;
  mobile: Mobile;
};

export interface Desktop {
  breakpoint: Breakpoint;
  imageSize: ImageSize;
}

export interface Tablet {
  breakpoint: Breakpoint;
  imageSize: ImageSize;
}

export interface Mobile {
  breakpoint: Breakpoint;
  imageSize: ImageSize;
}
export interface Breakpoint {
  min: number;
  max: number;
}

export interface ImageSize {
  width: number;
  height: number;
}

export type EnvType = 'desktop' | 'tablet' | 'mobile';
