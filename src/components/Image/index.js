import { useState, forwardRef } from 'react';
import images from '~/assests/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFallback);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
