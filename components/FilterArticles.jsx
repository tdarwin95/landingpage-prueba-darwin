import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	filterArticles: PropTypes.func.isRequired,
}


function  FilterArticles ({filterArticles}){
    return (
        <div className="card sombra">
            <ul>
                <li><a href="#" onClick={(ev)=>filterArticles(ev,'todos')}>TODOS</a></li>
                <li><a href="#" onClick={(ev)=>filterArticles(ev,'Productos')}>PRODUCTOS</a></li>
                <li><a href="#" onClick={(ev)=>filterArticles(ev,'Recetas')}>RECETAS</a></li>
                <li><a href="#" onClick={(ev)=>filterArticles(ev,'Consejos')}>CONSEJOS</a></li>
            </ul>
        </div>
    )
}

FilterArticles.propTypes = propTypes

export default FilterArticles