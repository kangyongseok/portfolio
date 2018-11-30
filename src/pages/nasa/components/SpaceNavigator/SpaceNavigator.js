import React from 'react';
import './SpaceNavigator.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SpaceNavigator = ({ onPrev, onNext }) => {
    return (
        <div className="space-navigator">
            <div className="left end">
                <div className="circle" onClick={onPrev}>
                    <FaAngleLeft />
                </div>
            </div>
            <div className="right end">
                <div className="circle" onClick={onNext}>
                    <FaAngleRight />
                </div>
            </div>
        </div>
    );
};

export default SpaceNavigator;