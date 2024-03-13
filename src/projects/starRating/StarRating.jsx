import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


export default function StarRating({num = 5}){
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(curIndex){
        setRating(curIndex)
    }
    function handleMouseEnter(curIndex){
        setHover(curIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
    }
    return (
        <div className="star-rating">
            {
                [...Array(num)].map((_, index) => {
                    index += 1
                    return ( 
                    <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : ''}
                    onClick={()=> handleClick(index)}
                    onMouseEnter={()=> handleMouseEnter(index)}
                    onMouseLeave={()=> handleMouseLeave()}
                    size={40}
                    />)
                })
            }
        </div>
    )
}