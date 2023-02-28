import React from 'react'; 

import style from '../styles/Paginated.module.css';

const Paginated = ({pokemonPerPage, allPokemon, paginated}) =>{
    
    const pageNumber = []

    for(let i = 0; i < Math.ceil(allPokemon  / pokemonPerPage); i++) {
        pageNumber.push(i+1) //pusheamos i + 1 a efectos de UX para que  pageNumber no comience en 0
    }
    
    return(
        <nav>
            <ul className={style.paginated}>
                {pageNumber && pageNumber.map( num =>(
                    <li  className={style.number} key={num}>
                        <a key={num}onClick={() => paginated( num )}>{num}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Paginated;

