
import React, { Component } from 'react';
import './Home.css';

export default class MainActivity extends Component {
  
  number=1;
  button1;
  button2;
  button3;
  button4;
  button5;
  button6;
  button7;
  button8;
  button9;

  changeBackground = (cur_id) => {
    if(this.number%2==1){
      document.getElementById(cur_id).textContent = "X";
      this.setX(cur_id);
      this.decideWinner();
    }
    if(this.number%2==0){
      document.getElementById(cur_id).textContent = "O";
      this.setO(cur_id);
      this.decideWinner();
    }
    this.number++;
      
  }

  setX = (cur_id) => {
    if(cur_id=="1"){
      this.button1 = "X";
    }
    if(cur_id=="2"){
      this.button2 = "X";
    }
    if(cur_id=="3"){
      this.button3 = "X";
    }
    if(cur_id=="4"){
      this.button4 = "X";
    }
    if(cur_id=="5"){
      this.button5 = "X";
    }
    if(cur_id=="6"){
      this.button6 = "X";
    }
    if(cur_id=="7"){
      this.button7 = "X";
    }
    if(cur_id=="8"){
      this.button8 = "X";
    }
    if(cur_id=="9"){
      this.button9 = "X";
    }
  }

  setO = (cur_id) => {
    if(cur_id=="1"){
      this.button1 = "O";
    }
    if(cur_id=="2"){
      this.button2 = "O";
    }
    if(cur_id=="3"){
      this.button3 = "O";
    }
    if(cur_id=="4"){
      this.button4 = "O";
    }
    if(cur_id=="5"){
      this.button5 = "O";
    }
    if(cur_id=="6"){
      this.button6 = "O";
    }
    if(cur_id=="7"){
      this.button7 = "O";
    }
    if(cur_id=="8"){
      this.button8 = "O";
    }
    if(cur_id=="9"){
      this.button9 = "O";
    }
  }

  decideWinner = () => {
    if(this.button1=="X" && this.button2=="X" && this.button3=="X"){
      alert("X wins!");
    }
    else if(this.button1=="X" && this.button4=="X" && this.button7=="X"){
      alert("X wins!");
    }
    else if(this.button1=="X" && this.button5=="X" && this.button9=="X"){
      alert("X wins!");
    }
    else if(this.button2=="X" && this.button5=="X" && this.button8=="X"){
      alert("X wins!");
    }
    else if(this.button3=="X" && this.button6=="X" && this.button9=="X"){
      alert("X wins!");
    }
    else if(this.button3=="X" && this.button5=="X" && this.button7=="X"){
      alert("X wins!");
    }
    else if(this.button4=="X" && this.button5=="X" && this.button6=="X"){
      alert("X wins!");
    }
    else if(this.button7=="X" && this.button8=="X" && this.button9=="X"){
      alert("X wins!");
    }
    else if(this.button1=="O" && this.button2=="O" && this.button3=="O"){
      alert("O wins!");
    }
    else if(this.button1=="O" && this.button4=="O" && this.button7=="O"){
      alert("O wins!");
    }
    else if(this.button1=="O" && this.button5=="O" && this.button9=="O"){
      alert("O wins!");
    }
    else if(this.button2=="O" && this.button5=="O" && this.button8=="O"){
      alert("O wins!");
    }
    else if(this.button3=="O" && this.button6=="O" && this.button9=="O"){
      alert("O wins!");
    }
    else if(this.button3=="O" && this.button5=="O" && this.button7=="O"){
      alert("O wins!");
    }
    else if(this.button4=="O" && this.button5=="O" && this.button6=="O"){
      alert("O wins!");
    }
    else if(this.button7=="O" && this.button8=="O" && this.button9=="O"){
      alert("O wins!");
    }
    else{
      if(this.number==9){
        alert("It's a Draw!");
      }
    }
  }

render() {
  return (
    <body>
    <div className="App">
      <div className="pictures" >
      <h2 style={{ color: '#00ffff', fontSize: "50px"}}> <em> ILHAM'S TIC-TAC-TOE </em> </h2>
    </div>

      <header className="pictures">
      <button><button style={{fontSize:"50px"}} id="1" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("1")}/></button>
      <button><button style={{fontSize:"50px"}} id="2" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("2")}/></button>
      <button><button style={{fontSize:"50px"}} id="3" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("3")}/></button>
      </header>

      <header className="pictures">
      <button><button style={{fontSize:"50px"}} id="4" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("4")}/></button>
      <button><button style={{fontSize:"50px"}} id="5" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("5")}/></button>
      <button><button style={{fontSize:"50px"}} id="6" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("6")}/></button>
      </header>

      <header className="pictures">
      <button><button style={{fontSize:"50px"}} id="7" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("7")}/></button>
      <button><button style={{fontSize:"50px"}} id="8" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("8")}/></button>
      <button><button style={{fontSize:"50px"}} id="9" className="solidblocks" alt="solidblocks" onClick={() => this.changeBackground("9")}/></button>
      </header>
     
       </div>

       </body>
  );
  
}



}
