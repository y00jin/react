import fs from 'fs';

let state;

state = {
    order : JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive('강원도 춘천시 교동');

// console.log(state.order, updateOrder1, state.order=== updateOrder1);

// ------------------------------------------

state = {
    order : JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder2 = Object.assign({}, state.order, {
    receive: '강원도 춘천시 교동'
});

setState({
    order: updateOrder2
})

console.log(state.order, updateOrder2, updateOrder2 === state.order);