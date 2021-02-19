import React from 'react'
import './RightTab.css'

const RightTab = ({selected}) => {
    return (
       
             <div className="planet-list-selected-container">
               <div className="planet-list-selected-header"><h1>Your Favourite planets</h1></div>  
            <ul className="planet-list-selected-parent">
                {selected?selected.map((planet)=>( 
                <div className="planet-list-selected-enclosing-container"><li key={planet.id} className="planet-list-selected-element"  >
                    {planet.name}

                 
                    </li></div>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
        
    )
}

export default RightTab
