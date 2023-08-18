import React from 'react'
import Figure from './Figure'


const Card = ({ title, text, url, date}) => {
    return (
    <div className='card'>
         <h2 className='title'>{title}</h2>
         <p>{text}</p>
         <Figure
         url={url}
         date={date}
         />
       </div>
    )
}


    export default Card
