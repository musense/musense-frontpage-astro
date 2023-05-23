import React from 'react'
import Card from './card';

export default function CardWrapper({ contents }) {
    return <div className='card-wrapper'>
        {contents && contents.map((content, index) => {
            return (
                <Card
                    key={index}
                    tag={content.tag}
                    imgSrc={content.img.src}
                    imgAltText={content.img.altText}
                    id={index}
                    content={content.content}
                    createDate={content.createDate} />
            );
        })}
    </div>;
}