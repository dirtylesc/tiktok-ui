import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  border = false,
  rounded = false,
  disabled = false,
  size = 'medium',
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    border,
    rounded,
    [size]: size,
    disabled,
  });

  /// Delete action listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className={cx('icon-btn')} />}
      <span className={cx('text')}>{children}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} className={cx('icon-btn')} />}
    </Comp>
  );
}

export default Button;
