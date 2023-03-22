import { useEffect, useRef } from 'react';

export default function HeaderScrollLink({ currentId, className ,offset, to }) {
  const targetRef = useRef(null)
  const scrollHandler = () => {
    window.scrollTo({
      top: targetRef.current + offset,
      behavior: 'smooth',
    })
  };
  useEffect(() => {
    let btn;

    if (targetRef.current === null) {
      const target = document.getElementById(to)
      const { top } = target.getBoundingClientRect()
      targetRef.current = top
      btn = document.getElementById(currentId);
      btn.addEventListener('click', scrollHandler)
    }

    return () => {
      btn.removeEventListener('click', scrollHandler)
    }
  }, [targetRef]);

  return (
    <button
      id={currentId}
      className={className}
      title={to}
    >
    </button>
  );
}
