import React, { Component } from 'react';
import './WeddingCardPlus.scss';

class WeddingCardPlus extends Component {

  state = {
    hallName:'',
    tag:[]
  }


  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      hallName:'',
      tag:[],
      imgUrl:''
    })
    
  }

 
  render() {
    return (
      <div className="card-plus">
        <form onSubmit={this.handleSubmit}>
          <p>Wedding Card Create : </p>
          <input 
            placeholder="hall name" 
            name="hallName"
            value={this.state.hallName} 
            onChange={this.handleChange} 
          />
          <input 
            placeholder="ex) tag1 tag2"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default WeddingCardPlus;