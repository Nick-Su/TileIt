// Redux Action types
export const OPEN_TILE = 'OPEN_TILE'
export const CHECK_CLICK_COUNTER = 'CHECK_CLICK_COUNTER'
export const CHECK_FOR_WIN = 'CHECK_FOR_WIN'

export const openTheTile = (id) => {
    return {
        type: OPEN_TILE,
        id,
    }
}

export function checkTheCounter() {
    return {
        type: CHECK_CLICK_COUNTER
    }
}

export function checkTheWin() {
    return {
        type: CHECK_FOR_WIN
    }
}
