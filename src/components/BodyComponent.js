import React from 'react'
import LeftTab from './LeftTab'

const BodyComponent = ({planets}) => {
    return (
        <div>
          <LeftTab planets={planets}/>
        </div>
    )
}

export default BodyComponent
