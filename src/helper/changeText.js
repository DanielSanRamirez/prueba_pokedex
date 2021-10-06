
export const changeText = (name) => {

        var firstL = name.charAt(0).toUpperCase()
        var text = name.slice(1)
        return firstL + text
}
