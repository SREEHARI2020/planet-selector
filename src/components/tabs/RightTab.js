import { Button } from '@material-ui/core'
import React from 'react'
import './RightTab.css'
import {useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const RightTab = ({selected}) => {
    const history=useHistory();
   
    return (
        <div className="planet-list-selected-container-parent">
             <div className="planet-list-selected-container">
                  
               <div className="planet-list-selected-header"><h1>Your Favourite planets</h1></div>  
            <ul className="planet-list-selected-parent">
                {selected?selected.map((planet)=>( 
                  
                <div key={planet.id} className="planet-list-selected-enclosing-container">
                    <li  className="planet-list-selected-element"  >
                    {planet.name}

                 
                    </li></div>
                    
                    )) : <div>Loading...</div>}
                       
            </ul>
            
           
        </div>
         <Button className="planet-list-selected-container-button"  variant="contained"
        
         size="large"onClick={()=>history.push('/')}> <span>Go Back</span> <ArrowBackIcon/> </Button> 

      </div>
    )
}

export default RightTab
