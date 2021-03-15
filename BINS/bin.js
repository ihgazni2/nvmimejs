#!/usr/bin/env node

const mime = require("../nvmime.js").mime

function update(d1,d2) {
    for(let k in d2) {
        d1[k] = d2[k]
    }
    return(d1)
}


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


const util = require("util");

function slctViaKeyList0(d,kl) {
    let nd = {}
    for(let i=0;i<kl.length;i++){
        let k = kl[i]
        nd[k] = d[k]
    }
    return(nd)
}


function regexize(obj) {
    if(util.isRegExp(obj)) {
        return(obj)
    } else {
        return(new RegExp(obj))
    }
}

function mapv(arr,mapFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let ele = mapFunc(arr[i],...otherArgs)
        narr.push(ele)
    }
    return(narr)
}



function d2kvlist(d) {
    let kl = Object.keys(d)
    let vl = mapv(kl,(k)=>(d[k]))
    return([kl,vl])
}

function slctivV(arr,condFunc,otherArgs) {
    if(otherArgs===undefined) {
        otherArgs = []
    } else {
    }
    let narr = []
    for(var i=0;i<arr.length;i++){
        let func = condFunc
        let cond = func(arr[i],...otherArgs)
        let d = {'i':i,'v':arr[i]}
        if(cond){
            narr.push(d)
        } else {
        }
    }
    return(narr)
}


function slctiV(arr,condFunc,otherArgs) {
    let narr = slctivV(arr,condFunc,otherArgs)
    return(narr.map((ele)=>(ele.i)))
}



function _srch(d,regex) {
    regex = regexize(regex)
    let [kl,vl] = d2kvlist(d)
    let seqsk = slctiV(kl,(r)=>(regex.test(r)===true))
    let seqsv = slctiV(vl,(r)=>(regex.test(r)===true))
    let seqs = seqsk.concat(seqsv)
    seqs = seqs.uniqualize()
    kl = kl.seqs(seqs)
    return(slctViaKeyList0(d,kl))
}


function tobigd(mime) {
    let d = {}
    update(d,mime.application)
    update(d,mime.audio)
    update(d,mime.font)
    update(d,mime.image)
    update(d,mime.message)
    update(d,mime.model)
    update(d,mime.multipart)
    update(d,mime.text)
    update(d,mime.video)
    return(d)
}

function srch(mime,regex,cls) {
    let d = {}
    if(cls === undefined) {
        let bigd = tobigd(mime)
        d = _srch(bigd,regex)
    } else {
        d = _srch(mime[cls],regex)
    }
    return(d)
}


let regex = process.argv[2]
let cls = process.argv[3]

console.log("<nvmime -l>    to list classes")
console.log("<nvmime regex> to search")
console.log("<nvmime regex cls> to search specific class")
console.log("----------------------------------------\n")

if(regex === "-l") {
    console.log("classes")
    console.log(clses)
} else {
    console.log(srch(mime,regex,cls))
}
