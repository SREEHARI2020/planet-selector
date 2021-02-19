import React from 'react'
import './RightTab.css'

const RightTab = ({selected}) => {
    return (
       
             <div className="planet-list-selected-container">
                 <h1>Your Favourite planets</h1>
            <ul className="planet-list-selected-parent">
                {selected?selected.map((planet)=>( 
                <li key={planet.id} className="planet-list-selected-element"  >
                    {planet.name}

                 
                    </li>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
        
    )
}

export default RightTab
