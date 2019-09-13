#!/usr/bin/env node

const mime = require("../nvmime.js").mime
const eded = require("exdict")

const clses = [
    "application",
    "audio",
    "font",                  
    "image",
    "message",
    "model",
    "multipart",
    "text",
    "video"
]





function tobigd(mime) {
    let d = {}
    eded.update(d,mime.application)
    eded.update(d,mime.audio)
    eded.update(d,mime.font)
    eded.update(d,mime.image)
    eded.update(d,mime.message)
    eded.update(d,mime.model)
    eded.update(d,mime.multipart)
    eded.update(d,mime.text)
    eded.update(d,mime.video)
    return(d)
}

function srch(regex,cls) {
    let d = {}
    if(cls === undefined) {
        let bigd = tobigd(mime,regex)
        d = eded.srch(bigd)
    } else {
        d = eded.srch(mime[cls],regex)
    }
    return(d)
}


let regex = process.argv[1]
let cls = process.argv[2]

console.log("<nvmime -l>    to list classes")
console.log("<nvmime regex> to search")

if(regex === "-l") {
    console.log(clses)
} else {
    console.log(srch(regex,cls))
}
