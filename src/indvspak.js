import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Data from "./data.json";
import "./indpak.css";
import {US} from "country-flag-icons/react/3x2"

function Match() {
  
  const valueone = useSelector((state) => state.winorloose.value);
  const [Match,setMatch]=useState(valueone.Match)  
  // console.log(Match, "match")
  const team = useSelector((state) => state.winorloose.team);
  const formvalues = useSelector((state) => state.winorloose.formvalues);
 // console.log(Data.INDVSPAK[1].minutes,"Data.INDVSPAK[0].minutes")
  const [indpak, setIndpak] = useState(Data);
  const [result, setResult] = useState();
  const [finalresult,setfinalResult]=useState()
  const [start, setStart] = useState("Match yet to start");
  const [name, setName] = useState(0);

  const value = indpak[Match].length;
  const end = value;
  const[teamoneu,setTeamone]=useState(indpak[Match][end-1].teamone)
  const[teamtwou,setTeamtwo]=useState(indpak[Match][0].teamone)
  console.log(typeof(teamoneu), "teamone");
  //console.log(indpak[Match], "len")

  useEffect(() => {
    var timer = setInterval(() => {
      // const value = indpak.Match.length;
      
      const end = value;
      const half = value / 2;
      console.log(half, "I am half");
      const pak = indpak[Match][half - 1].score;
      const ind = indpak[Match][end - 1].scoreind;
      var tempDate = new Date();
      var time = tempDate.getHours() + ":" + tempDate.getMinutes();
      if (indpak[Match][end - 1].timer < time) {
        //console.log("I came here");
        setName(end - 1);
        setStart("");
        if (ind > pak) {
          setResult(teamoneu+ " Won the Match");
          if (teamoneu===team){
            setfinalResult("YOU WON THE MATCH")
          }
          else{
            setfinalResult("YOU LOST THE MATCH")
          }
         
        } else if (ind < pak) {
          setResult(teamtwou+" Won the Match");
          if (teamtwou===team){
            setfinalResult("YOU WON THE MATCH")
          }
          else{
            setfinalResult("YOU LOST THE MATCH")
          }
         
        } else if (ind === pak) {
          setResult("Match Drawn");
          setfinalResult("YOUR MATCH DRAWN")
        }
        
        clearInterval(timer);
      }
      {
        indpak[Match].map((Data, index) => {
          if (
            Data.time === tempDate.getHours() &&
            Data.minutes === tempDate.getMinutes()
          ) {
            setName(index);
            setStart("In match");
            setfinalResult("WAIT FOR THE RESULT")
            if (index === end - 1) {
              setName(index);
              setStart("");
              if (ind > pak) {
                setResult(teamoneu+ " Won the Match");
                if (teamoneu===team){
                  setfinalResult("YOU WON THE MATCH")
                }
                else{
                  setfinalResult("YOU LOST THE MATCH")
                }
              } else if (ind < pak) {
                setResult(teamtwou+" Won the Match");
                if (teamoneu===team){
                  setfinalResult("YOU WON THE MATCH")
                }
                else{
                  setfinalResult("YOU LOST THE MATCH")
                }
              } else if (ind === pak) {
                setResult("Match Drawn");
                setfinalResult("YOUR MATCH DRAWN")
              }
              clearInterval(timer);
            }
          }
        });
      }
    }, 5000);
  }, []);

  return (
    <div>
        <h1>{start}</h1>
      <div className="main">
    

        <h3 className="head">
          Cricket T20 World Cup 2022 <span className="right day">...</span>
        </h3>
        <p className="target">
          <u>Ind won the toss and choose to Bowl</u>
        </p>
        <p className="target">{indpak[Match][name].team}</p>

        <table className="table">
          <tbody>
            <tr>
              <td>
                <img
                  className="flag"
                  src="  https://i.imgur.com/ZxbFH9r.png"
                  alt=""
                />
                <US title="unitedstates"/>    
                &emsp;<span>{indpak[Match][0].teamone}</span>
                <br />
                <br />
                <p className="score">
                  {indpak[Match][name].score}/{indpak[Match][name].wickets}
                </p>
                <p className="overs">({indpak[Match][name].id}/6)</p>
              </td>
              <td className="right1">
                <span>{indpak[Match][end-1].teamone}</span>&emsp;
                <img
                  className="flag"
                  src="https://i.imgur.com/717RRSi.png"
                  alt=""
                />
                <br />
                <br />
                <p className="score pak">
                  {indpak[Match][name].scoreind}/{indpak[Match][name].wicketsind}
                </p>
                <p className="overs pak">({indpak[Match][name].overs}/6)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <p className="res">{result}</p>
          <p className="match">T20 1 of 6</p>      
        </center>
        <p>UserDetails: {formvalues.name}, {formvalues.phone}</p>
        <p>Team You Selected: {team}</p>
        <p>{finalresult}</p>
      </div>
    </div>
  );
}

export default Match;
