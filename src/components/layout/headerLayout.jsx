import styles from './css/headerLayout.module.css'
import Logo from './logo';
import HeaderHashLink from './HeaderHashLink';
import HeaderScrollLink from './HeaderScrollLink';

import usePathname from './usePathname';
import useShowHeader from './useShowHeader';
import useRefresh from './useRefresh';

export default function HeaderLayout() {
  useRefresh()
  const pathname = usePathname();
  const showHeader = useShowHeader();

  return (
    <header className={`${showHeader ? styles['show'] : styles['hide']}`}>
      {pathname !== undefined &&
        <div className={styles['navbar-wrapper']}>
          <Logo color={'gray'} />
          {
            <nav className={styles['navbar']}>

              {pathname === '/' && (
                <ul>
                  <li>
                    <HeaderScrollLink
                      currentId="a-about"
                      offset={0}
                      className={`${styles['navBtn']} ${styles['about']}`}
                      to='about'
                    />
                  </li>

                  <li>
                    <HeaderScrollLink
                      currentId="a-service"
                      offset={-10}
                      className={`${styles['navBtn']} ${styles['service']}`}
                      to='service'
                    />
                  </li>

                  <li>
                    <HeaderScrollLink
                      currentId="a-contactUs"
                      offset={-50}
                      className={`${styles['navBtn']} ${styles['contactUs']}`}
                      to='contact'
                    />
                  </li>
                  <li>
                    <a
                      className={`${styles['navBtn']} ${styles['marketing']}`}
                      href='marketing'
                    >marketing</a>
                  </li>
                </ul>
              )}
              {(pathname === '/marketing' || pathname.startsWith('/content')) && (
                <ul>
                  <li>
                    <HeaderHashLink
                      className={`${styles['navBtn']} ${styles['about']}`}
                      to='about'
                    />
                  </li>

                  <li>
                    <HeaderHashLink
                      className={`${styles['navBtn']} ${styles['service']}`}
                      to='service'
                    />
                  </li>

                  <li>
                    <HeaderHashLink
                      className={`${styles['navBtn']} ${styles['contactUs']}`}
                      to='contact'
                    />
                  </li>
                  <li>
                    <a
                      className={`${styles['navBtn']} ${styles['marketing']}`}
                      href='marketing'
                    >marketing</a>
                  </li>
                </ul>
              )}
              {/* {
            <ul>
              <li>
                <a
                  offset={-0}
                  className={`${styles['navBtn']} ${styles['about']}`}
                  href='/#about-us'
                >about-us</a>
              </li>

              <li>
                <a
                  offset={-30}
                  className={`${styles['navBtn']} ${styles['service']}`}
                  to='service'
                >service</a>
              </li>

              <li>
                <a
                  offset={-100}
                  className={`${styles['navBtn']} ${styles['contactUs']}`}
                  href='/#contact'
                >contactUs</a>
              </li>
              <li>
                <a
                  className={`${styles['navBtn']} ${styles['marketing']}`}
                  href='marketing'
                >marketing</a>
              </li>
            </ul>
          } */}
            </nav>
          }
        </div>
      }
    </header>
  );
}
