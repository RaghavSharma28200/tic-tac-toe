import React from 'react'

const Square = ({value,onClick,isWinningSquares}) => {
    return <button className ={`square1 ${isWinningSquares ? 'winning' : ''}${value === 'X'?'text-green':'text-orange'}`} type ='button'  onClick = {onClick}>{value}</button>
}

export default Square
