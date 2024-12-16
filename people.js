const fullName = require ('./names');
const hobbies = require ('./hobbies');

const person = (()=>{
    
    return {
        fullName: fullName('Samuele','Terraroli'),
        hobbies: hobbies('sport','musica','videogiochi') 
    }
})
console.log(person())
