import { createSlice } from "@reduxjs/toolkit";


export const winSlice= createSlice({
   
    name:"winorloose",
    initialState:{
        value:{},
        formvalues:{},
        team:"",
        matches:[{SNo:"1",Match:"INDVSPAK",Team1:"IND",Team2:"PAK",format:"T20",Venue:"India,Hyderabad",Time:"11:12(IST)", starttime:"11:12",endtime:"11:27"},
        {SNo:"2",Match:"ENGVSAUS",Team1:"ENG",Team2:"AUS",format:"T20",Venue:"England,Oval",Time:"11:12(IST)",starttime:"11:12",endtime:"11:27"},
        {SNo:"3",Match:"SAVSWI",Team1:"SA",Team2:"WI",format:"T20",Venue:"SA,Bredasdorp",Time:"11:12(IST)",starttime:"11:12",endtime:"11:27"}]
        
    },
    reducers:{
        save:(state,action)=>{
            console.log(action.payload,"action.payload")
            state.value=action.payload
            console.log(state.value,"state.value")
        },
        teamselected:(state,action)=>{
            state.team=action.payload
        },
        setvalues:(state,action)=>{
            state.formvalues=action.payload

        }

    }
})
export const {save,teamselected,setvalues}=winSlice.actions
export default winSlice.reducer