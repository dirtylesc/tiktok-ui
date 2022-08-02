import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658635200&x-signature=W9%2FjJO8B2rcMtMLns2b%2FFbz9yIw%3D"
        alt=""
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <p className={cx('username')}>
          <b>dirty.lesc.067</b>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('username-checked')} />
        </p>
        <span className={cx('name')}>Phan Xuân Sỹ</span>
      </div>
    </div>
  );
}

export default AccountItem;
