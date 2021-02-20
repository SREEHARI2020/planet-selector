import React from 'react'
import './LeftTab.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const LeftTab = ({planets,setSelected,selected,setPlanets}) => {
   console.log("dude",planets)
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
            <div className="planet-list-header"><h1 >Select your Favourite planet</h1></div> 
            <ul className="planet-list-parent">
           
                {planets?planets.map((planet,i)=>( 
              <div className="planet-list-element-container">  <li key={planet.id} className="planet-list-element"  onClick={()=>handleClick(planet,i )}> 
                    
                    <div className="planet-list-element-name-icon">
                    <span >{planet.name}</span>

                <div>{planet.isFavourite?<FavoriteIcon/>:<FavoriteBorderIcon/>}</div>
                </div>
                    </li></div>
                    )) : <div>Loading...</div>}
                       
            </ul>
            
        </div>
    )
}

export default LeftTab
