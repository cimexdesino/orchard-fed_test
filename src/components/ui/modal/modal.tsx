import React from 'react';
import { Overlay, useModalOverlay, AriaModalOverlayProps, FocusScope } from 'react-aria';
import { motion, AnimatePresence } from 'framer-motion';
import { OverlayTriggerState } from 'react-stately';

export interface ModalProps extends AriaModalOverlayProps {
  readonly state: OverlayTriggerState;
  readonly children: React.ReactNode;
}

export function Modal({ state, children, ...props }: ModalProps) {
  const ref = React.useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <Overlay>
          <FocusScope contain restoreFocus autoFocus>
            <motion.div
              className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              {...(underlayProps as React.HTMLAttributes<HTMLDivElement>)}
            >
              <motion.div
                {...(modalProps as React.HTMLAttributes<HTMLDivElement>)}
                ref={ref}
                className='relative p-6 rounded shadow-lg'
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </motion.div>
          </FocusScope>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
