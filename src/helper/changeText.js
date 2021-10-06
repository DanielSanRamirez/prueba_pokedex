
export const changeText = (data) => {
    
    var dataMod = data.results.map(n => {
        var firstL = n.name.charAt(0).toUpperCase()
        var text = n.name.slice(1)
        return firstL + text
    }) 

    return dataMod

}
