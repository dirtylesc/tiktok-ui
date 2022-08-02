import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, ...props }) {
  let Comp = Fragment;

  if (data.to) {
    Comp = Link;
    props.to = data.to;
    props.style = {
      display: 'flex',
      alignItems: 'center',
    };
  } else if (data.href) {
    Comp = 'a';
    props.href = data.href;
    props.style = {
      display: 'flex',
      alignItems: 'center',
    };
  }

  return (
    <div className={cx('wrapper', { separate: data.separate })} onClick={onClick}>
      <Comp {...props} key={data.icon}>
        {data.icon && data.icon}
        <span>{data.text}</span>
      </Comp>
    </div>
  );
}

export default MenuItem;
