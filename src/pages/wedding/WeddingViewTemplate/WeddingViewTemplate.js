import React from 'react';
import './WeddingViewTemplate.scss';

const WeddingViewTemplate = ({ card }) => {
    return (
        <>
        <div className="card-wrap">
            <WeddingViewImage img={card.img} alt={card.name} />
            <WeddingViewContents name={card.name} tag={card.tag.map((tag, index) => <span key={index}>{tag}</span>)} />
        </div>
        </>
    );
};

const WeddingViewImage = ({ img, alt }) => {
    return (
        <>
            <img src={img} alt={alt} />
        </>
    )
}

const WeddingViewContents = ({ name, tag }) => {
    return (
        <>
            <div className="card-contents">
                <h3 className="card-name">{name}</h3>
                <div className="card-tags">
                    {tag}
                </div>
            </div>
        </>
    )
}


export default WeddingViewTemplate;