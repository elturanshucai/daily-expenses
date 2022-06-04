import {createSlice} from "@reduxjs/toolkit"

export const dateSlice=createSlice({
    name: "expenses",
    initialState:{
        list: [],
        daily_list:[],
        listPage: false
    },

    reducers:{
        addList:(state, {payload})=>{
            let dailylist=JSON.parse(localStorage.getItem("dailylist"))
            if(dailylist){
                state.daily_list=dailylist
            }
            state.daily_list=[...state.daily_list, payload]
            localStorage.setItem("dailylist", JSON.stringify(state.daily_list))
            localStorage.setItem("date", payload.date)
        },
        resetList:(state)=>{
            state.daily_list=[]
            localStorage.removeItem("dailylist")
        },
        addDay: (state)=>{
            let myList=JSON.parse(localStorage.getItem("list"))
            if(myList){
                state.list=myList
                state.list.push(state.daily_list)
            }else{
                state.list=[state.daily_list]
            }
            localStorage.setItem("list", JSON.stringify(state.list))
            localStorage.removeItem("date")
        },
        setListPage:(state)=>{
            state.listPage= !state.listPage
        },
        deleteDay:(state, {payload})=>{
            let list=JSON.parse(localStorage.getItem("list"))
            list=list.filter((item,index)=>index!==payload)
            state.list=list
            localStorage.setItem("list",JSON.stringify(state.list))
        }
    }
})
export const {addList, addDay, resetList, setListPage, deleteDay} = dateSlice.actions
export default dateSlice.reducer