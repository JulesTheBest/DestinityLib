// Version 0.1
// MIT License - Copyright (c) 2024 Jules

// Check new releases / documentation on https://github.com/JulesTheBest/DestinityLib


// Var / Const


backLoopError = false


// Class


class BackLoop {
    func = function a(){}
}

class Log {

    error(message){
        throw new Error(message)
    }

    warn(message){
        console.warn(message)
    }

}


// Functions 


function delay(time) {

    const t = Date.now()
    while(Date.now() - t < time) {


    }


}

function sameTime(func) {

    setTimeout(() => {func}, 0)


}

function log(message) {

    console.log(message)


}

function average(array) {

    const a =array.reduce((sum, current) => {
        return sum += current
    })

    const b = array.length

    return c = a/b

}

function median(array) {

    const s = [...array].sort((a, b) => a - b)
    const m = Math.floor(s.length / 2)
    return s.length % 2 === 0
    ? (s[m] + s[m - 1]) / 2
    : s[m]


}

function backLoopRun() {
    if (typeof(BackLoop.func) !== 'function'){
        if(backLoopError === false){
            backLoopError = true
            throw new Error("501 : Badly defined BackLoop")
        }
    } else{BackLoop.func()}
}


// Other

setInterval(() => {backLoopRun()}, 5)