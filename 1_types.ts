const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = "Hello Typescript"

const numberArray: number[] = [1,2,3,4,5,8,13]

const numberArray2: Array<number> = [11,2,3,4,5,8,13]

const words: string[]  =["Hello", "Typescript"]

// Tuple

const contact: [string, number] = ["Vladilen", 123456]

//Any

let variable: any = 42

variable = "New String"

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName("Xaizenberg")

function throwError(message: string) {
    throw new Error(message)
}

function  infinite(): never {
    while (true){

    }
}

//Type

type Login = string

const login: Login = "good"

// const login2: Login = 2

type ID = string | number

const id1: ID = 12345
const id2: ID = "12345"
// const id3: ID = true

type SomeType = string | null | undefined


