import React from 'react';
import './Viewer.scss';
import { ChasingDots } from 'better-react-spinkit';

// 이미지 또는 동영상을 보여줄 컴포넌트

const Viewer = ({mediaType, url, loading}) => {

    if(loading) {
        return (
            <div className="viewer">
                <ChasingDots color="white" size={60} />
            </div>
        )
    }

    if(!url) return null;

    return (
        <div className="viewer">
            {
                mediaType === 'image' ? 
                (<img onClick={() => window.open(url)} src={url} alt="space" />) :
                (<iframe title="space-video" src={url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>)
            }
        </div>
    );
};

export default Viewer;