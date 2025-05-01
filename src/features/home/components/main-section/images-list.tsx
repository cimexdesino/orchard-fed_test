import { PreviewableImage } from '@/components/common/images/previewable-image/previewable-image';
import { ImageItem } from '@/types';

type ImagesListProps = {
  images: ImageItem[];
};

const getImageAlt = (image: ImageItem) => {
  if (image.description?.trim()) {
    return image.description;
  }

  return (
    image.src
      .split('/')
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp|svg|avif)$/i, '')
      .replace(/[-_]/g, ' ') ?? 'Image'
  );
};

const containerClasses = 'w-full h-full max-h-[734px]';
const imageClasses = 'w-full h-full object-cover';

const renderImage = (image: ImageItem) => {
  const alt = getImageAlt(image);
  return <PreviewableImage key={image.id} src={image.src} alt={alt} className={imageClasses} />;
};

const ImagesList = ({ images = [] }: ImagesListProps) => {
  if (images.length === 0) return null;

  const baseClasses = 'image-section col-span-12 lg:col-span-8 flex items-stretch';

  // Might be better to create a per layout to be more OneImageLayout, etc.
  switch (images.length) {
    case 1:
      return (
        <div className={baseClasses}>
          <div className={containerClasses}>{renderImage(images[0])}</div>
        </div>
      );

    case 2:
      return (
        <div className={baseClasses}>
          <div className={`grid grid-rows-2 gap-[10px] ${containerClasses}`}>
            {images.map(renderImage)}
          </div>
        </div>
      );

    case 3:
      return (
        <div className={baseClasses}>
          <div className='grid grid-cols-2 gap-[10px] w-full h-full'>
            <div className='col-span-1'>{renderImage(images[0])}</div>
            <div className='col-span-1 grid grid-rows-2 gap-[10px]'>
              {renderImage(images[1])}
              {renderImage(images[2])}
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={baseClasses}>
          <div className='grid grid-cols-2 gap-[10px] w-full h-full'>
            {[0, 2].map((start) => (
              <div
                key={images[start].id}
                className={`grid grid-rows-2 gap-[10px] ${containerClasses}`}
              >
                {renderImage(images[start])}
                {renderImage(images[start + 1])}
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export { ImagesList };
