import React from 'react'
import './ShoppingList.css';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { InsertItem } from './InsertItem';
import { useState } from 'react';
export const ShoppingList=()=>{
    const [total,setTotal]=useState(0);
    const [items,setItems]=useState([]);

    
    
    const totalItemCount=()=>{for(let i=0;i<items.length;i++){
        setTotal(items.reduce((total,item)=>{return total+item.quantity},0))
    }}


    // useEffect(()=>{incrementTotal()},[items,total]);
    const handleQuantityIncrease=(index)=>{
        let newItems=[...items];
        newItems[index].quantity++;
        setItems(newItems);
        totalItemCount();
    }
    const handleQuantityDecrease=(index)=>{
        if(items[index].quantity>0){
        let newItems=[...items];
        newItems[index].quantity--;
        setItems(newItems);}
        totalItemCount();
    }

    const handleIsSelected=(index)=>{
        let newItems=[...items];
        newItems[index].isSelected=!newItems[index].isSelected;
        setItems(newItems);
        }

    const addItem=(name)=>{
        let newItems=[...items];
        newItems.push({
            name:name,
            quantity:1,
            isSelected:false,
        })
        setTotal(total+1);
        setItems(newItems);
    }
    return (
      <div className="ShoppingList-container container mt-3">
        <div className="container-heading text-center">
            <h1>Shopping List</h1>
        </div>
        <InsertItem addItem={addItem}/>
        <div className="items">
            {items.map((item,index)=>{return(
                <div className='d-flex item-container' key={index}>
                <input type="checkbox" name="isselected" id="" onChange={()=>{handleIsSelected(index)}} />
                <h3 className={item.isSelected?' ml-3 itemName disable':"ml-3 itemName"} >{item.name}</h3>
                <div className='item-count d-flex align-center'>
                    <button className='mr-1' onClick={()=>{handleQuantityDecrease(index);}}><FaLessThan size={25}/></button>
                    <h4>{item.quantity}</h4>
                    <button className='ml-1' onClick={()=>{handleQuantityIncrease(index)}}><FaGreaterThan size={25}/></button>
                </div>
                </div>
            ) 
            })}
        </div>
        {/* total */}
        <div className="totalItemQuantity d-flex">
            <h3>Total</h3>
            <h2>{total}</h2>
        </div>
      </div>
    )
  }
