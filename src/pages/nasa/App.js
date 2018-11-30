import React, { Component } from 'react';
import './base.scss';
import ViewerTemplate from './components/ViewerTemplate/index';
import SpaceNavigator from './components/SpaceNavigator/index';
import Viewer from './components/Viewer/index';
import moment from 'moment';

import * as api from './lib/api';

/* 
# yarn add axios : Promise 기반 웹 요청 클라이언트
# yarn add better-react-spinkit : 로딩시 보여줄 컴포넌트
# yarn add moment : 날짜관련 라이브러리
# yarn add include-media : 반응형 디자인
*/

class App extends Component {


    state = {
        loading: false,
        maxDate: null,
        date: null,
        url: null,
        mediaType: null
    }

    getAPOD = async (date) => {
        if (this.state.loading) return;

        // 로딩상태 시작
        this.setState({
            loading: true
        });


        try {
            const response = await api.getAPOD(date);
            // 비구조화 할당 + 새로운 이름
            const {date: retrievedDate, url, media_type: mediaType} = response.data;

            if(!this.state.maxDate) {
                // 만약에 maxDate 가 없으면 지금 받은 date 로 지정
                this.setState({
                    maxDate: retrievedDate
                })
            }

            // 전달받은 데이터 넣어주기
            this.setState({
                date: retrievedDate,
                mediaType,
                url
            })

        } catch (e) {
            console.log(e);
        }

        this.setState({
            loading: false
        });
        }
    

    handlePrev = () => {
        const { date } = this.state;
        const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
        console.log(prevDate);
        this.getAPOD(prevDate);
    }

    handleNext = () => {
        const  { date, maxDate } = this.state;
        if (date === maxDate) return;

        const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
        this.getAPOD(nextDate);
    }

    componentDidMount() {
        this.getAPOD();
    }

    render() {
        const { url, mediaType, loading } = this.state;
        const { handlePrev, handleNext } = this;
        return (
            <div className="nasa-wrapper">
                <ViewerTemplate 
                    spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext} />} 
                    viewer={<Viewer url={url} mediaType={mediaType} loading={loading} />}
                />
            </div>
        );
    }
}

export default App;