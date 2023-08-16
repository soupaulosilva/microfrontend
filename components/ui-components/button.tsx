import React, { useEffect } from 'react'

interface ButtonProps {
    children: React.ReactNode;
}


const onButtonClick = () => console.log('clicou from remote')

export default function Button({ children }: ButtonProps) {
   
    return (
        <button className="btn" onClick={onButtonClick}>
            { children }
        </button>
    )
}
