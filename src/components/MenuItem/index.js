import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import { Wrapper as PopperWrapper } from '../Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItems({ width, children, items, onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            isParent && setHistory((prev) => [...prev, item.children]);
            if (!isParent) onChange(item);
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      animation={false}
      delay={[0, 1000]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs} style={{ width: width }}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory(history.filter((prev) => prev !== history[history.length - 1]));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default MenuItems;
