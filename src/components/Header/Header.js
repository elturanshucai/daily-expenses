import React from 'react';
import { useDispatch } from 'react-redux';
import { setListPage } from '../../store/reducer/datereducer';
import {FaList} from "react-icons/fa"
import './Header.css'

function Header(){
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(setListPage())
    }
    return(
        <div className='header'>
            <div className="title">Daily Expenses</div>
            <FaList onClick={handleClick} className="listclass" />
        </div>
    )
}
export default Header;