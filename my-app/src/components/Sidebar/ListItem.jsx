import React from 'react'
import Badge from './Badge'
import './ListItem.css'

const ListItem = ({initials,color,heading,bgColor,clickHandler}) => {
  return (
    <div onClick={clickHandler} style={{backgroundColor:bgColor}} className='list-item'>
     <Badge initials={initials} color={color}/>
     <div className='center-text item-text'>{heading}</div>
    </div>
  )
}

export default ListItem