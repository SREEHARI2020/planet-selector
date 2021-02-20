import React from 'react'

import LeftTab from './tabs/LeftTab'
import './BodyComponent.css'
import RightTab from './tabs/RightTab'
const BodyComponent = ({planets,selected,setSelected,setPlanets}) => {
    return (
        <div className="BodyComponent">
          <LeftTab planets={planets} setSelected={setSelected} selected={selected} setPlanets={setPlanets}/>
          <RightTab selected={selected}/>
        </div>
    )
}

export default BodyComponent
