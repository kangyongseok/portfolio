import React, { Component } from 'react';
import WeddingViewTemplate from './WeddingViewTemplate/WeddingViewTemplate';
import WeddingCardPlus from './WeddingCardPlus/WeddingCardPlus';
import './App.scss';



class App extends Component {

    state = {
        card: [
            {
                id:0, 
                name:'케이터틀', 
                img:'http://www.ihall.co.kr/center/pic/banquet_ent_poto/10819047941445221760.jpg',
                tag: ['신촌', '신촌역 6번출구', '단독웨딩', '2시간'],
            },
            {
                id:1, 
                name:'보타닉파크', 
                img:'https://post-phinf.pstatic.net/MjAxNzExMjBfMjU1/MDAxNTExMTcxNjM1Mjc4.Q8y2dzHG1wt7tBgfrNpX8oT2t5nwJzrAlgzMHjZvUV8g.kJBADHMB5KEE3fuESC456tVd2zbE0PjMNyJn_mZBhuMg.JPEG/5._%EB%B3%B4%ED%83%80%EB%8B%89%ED%8C%8C%ED%81%AC%EC%9B%A8%EB%94%A9_%EC%98%A4%ED%82%A4%EB%93%9C%ED%99%80.jpg?type=w1200',
                tag: ['강서구', '마곡나루', '지하철과연결', '90q분', '오키드홀', '카라홀', '200여가지 뷔페'],
            },
            {
                id:2, 
                name:'엠시티웨딩컨벤션', 
                img:'https://partners.itnco.co.kr/filedown.php?mode=view&flag=store&ctg_cd=hall&idx=1596&file=1.jpg',
                tag: ['일산', '정발산역', '오페라웨딩홀', '궁중정식', '단독홀'],
            },
            {
                id:3, 
                name:'그랜드컨벤션', 
                img:'http://www.ihall.co.kr/center/pic/banquet_ent_poto/13182982751426767039.jpg',
                tag: ['당산', '당산역 13번출구', '그랜드홀', '리젠시홀'],
            }
        ]
    }


    render() {
        const { card } = this.state;
        return (
            <div className="wrapper">
                {card.map(card => <WeddingViewTemplate card={card} key={card.id} /> )}
                <WeddingCardPlus />
            </div>
        );
    }
}

export default App;