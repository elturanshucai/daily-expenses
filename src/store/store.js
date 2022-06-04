import { configureStore } from "@reduxjs/toolkit";
import datereducer from "./reducer/datereducer";

const store=configureStore({
    reducer: {datereducer}
})

export default store