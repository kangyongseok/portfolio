import React from 'react';
import { FaInfoCircle } from "react-icons/fa";
import './Info.scss';

const Info = ({onClick, modalSet}) => {
    return (
        <>
            <FaInfoCircle onClick={onClick} />
            <div className={`modal-text ${modalSet ? 'modal-view' : ''}`}>
                NASA 에서 제공하는 1일 1우주 사진의 API 를 가져다가 화면에 뿌려주는 페이지 입니다.<br/>
                좌우 버튼 클릭시 날짜를 변경하여 이전의 사진이나 동영상을 볼 수 있습니다.<br/>
                로딩부분은 module 을 사용하였습니다.
            </div>
        </>
    );
};

export default Info;