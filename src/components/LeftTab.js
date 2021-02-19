import React from 'react'

const LeftTab = ({planets}) => {
    return (
        <div>
            <ul className="planet-list-container">
                {planets?planets.map((planet)=>( 
                <li key={planet.id} className="planet-list element">
                    {planet.name}
                    </li>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
    )
}

export default LeftTab
