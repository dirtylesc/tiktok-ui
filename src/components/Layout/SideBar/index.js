import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('content')}>
        <h2>Side Bar</h2>
      </div>
    </aside>
  );
}

export default SideBar;
