import React from 'react'
import {connect} from 'react-redux'

const RoundInfo = (props) => {
    
    let text = props.isWin ? 'You win!' : `Round #${props.round}`
    
    return (
        <div className='infoWrap'>
            <h2>{text}</h2>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    round: state.tiles.round,
    isWin: state.tiles.isWin,
})


export default connect(mapStateToProps)(RoundInfo)