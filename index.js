const fs = require('fs');
const data = [];
function storeJson(input){
    data.push(input);
    fs.writeFileSync('./store.json',JSON.stringify(data), {encoding: 'utf-8'});
}

storeJson({nome:'jefferson',idade:17});
storeJson('beta-test');