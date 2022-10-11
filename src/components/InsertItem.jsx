import React from 'react'
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
export const InsertItem = (props) => {
    const [name,setName]=useState('');
  return (
    <div>
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Item Name" aria-label="Recipient's username" aria-describedby="basic-addon2" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2"><button onClick={()=>{props.addItem(name);
    setName('');
    }}><AiFillPlusCircle size={40}/></button></span>
  </div>
</div>
    </div>
  )
}
