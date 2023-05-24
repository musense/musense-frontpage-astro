import React, { useCallback, useEffect, useRef } from 'react'
import HeaderScrollLink from './HeaderScrollLink';

export default function NavWrapper({ active, pathname, unCheck, headerForceHide }) {

    const navRef = useRef(null);
  
    const navHandler = (e) => {
      console.log(e.type)
      e.preventDefault()
    }
    const liHandler = (e) => {
      console.log(e);
      e.stopPropagation()
    }
    useEffect(() => {
      if (navRef.current === null) {
        return
      } else {
        navRef.current.addEventListener("touchstart", navHandler)
        navRef.current.addEventListener("wheel", navHandler)
        navRef.current.addEventListener("scroll", navHandler)
        navRef.current.addEventListener("touchmove", navHandler)
        const liList = navRef.current.querySelectorAll("li")
        liList.forEach(li => {
          li.addEventListener("touchstart", liHandler)
        })
      }
    }, [navRef.current]);
  
    const callbackHandler = useCallback((e) => {
      headerForceHide()
      unCheck()
    }, [unCheck, headerForceHide])
  
    return <nav ref={navRef} className={`${active ? 'active' : ''}`}>
      {pathname === '/' && (
        <ul>
          <li>
            <HeaderScrollLink
              currentId="a-about"
              offset={0}
              to='about'
              name='about'
              callbackHandler={callbackHandler} />
          </li>
          <li>
            <HeaderScrollLink
              currentId="a-service"
              offset={-10}
              to='service'
              name='service'
              callbackHandler={callbackHandler} />
          </li>
          <li>
            <HeaderScrollLink
              currentId="a-contactUs"
              offset={-10}
              to='contact'
              name='contact'
              callbackHandler={callbackHandler} />
          </li>
          <li
  
          >
            <HeaderScrollLink
              currentId="a-marketing"
              offset={-10}
              to='/marketing'
              name='marketing'
              disableScroll
              callbackHandler={callbackHandler} />
          </li>
        </ul>
      )}
      {(pathname === '/marketing' || pathname.startsWith('/content')) && (
        <ul>
          <li>
            <HeaderScrollLink
              currentId="a-about"
              offset={0}
              to='/'
              name='about'
              disableScroll
              callbackHandler={callbackHandler} />
          </li>
          <li>
            <HeaderScrollLink
              currentId="a-service"
              offset={-10}
              to='/'
              name='service'
              disableScroll
              callbackHandler={callbackHandler} />
          </li>
          <li>
            <HeaderScrollLink
              currentId="a-contactUs"
              offset={-10}
              to='/'
              name='contact'
              disableScroll
              callbackHandler={callbackHandler} />
          </li>
          <li
  
          >
            <HeaderScrollLink
              currentId="a-marketing"
              offset={-10}
              to='/marketing'
              name='marketing'
              disableScroll
              callbackHandler={callbackHandler} />
          </li>
        </ul>
      )}
    </nav>;
  }
