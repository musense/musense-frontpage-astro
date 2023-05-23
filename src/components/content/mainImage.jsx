import React from "react";
// import "./css/contentBanner.css"

export default function MainImage({ imgSrc, imgAltText }) {
    return (
        <div className="top-banner-wrapper">
            <img className="top-banner" src={imgSrc} alt={imgAltText} />
            <div className="triangle-range_orange" />
        </div>
    )
}
