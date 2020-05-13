
import React, { Component } from 'react';
import history from './../history';
import './Home.css';

var validpath = false;

export default class MainActivity extends Component {
  
  number=1;

  goUp = (cur_id) => {
    this.number++;
      if(cur_id==3){
        document.getElementById("3").style.backgroundColor ="#00ff00";
        document.getElementById("4").style.backgroundColor ="#ff0000";
      }
      
      if(cur_id==4){
        document.getElementById("4").style.backgroundColor ="#00ff00";
        document.getElementById("5").style.backgroundColor ="#ff0000";
      }
      
      if(cur_id==6){
        document.getElementById("6").style.backgroundColor ="#00ff00";
        document.getElementById("7").style.backgroundColor ="#ff0000";
      }
      if(cur_id==8){
        document.getElementById("8").style.backgroundColor ="#00ff00";
        document.getElementById("9").style.backgroundColor ="#ff0000";
      }
      else{
        console.log("Invalid");
      }
      
    }
  
  goRight = (cur_id) => {
    this.number++;
    if(cur_id==1){
      document.getElementById("1").style.backgroundColor ="#00ff00";
      document.getElementById("2").style.backgroundColor ="#ff0000";
    }
    if(cur_id==2){
      document.getElementById("2").style.backgroundColor ="#00ff00";
      document.getElementById("3").style.backgroundColor ="#ff0000";
    }
    if(cur_id==5){
      document.getElementById("5").style.backgroundColor ="#00ff00";
      document.getElementById("6").style.backgroundColor ="#ff0000";
    }
    if(cur_id==7){
      document.getElementById("7").style.backgroundColor ="#00ff00";
      document.getElementById("8").style.backgroundColor ="#ff0000";
    }
    if(cur_id==9){
      document.getElementById("9").style.backgroundColor ="#00ff00";
      document.getElementById("10").style.backgroundColor ="#ff0000";
      alert("You win!");
    }
    else{
      console.log("Invalid");
    }
    
  }

render() {
  return (
    <body>
    <div className="App">
      <div className="pictures" >
      <h2 style={{ color: '#00ffff', fontSize: "50px"}}> <em> ILHAM'S MAZE GAME </em> </h2>
    </div>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button id="9" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button id="10" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      </header>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button id="7" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button id="8" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      </header>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button id="5" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button id="6" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      </header>

      <header className="directionspace">
      <button className="directionbuttons" alt="directionbuttons" onClick={() => this.goUp(this.number)} > UP </button>
      </header>

      <header className="pictures">
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button id="4" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      </header>

      <header className="directionspace">
      <button className="directionbuttons" > LEFT </button>
      <button className="directionbuttons" > DOWN </button>
      <button className="directionbuttons" alt="directionbuttons" onClick={() => this.goRight(this.number)} > RIGHT </button>
      </header>

      <header className="pictures">
      <button><button style={{backgroundColor: "#ff0000"}} id="1" className="pathblocks" alt="pathblocks" /></button>
      <button><button id="2" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button id="3" validpath={true} className="pathblocks" alt="pathblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      <button><button className="solidblocks" alt="solidblocks" /></button>
      </header>
     
       </div>

       </body>
  );
  
}



}
