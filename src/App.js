// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code >src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
 class App extends Component {

  render() {
   const state ={
      name : 'Lakshmiprasad M',
      occupation :'Software Engineer',
      employeeNo :'E00227',
      email :'prasad.malakala@gmail.com',
      mobileNo:'9494892021'
   }
     const clckHAndler = ()=>{
        document.querySelector(".pCard_card").classList.toggle("pCard_on");
        document.querySelector(".pCard_add i").classList.toggle("fa-minus");
      }
    return (
      <div class="pCard_card">
   <div class="pCard_up">
      <div class="pCard_text">
         <h2>{state.name}</h2>
         <p>{state.occupation} </p>
      </div>
      <div class="pCard_add" onClick={clckHAndler}><i class="fa fa-plus"></i></div>
   </div>
   <div class="pCard_down">
      <div>
         <p>Employee No</p>
         <p>{state.employeeNo}</p>
      </div>
      <div>
         <p>Email</p>
         <p>{state.email}</p>
      </div>
      <div>
         <p>Mobile No</p>
         <p>{state.mobileNo}</p>
      </div>
   </div>
   <div class="pCard_back">
      {/* <p>Click Hear to Follow Me</p> */}
      <a href="https://www.facebook.com/"><i class="fa fa-facebook fa-2x fa-fw"></i></a>
      <a href="https://www.facebook.com/"><i class="fa fa-linkedin fa-2x fa-fw"></i></a>
      <a href="https://www.skype.com/en/"><i class="fa fa-skype fa-2x fa-fw"></i></a> <br/>
      <a href="https://www.instagram.com/accounts/login/"><i class="fa fa-instagram fa-2x fa-fw"></i></a>
      <p>Follow Me!</p>
   </div>
   <div>
   </div>
</div>
    )
  }
}
export default App;