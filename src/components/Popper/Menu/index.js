import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      placement="bottom-end"
      interactive
      delay={[0, 700]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
