import React from 'react'
import './Main.css'
import { useState } from "react"
import {useDispatch} from "react-redux"
import { addList, addDay, resetList } from '../../store/reducer/datereducer'
import { FaPlus } from 'react-icons/fa'

function Main(){
    const date=localStorage.getItem("date")
    const [product,setProduct]=useState({date:'',name:'',amount:'', price:''})
    const [disableInput, setDisableInput]=useState(false)
    const [disableAdd, setDisableAdd]=useState(true)
    
    const dispatch = useDispatch()
    const dateChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const nameChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const amountChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    const priceChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }
    
    
    const add=()=>{
        
        dispatch(addList(product))
        
        let inputs=document.querySelectorAll('.form input')
        inputs.forEach(item=>item.value='')
        setDisableInput(true)
        setDisableAdd(false)
    }
    const setDay=()=>{
        dispatch(addDay())
        dispatch(resetList())
        let date=document.querySelector('.date')
        date.value=''
        setDisableInput(false)
        setDisableAdd(true)
    }

    return(
        <main>
            <input placeholder='Tarix' type='date' defaultValue={date} className='date' name='date' onChange={dateChange} disabled={disableInput} required/>
            <div className='form'>
                <div className='name'>
                    <input placeholder='Nə aldım ?' name='name' onChange={nameChange} required />
                </div>

                <div className='quantity'>
                    <input placeholder='Ədəd, kq' name='amount' type='number' onChange={amountChange} required />
                </div>

                <div className='price'>
                    <input placeholder='Qiymət' name='price' type='number' onChange={priceChange} required />
                </div>
                <button type='button' onClick={add}><FaPlus className='plus'/></button>
            </div>
            <button type='button' className='add' onClick={setDay} disabled={disableAdd}>Günü Bitir</button>
        </main>
    )
}
export default Main