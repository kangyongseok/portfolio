import React from 'react';
import './WeddingViewTemplate.scss';

const WeddingViewTemplate = ({ cards }) => {
    return (
        <div className="card-wrap">
            {cards.map(card => <WeddingCard key={card.id} name={card.hallName} src={card.imgUrl} tag={card.tag} />)}
        </div>
    );
};


const WeddingCard = ({ name, src, tag }) => {
    return (
        <div className="card" >
            <img src={src} alt={name} />
            <div className="card-text">
                <h3>{name}</h3>
                <div className="card-tag">
                    {tag.map((tag, index) => <span key={index}>{tag}</span>)}
                </div>
            </div>
        </div>
    )
}

export default WeddingViewTemplate;