// import styles from './css/headerLayout.module.css'
import Logo from './logo';
import HeaderHashLink from './HeaderHashLink';
import HeaderScrollLink from './HeaderScrollLink';

import usePathname from './hook/usePathname';
import useShowHeader from './hook/useShowHeader';
import useRefresh from './hook/useRefresh';
import Hamburger from './hamburger';
import { useState, useEffect, useRef } from 'react';

export default function HeaderLayout() {
  useRefresh()
  const pathname = usePathname();
  const hamburgerRef = useRef(null);
  const [active, setActive] = useState(false);
  let hamburgerCheck

  useEffect(() => {
    if (hamburgerRef.current == null) {
      hamburgerRef.current = "hamburger-check"
    }
    // console.log("🚀 ~ file: headerLayout.jsx:25 ~ HeaderLayout ~ active:", active)
  }, [hamburgerRef, active]);

  const [showHeader, headerForceHide] = useShowHeader();

  function unCheck() {

    setActive(false)
    hamburgerCheck = document.querySelector(`#${hamburgerRef.current}`);
    hamburgerCheck.checked = false;
  }
  function toggleHamburger(e) {
    // console.log("Clicked, new value = " + e.target.checked);
    setActive(e.target.checked)
  }
  return (
    <>
      <header className={`${showHeader ? 'show' : 'hide'}`}>
        <Hamburger
          id={hamburgerRef.current}
          toggleHamburger={toggleHamburger}
          unCheck={unCheck}
        />
        {pathname !== undefined &&
          <div className={'navbar-wrapper'}>
            <Logo color={'gray'} />
            {
              <nav className={`${active ? 'active' : ''}`}>

                {pathname === '/' && (
                  <ul>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-about"
                        offset={0}
                        to='about'
                        name='about'
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-service"
                        offset={-10}
                        to='service'
                        name='service'
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-contactUs"
                        offset={-10}
                        to='contact'
                        name='contact'
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li
                      onClick={() => unCheck()}
                    >
                      <HeaderScrollLink
                        currentId="a-marketing"
                        offset={-10}
                        to='/marketing'
                        name='marketing'
                        disableScroll
                        callbackHandler={headerForceHide}
                      />
                    </li>
                  </ul>
                )}
                {(pathname === '/marketing' || pathname.startsWith('/content')) && (
                  <ul>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-about"
                        offset={0}
                        to='/'
                        name='about'
                        disableScroll
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-service"
                        offset={-10}
                        to='/'
                        name='service'
                        disableScroll
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li onClick={() => unCheck()}>
                      <HeaderScrollLink
                        currentId="a-contactUs"
                        offset={-10}
                        to='/'
                        name='contact'
                        disableScroll
                        callbackHandler={headerForceHide}
                      />
                    </li>
                    <li
                      onClick={() => unCheck()}
                    >
                      <HeaderScrollLink
                        currentId="a-marketing"
                        offset={-10}
                        to='/marketing'
                        name='marketing'
                        disableScroll
                        callbackHandler={headerForceHide}
                      />
                    </li>
                  </ul>
                )}
              </nav>
            }
          </div>
        }
      </header>
    </>
  );
}
