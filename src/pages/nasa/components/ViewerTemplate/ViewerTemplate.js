import React from 'react';
import './ViewerTemplate.scss';

// 템플릿컴포넌트

const ViewerTemplate = ({ viewer, spaceNavigator }) => {
    return (
        <div className="viewer-template">
            <header>
                Astronomy Picture of the Day
            </header>
            <div className="viewer-wrapper">
                {viewer}
                <div className="space-navigator-wrapper">
                    {spaceNavigator}
                </div>
            </div>
        </div>
    );
};

export default ViewerTemplate;