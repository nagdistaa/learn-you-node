const fs = require('fs');

const filePath = process.argv[2]
fs.readFile(filePath,'utf8',(err,cont)=>{
    if(err){
        console.log('Error');
    }else{
        
        console.log(cont.split('\n').length-1)
    }
})