import { HashLink } from 'react-router-hash-link';
import styles from './css/headerLayout.module.css'

export default function HeaderHashLink({ className, to, offset }) {

  function scrollWidthOffset(el, offset) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'auto' });
  }

  return (
    <HashLink
      className={styles[className]}
      to={to}
      scroll={(el) => scrollWidthOffset(el, offset)}
    ></HashLink>
  );
}
