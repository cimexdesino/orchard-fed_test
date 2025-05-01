import { useLink, AriaLinkOptions } from '@react-aria/link';
import { forwardRef, useEffect, useRef } from 'react';

type LinkProps = AriaLinkOptions & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const innerRef = useRef<HTMLAnchorElement>(null);
  const { linkProps, isPressed } = useLink(props, innerRef);

  useEffect(() => {
    if (isPressed) {
      console.log('Link clicked:');
    }
  }, [isPressed, props.href]);

  return (
    <a {...props} {...linkProps} ref={ref ?? innerRef}>
      {props.children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
