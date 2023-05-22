import React from 'react';
// import { Link } from 'react-router-dom';
import './css/card.css';

export default function Card({ id, imgSrc, imgAltText, tag, content, createDate }) {

  tag ||= '';
  content ||= '';
  createDate ||= '';
  return (
    <>
      <a
        className='card'
        href={`/content/${id}`}
      >
        <img className='card-img' src={imgSrc} alt={imgAltText} />
        <div className='card-content'>
          <span className='ellipsis'>
            {content}
          </span>
        </div>
        <div className='card-footer'>
          <div className='card-tag'>{tag}</div>
          <div className='card-create-date'>{createDate}</div>
        </div>
      </a>
    </>
  );
}
