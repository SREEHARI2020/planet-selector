import React from 'react'
import './LeftTab.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';

const LeftTab = ({planets,setSelected,selected,setPlanets}) => {
    const history=useHistory();
   
    const handleClick=(planet,i)=>{
     
      const Toggle=[...planets];
        Toggle[i].isFavourite = !Toggle[i].isFavourite;
        setPlanets(Toggle);

        let views=[...selected]
        if(!views.includes(planet)&&planet.isFavourite===true){
            views.push(planet)
           
           
        }
       
        else {
             views = views.filter(item=> item.isFavourite==true);

           
        }
        

        setSelected(views)

    }
   
    return (
        <div className="planet-list-container">
            <div className="planet-list-container-list">
            <div className="planet-list-header"><h1 >Select your Favourite planet</h1></div> 
            <ul className="planet-list-parent">
           
                {planets?planets.map((planet,i)=>( 
              <div key={planet.id} className="planet-list-element-container">  
             
              <li  className="planet-list-element"  onClick={()=>handleClick(planet,i )}> 
                    
                    <div className="planet-list-element-name-icon">
                    <span >{planet.name}</span>

                <div>{planet.isFavourite?<FavoriteIcon/>:<FavoriteBorderIcon/>}</div>
                </div>
                    </li></div>
                    )) : <div>Loading...</div>}
                       
            </ul>
            </div>
            <Button className="planet-list-container-button"  variant="contained"
        
        size="large"onClick={()=>history.push('/planet')}> <span>View</span> < SendIcon/></Button>
        </div>
    )
}

export default LeftTab
