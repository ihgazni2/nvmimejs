const {
    decompress_json
} = require("nv-facutil-compress").cli;
const path = require("path");

decompress_json(path.resolve(__dirname,"../CONSTS/application.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/audio.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/font.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/image.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/message.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/model.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/multipart.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/text.brotli"),"utf8");
decompress_json(path.resolve(__dirname,"../CONSTS/video.brotli"),"utf8");



