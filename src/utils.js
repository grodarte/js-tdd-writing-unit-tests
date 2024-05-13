// Your code here
export function pointsForWord(word) {
    let points = 0

    for(const letter of word){
        points += /[aeiou]/i.test(letter) ? 1:2
    }
    return points
}