// Your code here
export function pointsForWord(word) {
    let points = 0

    for(const letter of word){
        if(["a", "e", "i", "o", "u"].includes(letter)){
            points += 1
        } else {
            points += 2
        }
    }
    return points
}