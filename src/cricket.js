import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./cricket.css"


function Cricket() {
  const navigate=useNavigate()
  const gotomatch=()=>{
    window.location.href='/indvspak'
    console.log("Anvesh")
  }
  return (
    <div><h1>Select a Match</h1>
    
    <table class="table table-hover table-dark" id="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Fixture</th>      
      <th scope="col">Format</th>
      <th scope="col">Venue</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    <tr onClick={gotomatch}>
      <th scope="row">1</th>
      <td>IND VS PAK</td>
      <td>T20</td>
      <td>India,Hyderabad</td>
      <td> 07:00 PM(IST)</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>AUS VS ENG</td>
      <td>Test</td>
      <td>England,Oval</td>
      <td> 09:00 AM(IST)</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>WI VS SA</td>
      <td>ODI</td>
      <td>SA,Bredasdorp</td>
      <td> 03:00 PM(IST)</td>
    </tr>
  </tbody>
</table>
    
    </div>
  )
}

export default Cricket