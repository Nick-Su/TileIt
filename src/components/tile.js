import React from 'react'

const Tile = (props) => {

    const DEFAULT_COLOR = 'darkslategray'

    let finalColor = DEFAULT_COLOR;
    let resultOpacity = 1
    let clickFunc = props.clickFunc
  
    if(props.isOpened) {
        finalColor = props.color;
    }

    if(props.isMatched) {
        resultOpacity = 0.7
        clickFunc = null
    }

    if(props.blockClick) {
        clickFunc = null
    }

    return (
 
        <div 
            className='tile-wrap'
            style={{backgroundColor: finalColor, opacity: resultOpacity}} 
            onClick={clickFunc}
        >
           
        </div> 
        
    )
}

export default Tile