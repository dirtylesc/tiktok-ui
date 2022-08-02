import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import MenuItems from '~/components/MenuItem';
import Button from '~/components/Button';
import {
  CoinsIcon,
  FeedbackIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessagesIcon,
  SeemoreIcon,
  SettingsIcon,
  UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import images from '~/assests/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon width="20px" height="20px" />,
    text: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          text: 'English',
        },
        {
          code: 'vi',
          text: 'Vietnamese',
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon width="20px" height="20px" />,
    text: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon width="20px" height="20px" />,
    text: 'Keyboard shortcuts',
  },
];

const MENU_USERS = [
  {
    icon: <UserIcon width="20px" height="20px" />,
    text: 'View profile',
    to: '/myprofile',
  },
  {
    icon: <CoinsIcon width="20px" height="20px" />,
    text: 'Get coins',
    to: '/coins',
  },
  {
    icon: <SettingsIcon width="20px" height="20px" />,
    text: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon width="20px" height="20px" />,
    text: 'Log out',
    to: '/settings',
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([]);
  //   }, 0);
  // });

  const handleChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-account-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search account and videos.." spellCheck={false} />
            <div className={cx('loading-icons')}>
              <div style={{ display: 'none' }}>
                <FontAwesomeIcon icon={faCircleNotch} />
              </div>
              <button style={{ display: 'none' }} className={cx('remove-btn')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <span className={cx('clear-span')}></span>
            </div>
            <Tippy content="Tìm kiếm" placement="right">
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
          </div>
        </Tippy>

        <div className={cx('functions')}>
          {currentUser ? (
            <>
              <Button to={'/upload'} target="_blank" leftIcon={faPlus} border>
                Upload
              </Button>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessagesIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button to={'/upload'} target="_blank" leftIcon={faPlus} border>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          <MenuItems width="223px" items={currentUser ? MENU_USERS : MENU_ITEMS} onChange={handleChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="ahttps://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/37594cdbe0f8ff1960919096f90caf17~c5_100x100.jpeg?x-expires=1659488400&x-signature=Nd5KgI1Id23dUN0Fyz%2FqvLzKawg%3D"
                alt={'Phan Xuan Sy'}
              />
            ) : (
              <SeemoreIcon className={cx('see-more-icon')} />
            )}
          </MenuItems>
        </div>
      </div>
    </header>
  );
}

export default Header;
