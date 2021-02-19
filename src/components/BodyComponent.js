import React from 'react'

import LeftTab from './tabs/LeftTab'
import './BodyComponent.css'
import RightTab from './tabs/RightTab'
const BodyComponent = ({planets,selected,setSelected}) => {
    return (
        <div className="BodyComponent">
          <LeftTab planets={planets} setSelected={setSelected} selected={selected}/>
          <RightTab selected={selected}/>
        </div>
    )
}

export default BodyComponent
