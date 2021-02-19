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
            <div className="planet-list-header"><h1 >Select your Favourite planet</h1></div> 
            <ul className="planet-list-parent">
           
                {planets?planets.map((planet,i)=>( 
              <div className="planet-list-element-container">  <li key={planet.id} className="planet-list-element"  onClick={()=>handleClick(planet )}> 
                    
                    <span >{planet.name}</span>

                
                    </li></div>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
    )
}

export default LeftTab
