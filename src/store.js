import {configureStore} from "@reduxjs/toolkit"
import winorloosereducer from "./winslice"
export default configureStore({
    reducer:{
        winorloose:winorloosereducer,
    },
})