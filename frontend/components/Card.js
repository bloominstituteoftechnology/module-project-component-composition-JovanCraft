import React from 'react'


const Card = ({ title, text, url, date}) => {
    return (
    <div className='card'>
         <h2 className='title'>{title}</h2>
         <p>{text}</p>
         <figure>
             <img src={url}/>
             <figcaption className='caption'>This beautiful pic was taken on {date}</figcaption>
         </figure>
       </div>
    )
}


    export default Card
