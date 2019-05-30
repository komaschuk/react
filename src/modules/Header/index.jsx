import React from 'react';

// components
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import ModalContent from '../../components/ModalContent';
import Tabs from '../Tabs';
import SignInForm from '../Tabs/SignInForm';
import SignUpForm from '../Tabs/SignUpForm';
import Button from '../../components/Button';

// styles
import s from './Header.module.css';
import b from '../../components/Button/Button.module.css';

// config
import navLinks from '../../config/main-nav';
import logoParam from '../../config/logo-param';

// enhancers
import Modal from '../../enhancers/Modal';
// import withAuthContext from '../../enhancers/withAuthContext';
import AuthContext from '../../contexts/AuthContext';

// const Header = ({ authContext }) => (
//   <div className={s.container}>
//     {authContext}

//     <Logo logo={data.logoParam} />
//     <Navigation items={data.navItems} />
//     {/* <UserMenu user={user} onSignOut={onSignOut} /> */}
//   </div>
// );

// export default withAuthContext(Header);

const Header = () => (
  <div className={s.container}>
    <Logo logo={logoParam} />
    <Navigation items={navLinks} />
    <AuthContext.Consumer>
      {({ isAuthenticated, user, onSignOut, onSignIn }) =>
        isAuthenticated ? (
          <UserMenu user={user} onSignOut={onSignOut} />
        ) : (
          <Modal>
            {({ isOpen, open, close, ref, index }) => (
              <div className={s.btnWr}>
                <Button
                  className={b.btnLight}
                  type="button"
                  onClick={() => {
                    open(0);
                  }}
                >
                  Sign in
                </Button>
                <Button
                  className={b.btnLight}
                  type="button"
                  onClick={() => {
                    open(1);
                  }}
                >
                  Sign up
                </Button>
                {isOpen && (
                  <ModalContent
                    onClose={close}
                    ref={ref}
                    text={
                      <Tabs
                        index={index}
                        items={[
                          {
                            title: 'Sign in',
                            content: <SignInForm onSignIn={onSignIn} />,
                          },
                          { title: 'Sign up', content: <SignUpForm /> },
                        ]}
                      />
                    }
                  />
                )}
              </div>
            )}
          </Modal>
        )
      }
    </AuthContext.Consumer>
  </div>
);

export default Header;
