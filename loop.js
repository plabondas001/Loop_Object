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