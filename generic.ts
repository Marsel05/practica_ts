const arrayOfNumbers: Array <number> = [1,2,3,4,5]
const arrayOfStrings: Array <string> = ["Hello", "Marsel"]


function reverse<T>(array: T[]): T[]{
    return array.reverse()
}