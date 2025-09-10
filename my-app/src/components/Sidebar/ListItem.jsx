import React from 'react'
import Badge from './Badge'
import './ListItem.css'

const ListItem = ({initials,color,heading,bgColor,clickHandler}) => {
  return (
    <div onClick={clickHandler} style={{backgroundColor:bgColor,borderRadius:'0.75rem',placeItems:'center',cursor:'pointer'}} className='list-item'>
     <Badge initials={initials} color={color}/>
     <div className='center-text' style={{padding:0,margin:0,marginLeft:'1rem',fontWeight:'bold'}}>{heading}</div>
    </div>
  )
}

export default ListItem