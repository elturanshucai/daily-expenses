import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDay } from "../../store/reducer/datereducer";
import './List.css'

function ListItem({item, index}){
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(deleteDay(index))
    }
    let toplam=item.reduce((acc, element)=>{
        return acc+(element.amount*element.price)
    }, 0)
    let noqte=String(toplam).indexOf('.')
    toplam=String(toplam).slice(0, noqte+3)
    
    const [display, setDisplay]=useState(false)
    return(
        <div className="listItem">
            <div className="listdate"><span onClick={()=>setDisplay(!display)}>{item[0].date}</span><span onClick={()=>setDisplay(!display)}>Toplam : {toplam} AZN</span>
            <button onClick={handleClick}>X</button>
            </div>
            {item.map(item1=>(
                <div className="innerList">
                    {
                        display ?
                        <>
                            <div>{item1.name}</div>
                            <div>Miqdar:  {item1.amount}</div>
                            <div>Qiymət:  {item1.price} AZN</div>
                        </>
                        :
                        <></>
                    }
                    
                </div>
            ))}
        </div>
    )
}
export default ListItem
