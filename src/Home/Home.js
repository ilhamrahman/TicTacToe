
import React, { Component } from 'react';
import history from './../history';
import './Home.css';
import x from './X.png';
import o from './O.png';

export default class MainActivity extends Component {
  
  number=1;

  changeBackground = (cur_id) => {
    if(this.number%2==1){
      document.getElementById(cur_id).style.backgroundImage = "url('X.png')";
    }
    if(this.number%2==0){
      document.getElementById(cur_id).style.backgroundImage = o;
    }
    this.number++;
      
    }

render() {
  return (
    <body>
    <div className="App">
      <div className="pictures" >
      <h2 style={{ color: '#00ffff', fontSize: "50px"}}> <em> ILHAM'S TIC-TAC-TOE </em> </h2>
    </div>

      <header className="pictures">
      <button><button id="1" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("1")}/></button>
      <button><button id="2" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("2")}/></button>
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      </header>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      </header>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      <button><button className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground}/></button>
      </header>
     
       </div>

       </body>
  );
  
}



}
