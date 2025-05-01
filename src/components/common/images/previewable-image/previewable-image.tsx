import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal/modal';
import { cn } from '@/utils/cn';
import React from 'react';
import { useOverlayTriggerState } from 'react-stately';

type PreviewableImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

// Consider using picture if we need changing assets for each breakpoint
export const PreviewableImage = ({ src, alt = '', className, ...rest }: PreviewableImageProps) => {
  const state = useOverlayTriggerState({});

  return (
    <>
      <Button onPress={() => state.open()} className='p-0 w-full h-full'>
        <img src={src} alt={alt} className={className} {...rest} />
      </Button>

      <Modal state={state} isDismissable>
        <div className='relative w-full h-full'>
          <Button
            onPress={() => state.close()}
            className='absolute top-2 right-2 z-10 text-white rounded p-2'
          >
            ×
          </Button>
          <img src={src} alt={alt} className={cn(className, 'max-w-full max-h-[80vh]')} {...rest} />
        </div>
      </Modal>
    </>
  );
};
