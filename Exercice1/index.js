//votre code ici

function pairNumbers(a, b) {
    let pair = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            pair.push(i)
        }
    }
    return pair.join()
}
export default pairNumbers
