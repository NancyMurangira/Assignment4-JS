const cup ={
    color:'red',
    size:'small',
    texture: 'smooth',
    shape: 'round',
    functionality:{
        drinkType:'tea',
        temperature: 'hot',
    },
    drink: function(){   // drink:()=>{} instead of using 'this' we will use 'cup'
        console.log('Use me to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)
    }
};
console.log({color:cup.color});
console.log('size', cup.size);
console.log('temperature', cup.functionality.temperature);
console.log('texture',cup.texture);
cup.model = 'glass';
console.log({cup});
delete cup.model
console.log({cup});
cup.color = "green";
console.log({cup});

cup.drink(); // when you add console.log it will give you undefined 

const keys = Object.keys(cup)
console.log({keys});
const values = Object.values(cup);
console.log({values});

const loop = Object.keys(cup).map(item => {
    return ({key:item, value:cup[item]});

})

 Object.keys(cup).forEach(item => {
    return ({key:item, value:cup[item]});
})
