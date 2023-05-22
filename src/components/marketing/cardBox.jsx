import React from 'react';
import './css/cardBox.css';
import Card from './card';
import HotContent from './hotContent';
import { upperUpperArray, lowerUpperArray } from '@assets/mockData';

export default function CardBox() {
  
  return (
    <>
      <div className='card-wrapper'>
        {upperUpperArray &&
          upperUpperArray.map((content, index) => {
            return (
              <Card
                key={index}
                tag={content.tag}
                imgSrc={content.img.src}
                imgAltText={content.img.altText}
                id={index}
                content={content.content}
                createDate={content.createDate}
              />
            );
          })}
      </div>
      <HotContent />
      <div className='card-wrapper'>
        {lowerUpperArray &&
          lowerUpperArray.map((content, index) => {
            return (
              <Card
                key={index}
                tag={content.tag}
                imgSrc={content.img.src}
                imgAltText={content.img.altText}
                id={index}
                content={content.content}
                createDate={content.createDate}
              />
            );
          })}
      </div>
    </>
  );
}
