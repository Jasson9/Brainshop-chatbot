const fetch = require("fetch")
async function send(message,bid,key,id,Callback){
    try {
        await fetch.fetchUrl(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${id}&msg=${encodeURIComponent(message)}`,function(error, meta, body){    
        typeof id == 'function'?id(JSON.parse(body.toString())):Callback(JSON.parse(body.toString()))
            })         
    } catch (error) {
        console.log(error)
    }
}
module.exports={send}