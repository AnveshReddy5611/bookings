import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "./data.json";

function Match() {
  const [indpak, setIndpak] = useState(Data);

  const[initial, setInitial]=useState(indpak[0]);
  const [index,setIndex]=useState()
  const[start,setStart]=useState(0)
  const[name,setName]=useState()
  
  
  const value=indpak.length
  
  const end=value
  // console.log(value,"i am value")
  // console.log(indpak[end-1].time,"I am end")

  var tempDate = new Date();
  var time = tempDate.getHours() + ":" + tempDate.getMinutes();

 if (indpak[0].timer >time){
  console.log("I am here")
  setName(indpak[0].score)
  console.log("Hello",name)
 }
  // for (let i =start; i<=end-1;i++){
  //   console.log(indpak[i].time,"I am indpak[i]")
  //    console.log((tempDate.getHours()+indpak[0].time),"I am time")
  //   if(indpak[0].timer>time){
  //     console.log(0)
  //     setIndex(0)
  //     break;
  //   }
  //   else if (indpak[i].timer===time){
  //     console.log("I am compared")
  //     setIndex(i)
  //     // setStart(i)
  //     console.log(i,"I am Index")
  //     break;
  //   }
  //   else if (indpak[end-1].timer<time){
  //     setIndex(end-1)
  //   }
  // }

  // } data of indpak){
  //   if(data.time===time){
  //       const ind=Data.indexOf(data)
  //       console.log(ind, "I am ind")
  //       setSome(data)
  //       console.log(some,"In am some");
  //       break;

  //   }
    
  
 
  // console.log(vari+5, "I am time");
  // console.log(indpak, "i am ind pak ");
  // function Matchone(){
  //   //console.log(indpak[0].time)
  //   const [some, setSome] = useState();
  //   const [DATA,SETDATA]=useState();
  //   const[prev,setPrev]=useState(indpak[0].minutes)
  //   if(indpak[0].time >= tempDate.getHours() && indpak[0].minutes>tempDate.getMinutes())
  //   return(
  //     <div key={index}>Match Not started yet
  //     <h1>{indpak[0].score}</h1></div>
  //   );

  //   if(indpak[end-1].time <= tempDate.getHours() && indpak[end-1].minutes<tempDate.getMinutes())
  //     return(
  //       <div key={index}>Match Finished</div>
  //     );
  //     return(
  //       <div>
  //         {indpak.map((Data, index) => {
          
  //           if((Data.time === tempDate.getHours() && (Data.minutes===tempDate.getMinutes()))){       
  //           return(
  //             <div key={index}>
  //               <h2>Title : {indpak[0].title}</h2>
  //               <h2>Time : {Data.time}</h2>
  //               <h2>Team : {Data.team}</h2>
  //             </div>
  //           )}
  //         }
  //         )}
      
  //     </div>
  //     )
  // }
  return(
    <div>
      
      
      {/* <Matchone/> */}
      <h2>out {indpak[0].score}</h2>
   </div>
  )
  // return (
  //   <div>
  //     <h1>Data</h1>
  //     {/* <h1>{indpak[index].id}</h1> */}
  //     {/* {indpak.map((Data, index) => (
  //       <div key={index}>
  //         <h1>{Data.time === time ? Data.time : ""}</h1>
  //       </div>
  //     ))} */}
  //   </div>
  // );
}

export default Match;
