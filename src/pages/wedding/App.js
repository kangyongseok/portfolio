import React, { Component } from 'react';
import WeddingViewTemplate from './WeddingViewTemplate/WeddingViewTemplate';
import WeddingCardPlus from './WeddingCardPlus/WeddingCardPlus';
import './App.scss';




class App extends Component {

    id = 2; // 이미 리스트 2개가 있어서 2부터 시작

    state = {
        cards: [
            {
                id:0,
                imgUrl: 'http://www.ihall.co.kr/center/pic/banquet_ent_poto/10819047941445221760.jpg',
                hallName:'케이터틀',
                tag: ['신촌', '신촌역 6번출구', '2시간']
            },
            {
                id:1,
                imgUrl: 'https://partners.itnco.co.kr/filedown.php?mode=view&flag=store&ctg_cd=hall&idx=1596&file=1.jpg',
                hallName:'엠시티웨딩컨벤션',
                tag: ['일산', '정발산역', '궁중정식', '60분']
            }
        ]
    }


    handleCreate = (data) => {
        console.log(data);
        const { cards } = this.state;
        this.setState({
            cards:cards.concat({
                id: this.id++,
                imgUrl:data.imgUrl,
                hallName:data.hallName,
                tag: data.tag.split(' ')
            })
        })
    }

    render() {
        const { cards } = this.state;
        return (
            <div className="wrapper">
                <WeddingCardPlus 
                    onCreate={this.handleCreate} 
                />
                <WeddingViewTemplate cards={cards} />
            </div>
        );
    }
}

export default App;