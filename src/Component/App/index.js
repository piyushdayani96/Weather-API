
// import logo from './logo.svg';
import './App.css';
import React from "react";



import CityInput from '../CityInput'
import CityWeather from '../CityWeather'
function App(){
  const [city,setCity]=React.useState("");
  const [cityWeather,setCityWeather]=React.useState({});
  const fetchCityWeather=()=>{
 
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84e157f6f2332b96d66fcac02cc6df22`
    )
    .then((res)=>res.json())
    .then((result)=>{
      console.log("result is",result);
     
     return setCityWeather(result);
      
    })
    // .catch((error)=>{
    //   console.log("error is",error);
    // });
  
  };
  return(
   
    <>
   <CityInput 
   city={city} 
   setCity={setCity} 
   fetchCityWeather={fetchCityWeather}/>
   <CityWeather cityWeather={cityWeather} />
  </>
  ); 
}

export default App;

// class App extends React.Component
// {
//   constructor(){
//     super();
//     this.state={
//       gameState:[
//         ["","",""],
//         ["","",""],
//         ["","",""]
//       ],
//       playerTurn : "X",
     
//       gameStatus:true,
//       winningconditions:[
//         [0,0,0,1,0,2],
//     [1,0,1,1,1,2],
//     [2,0,2,1,2,2],
//     [0,0,1,0,2,0],
//     [0,1,1,1,2,1],
//     [0,2,1,2,2,2],
//     [0,0,1,1,2,2],
//     [0,2,1,1,2,0],
//       ],
//       drawStatus:false,
      
//     };
//   }
 

//       //   [this.state.gameState[0][0],this.state.gameState[0][1],this.state.gameState[0][2]],
//       //   [this.state.gameState[1][0],this.state.gameState[1][1],this.state.gameState[1][2]],
//       //   [this.state.gameState[2][0],this.state.gameState[2][1],this.state.gameState[2][2]],
//       //   [this.state.gameState[0][1],this.state.gameState[1][0],this.state.gameState[2][0]],
//       //   [this.state.gameState[0][1],this.state.gameState[1][1],this.state.gameState[2][1]],
//       //   [this.state.gameState[0][2],this.state.gameState[1][2],this.state.gameState[2][2]],
//       //   [this.state.gameState[0][0],this.state.gameState[1][1],this.state.gameState[2][2]],
//       //   [this.state.gameState[0][2],this.state.gameState[1][1],this.state.gameState[2][0]],
//       // ];
//     resetGame=()=>{
//       this.setState({
//          gameState:[
//         ["","",""],
//         ["","",""],
//         ["","",""]
//       ],
//       playerTurn : "X",
     
//       gameStatus:true,
//       drawStatus:false,
//       })
//     }
//   handlePlayerClick=(rowIndex,colIndex)=>{
//     // this.gameState[rowIndex][colIndex]=playerTurn;
//     //Make a copy
//     if(this.state.gameStatus==true && this.state.gameState[rowIndex][colIndex]=="" && this.state.drawStatus==false)
//     {
//     const copiedGameState=[...this.state.gameState];
//     //Make Changes in it
//     copiedGameState[rowIndex][colIndex]=this.state.playerTurn;
//     //Assign copy as State value
//     this.setState({
//       gameState:copiedGameState,
//       playerTurn:this.state.playerTurn=="X"?"O":"X",
//     })
//     let winningconditions=[...this.state.winningconditions];
//     for(let i=0;i<winningconditions.length;i++)
//     {
//       let a=this.state.gameState[winningconditions[i][0]][winningconditions[i][1]];
//       let b=this.state.gameState[winningconditions[i][2]][winningconditions[i][3]];
//       let c=this.state.gameState[winningconditions[i][4]][winningconditions[i][5]];
//       if(a!="" && a==b && b==c)
//       {
      
//         this.setState({
         
//           playerTurn:a,
//            gameStatus:false,
//         })
//         break;
//       }
//     } 
//     let count=0;
//     for(let i=0;i<3;i++)
//     {
//       for(let j=0;j<3;j++)
//       {
//         if(this.state.gameState[i][j]=="")
//         {
//           count++;
//         }
//       }
//     }

//       if(count==0 )
//       { console.log("ABC");
//         this.setState(
//           {
          
//             drawStatus:true,
//             gameStatus:false,


//           }
//         )
//       }
    
//     }
//   };
//   render()
//   {     console.log(this.state.gameStatus)
//     return(
    
//     <div className="container">
//       <Header/>
//       <div id="board">
//         {this.state.gameState.map((row,rowIndex)=>(
//           <GridRow row={row} rowIndex={rowIndex}
//           handlePlayerClick={this.handlePlayerClick}
//           />
//     ))}
//       </div>
//       <Footer 
//       turn={this.state.playerTurn}
//       gameStatus={this.state.gameStatus}
//       resetGame={this.resetGame}
//       drawStatus={this.drawStatus}
//       />

//     </div>
//     );
//   }
// }

// export default App;










// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App(){
//   return(
//     <>
//     <Router>


//     <div style={{display:"flex",justifyContent:"Space-evenly"}}>
//     <Link to="/">
//       Home
//     </Link>
//     <Link to="/about">
//       About
//     </Link>
//   </div>

//       <Switch>

    
//           <Route path="/" exact>
//             <Home />
//           </Route>
//           <Route path="/about" exact>
//             <About />
//           </Route>
          

//       </Switch>

//     </Router>
  
//     </>
//   );
// }


//  export default App;



 
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
