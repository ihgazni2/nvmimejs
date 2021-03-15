
let application = require("./CONSTS/application.json")
let audio = require("./CONSTS/audio.json")
let font = require("./CONSTS/font.json")
let image = require("./CONSTS/image.json")
let message = require("./CONSTS/message.json")
let model = require("./CONSTS/model.json")
let multipart = require("./CONSTS/multipart.json")
let text = require("./CONSTS/text.json")
let video = require("./CONSTS/video.json")

let mime = {
    application,
    audio,
    font,
    image,
    message,
    model,
    multipart,
    text,
    video
}

////patch multipart
mime.multipart.alternative = "multipart/alternative"
mime.multipart.mixed = "multipart/mixed"
////


module.exports = {
    mime
}
