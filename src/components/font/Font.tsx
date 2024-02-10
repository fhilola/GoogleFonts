import React from 'react'
import './Font.scss'

            // <style>
            //     @import url(`https://fonts.googleapis.com/css2?family=${family_name}&display=swap`);
            // </style>

interface FontProps {
    family_name: string
    styles: number
    font: string
}

const Font = ({ family_name, styles, font }: FontProps) => {
    return (
        <>
            <div className='single-font'>
                <h3>{family_name}</h3>
                <p>{styles} styles</p>
                <span>{font}</span>
            </div>
                <h1 className='font-text' style={{ fontFamily: font }}>Everyone has the right to freedom of thoughts, consistence and ...</h1>
        </>
    )
}

export default Font