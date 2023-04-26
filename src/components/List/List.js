import React from "react";
import ListItem from "./ListItem";
import './List.css';
import { useSelector } from "react-redux";

function List (){
    const stateList=useSelector(state=>state.datereducer.list)
    const localList=JSON.parse(localStorage?.getItem("list"))
    return(
        <div className="list">
            {
                stateList.length>0 ?
                <>
                    {stateList.map((list,index)=>(
                        <ListItem key={index} item={list} index={index} />
                    ))}
                </>
                :
                {
                    localList ? <>
                    {localList.map((list,index)=>(
                        <ListItem key={index} item={list} index={index} />
                    ))}
                    </>:null
                }
            }

            
        </div>
    )
}
export default List
