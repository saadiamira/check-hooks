import React from 'react'
import MovieCart from './MovieCart'

const Movielist = ({mouvies}) => {
    console.log(mouvies)
    return (
        <div className='list'>
            { mouvies.map(elt =><MovieCart movie={elt} key={elt.id}/>   
            )}
           
        </div>
    )
}

export default Movielist
