import * as actions from '../actions/tilesActions'

export const colors = {
    lime: "lime",
    black: "black",
    orange: "orange",
    green: "green",
    blue: "blue",
    yellow: "yellow",
    pink: "pink",
    purple: "purple",
}

export const initialState = {
    round: 1,
    clickCounter: 0,
    isWin: false,
    blockClicking: false,

    tiles: [
        {
            "id": 0,
            "color": colors.lime,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 1,
            "color": colors.black,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 2,
            "color": colors.lime,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 3,
            "color": colors.black,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 4,
            "color": colors.orange,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 5,
            "color": colors.green,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 6,
            "color": colors.orange,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 7,
            "color": colors.green,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 8,
            "color": colors.blue,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 9,
            "color": colors.yellow,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 10,
            "color": colors.blue,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 11,
            "color": colors.yellow,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 12,
            "color": colors.pink,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 13,
            "color": colors.purple,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 14,
            "color": colors.pink,
            "isOpened": false,
            "isMatched": false,
        },

        {
            "id": 15,
            "color": colors.purple,
            "isOpened": false,
            "isMatched": false,
        },

    ],
    
}

export default function tilesReducer(state = initialState, action) {
   
    switch (action.type) {
       
        case actions.CHECK_FOR_WIN:       
            return {
                ...state,
                isWin: checkIsWin(state.tiles),
            }

        case actions.OPEN_TILE:
            let blockClick = false
            if(state.clickCounter === 1) {
                blockClick = true
            } 
            return {
                ...state,
                clickCounter: state.clickCounter+1,
                blockClicking: blockClick,
                tiles: openTile(state.tiles, action.id)
            }

        case actions.CHECK_CLICK_COUNTER:
            if (state.clickCounter  === 2) {
                let isMatched = compareTiles(state.tiles)
                return {
                    ...state,
                   blockClicking: false,
                    round: isMatched ? state.round : state.round+1, 
                    clickCounter: 0,
                    tiles: proceedTiles(state.tiles)
                } 
            } 
            return {...state}
    
        default:
            return state
    }
}

// checkiIsWin searches for unmatched tiles & determines whether the player win
const checkIsWin = (tiles) => {
    
    let arr = []

    tiles.map( (tile) => {
        if(!tile.isMatched) {
            arr.push(tile)
        }
        return arr
    })

    return arr.length > 0 ? false : true
    
}

// Opens the given tile
const openTile = (tiles, id) => {
    tiles[id].isOpened = true
    return tiles
}

// compareTiles return true || false based on matched tiles' colors
// the result is used for round managment
const compareTiles = (tiles, state) => {
    
    let arr = [];
    
    tiles.map( (tile) => {
        if(tile.isOpened) {
         return  arr.push(tile)
        }
        return tile
    })

    if(arr[0].color === arr[1].color) {
        return true
    } 
    
    return false
}

// proceedTiles compares 2 tiles & changes their state accordingly
const proceedTiles = (tiles, state) => {
    
    let arr = [];
    
    tiles.map( (tile) => {
        if(tile.isOpened) {
         return  arr.push(tile)
        }
        return tile
    })
 
    if(arr[0].color === arr[1].color) {
        // TILES MATCHED!
        blockTiles(tiles, arr[0].id)
        blockTiles(tiles, arr[1].id)
    
    } else {
        // TILES MISMATCHED!
        // close tile, available to click again
        closeTile(tiles, arr[0].id)
        closeTile(tiles, arr[1].id)
    }
    
    return tiles
}

// Makes the tile unavailable to click until new game
const blockTiles = (tiles, id) => {
    return tiles.map((tile) => {
        if(tile.id === id) {
            tile.isOpened = false
            tile.isMatched = true
        }
        return tile
    })
}

// hide original color of the tile
const closeTile = (tiles, id) => {
    return tiles.map((tile) => {
        if(tile.id === id) {
            tile.isOpened = false
        }
        return tile
    })
}