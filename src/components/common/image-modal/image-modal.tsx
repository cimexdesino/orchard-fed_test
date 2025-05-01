import { Modal, ModalProps } from '@/components/ui/modal/modal';
import React from 'react';

export interface ImageModalProps extends Omit<ModalProps, 'children'> {
  readonly imageUrl: string;
  readonly alt?: string;
}

export function ImageModal({ imageUrl, alt = 'Preview image', ...props }: ImageModalProps) {
  return (
    <Modal {...props}>
      <div className='tw-max-w-full tw-max-h-full tw-p-4 tw-bg-white tw-rounded tw-shadow-lg'>
        <img
          src={imageUrl}
          alt={alt}
          className='tw-max-w-[90vw] tw-max-h-[80vh] tw-object-contain tw-rounded'
        />
      </div>
    </Modal>
  );
}
