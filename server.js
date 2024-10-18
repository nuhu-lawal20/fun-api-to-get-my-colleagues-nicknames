const express = require('express');
const app = express();
const PORT = 8000;


const names = {
    'abdul' : {
        'NickName' : 'Kwashiokor',
        'Age' : 48
    },
    'hassan' : {
        'NickName' : 'Mal Hassan',
        'Age' : 35
    },
    'ali' : {
        'NickName' : 'Ali Akon',
        'Age' : 29
    },
    'mustapha' : {
        'NickName' : 'Asheik',
        'Age' : 28
    },
    'nuhu' : {
        'NickName' : 'Boss Man',
        'Age' : 32
    },
    'unknown' : {
        'NickName' : 'Unkown Human Being',
        'Age' : 'Uncountable'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/css/index.css',(req,res)=>{
    res.sendFile(__dirname + '/css/index.css')
})

app.get('/api/:cName',(req,res)=>{
    const cName = req.params.cName.toLowerCase()
    if(names[cName]){
        res.json(names[cName])
    }else{
        res.json(names['unknown'])
    }
    
})


app.listen(PORT,()=>{
    console.log(`Hey your server is running on port ${PORT}, better catch it while its hot!!!`)
})
