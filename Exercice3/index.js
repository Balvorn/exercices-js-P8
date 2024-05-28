// Créez votre fonction ici
function calculateAverage(arr){
    if(!Array.isArray(arr) || arr.length == 0) return "No numbers to calculate average"
    let initialValue = 0
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue)/arr.length
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
