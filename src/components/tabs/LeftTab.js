import React from 'react'
import './LeftTab.css'
import Checkbox from '@material-ui/core/Checkbox';

const LeftTab = ({planets,setSelected,selected}) => {
    const handleClick=(planet)=>{
        const views=[...selected]
        if(!views.includes(planet)){
            views.push(planet)
            setSelected(views)
        }
       
    }
   
    return (
        <div className="planet-list-container">
             <h1>Select your Favourite planet</h1>
            <ul className="planet-list-parent">
           
                {planets?planets.map((planet,i)=>( 
                <li key={planet.id} className="planet-list-element"  onClick={()=>handleClick(planet )}>
                    
                    <span className="planet-list-element-name">{planet.name}</span>

                 <Checkbox/>
                    </li>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
    )
}

export default LeftTab
