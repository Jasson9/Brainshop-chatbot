# Brainshop-Chatbot
 Simple javascript module to send message to your Brainshop.ai Chatbot and get response from it

## Install
```
    npm i brainshop-chatbot
```

## Usage
Example
```javascript
    const brainshop = require('../index.ts')

    brainshop.send('Hello',178,'sX5A2PcYZbsN5EY6',(res)=>{
        console.log(res.cnt)
    })
```

Response 
```javascript
    'Hi~~~'
```

`brainshop.send(message,bid,key,uid,callback)`

* **message** message to send 
* **bid** The brain ID
* **key** The access key for the brain.
* **uid** The ID you assign to end user(optional).
> you can use the example bid and key if you don't have it


- visit [brainshop.ai](https://brainshop.ai) for more info about brainshop AI Chatbot and customize it for yourself
- [brainshop.ai Documentation](https://brainshop.ai/node/260732)
