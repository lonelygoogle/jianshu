const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === 'seach_focus') {
        return {
            focused: true
        }
    }

    if (action.type === 'seach_blur') {
        return {
            focused: false
        }
    }
    return state
}