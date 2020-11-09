import React from 'react'

export const GridItem = ({id, title, url})=> {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
        </div>
    )
}
