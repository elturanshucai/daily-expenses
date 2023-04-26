import React from "react";
import {useState, useEffect} from "react"
import ListItem from "./ListItem";
import './List.css';
import { useSelector } from "react-redux";

function List (){
    const stateList=useSelector(state=>state.datereducer.list)
    const [localList, setLocalList] = useState([])
    
    useEffect(()=>{
        let list = JSON.parse(localStorage?.getItem("list"))
        if(list!==null){
            setLocalList(list)
        }
    }, [stateList])
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
                <>
                    {localList.length>0 && localList.map((list,index)=>(
                        <ListItem key={index} item={list} index={index} />
                    ))}
                </>
            }

            
        </div>
    )
}
export default List
