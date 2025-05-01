export type ImageItem = {
  id: string | number;
  src: string;
  description?: string;
};

export type Callout = {
  title: string;
  body: string;
};

export type MainSectionData = {
  title: string;
  images: ImageItem[];
  body: string;
  callout: Callout;
};

export type FeaturedItem = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
};

export type FeaturedSectionData = {
  title: string;
  items: FeaturedItem[];
};
