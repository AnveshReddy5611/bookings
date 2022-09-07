for (let i =start; i<=end-1;i++){
    console.log(indpak[i].time,"I am indpak[i]")
     console.log((tempDate.getHours()+indpak[0].time),"I am time")
    if(indpak[0].timer>time){
      console.log(0)
      setIndex(0)
      break;
    }
    
    else if (indpak[end-1].timer<time){
      setIndex(end-1)
      break;
    }
    else if (indpak[i].timer===time){
      console.log("I am compared")
      setIndex(i)
       setStart(i+1)
      console.log(i,"I am Index")
      break;
    }
  }