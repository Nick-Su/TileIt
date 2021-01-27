import React from 'react'
import {connect} from 'react-redux'

import Tile from './tile'
import {openTheTile} from '../actions/tilesActions'
import {checkTheCounter} from '../actions/tilesActions'
import {checkTheWin} from '../actions/tilesActions'

class TileWrapper extends React.Component {
    
    constructor(props) {
        super(props)

        this.renderTiles = this.renderTiles.bind(this);
        this.handleTileClick = this.handleTileClick.bind(this);
        this.openTile = this.openTile.bind(this);
        this.checkCounter = this.checkCounter.bind(this);
        this.checkWin = this.checkWin.bind(this)
    };

    checkCounter() {
        this.props.dispatch(checkTheCounter());
    }

    openTile(id) {
        this.props.dispatch(openTheTile(id));
    }

    checkWin() {
        this.props.dispatch(checkTheWin())
    }
    
    handleTileClick(e, id, color, status) {
        e.preventDefault();

        // onClick show the original color of the tile
        this.openTile(id);
        
        // Check if a user made 2 clicks, compare tiles
       setTimeout(this.checkCounter, 900)
    }

    componentWillUpdate()
    {
        this.checkWin()
    }
    
    renderTiles() {  
        
       
        return this.props.tiles.map((tile) => 
            <div className='child' key={tile.id} > 
                <Tile
                    tid = {tile.id}
                    color={tile.color}
                    isOpened={tile.isOpened}
                    clickCounter={this.props.clickCounter}
                    closeAllTiles={this.props.closeAllTiles}
                    isMatched={tile.isMatched}
                    clickFunc={(e) => this.handleTileClick(e, tile.id, tile.color, tile.status)}
                    blockClick={this.props.blockClicking}
                />
            </div> 
        )}
    
    render() {
        return (
        <div className="tiles-container"> 
           {this.renderTiles()}
     
        </div>
        ) 
    }
}


const mapStateToProps = (state) => ({
    clickCounter: state.tiles.clickCounter,
    tiles: state.tiles.tiles,
   // closeAllTiles: state.tiles.closeAllTiles,
    blockClicking: state.tiles.blockClicking,
})

export default connect(mapStateToProps)(TileWrapper)