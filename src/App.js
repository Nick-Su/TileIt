import React from 'react'
import './index.css'

import TileWrapper from './components/tileWrapper.js'
import RoundInfo from './components/roundInfo.js'

const App = () => {
    return (
        <div>
            <h1>Match the tiles!</h1>
            <RoundInfo />
            <TileWrapper />
        </div> 
    )
}

export default App