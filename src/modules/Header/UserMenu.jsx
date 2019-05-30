// import React, { Component, createRef } from 'react';
import React, { PureComponent, createRef } from 'react';
import Dropdown from './Dropdown';

// config
import dropdownItems from '../../config/dropdown-items';

// style
import s from './Header.module.css';

// img
import avatar from '../../assets/img/user-pic.svg';

class UserMenu extends PureComponent {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { isDropdownOpen } = this.state;
  //   return nextState.isDropdownOpen !== isDropdownOpen;
  // }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { user, onSignOut } = this.props;

    return (
      <div
        className={s.userMenu}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <img
          className={s.img}
          src={avatar}
          alt="Avatar"
          width={user.avatarWidth}
          height={user.avatarHeight}
        />
        <span className={s.name}>{user.name}</span>

        {isDropdownOpen && (
          <Dropdown onSignOut={onSignOut} items={dropdownItems} />
        )}
      </div>
    );
  }
}

export default UserMenu;
