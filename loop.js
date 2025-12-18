const person = {
    name: 'Plabon',
    age: 20,
    country: 'Bangladesh'
}

// normal for in loop 

for(let man in person){
    console.log(man, person[man]);
    
}

// ES6 for in loop

for(let man in person){
    console.log(`${man} ${person[man]}`);
    
}

// for of loop.... use entries method

for(let [key,value] of Object.entries(person)){
    console.log(`key: ${key} value: ${value}`);
    
}