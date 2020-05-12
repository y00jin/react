import fs from 'fs';

let state;

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder = update(state.order, {
    // 해당 패스값을 변경
    receive: {
        $set: '서울시 서초구 서초동'
    },
    // 해당 패스값을 변경
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    // 배열 인덱스로 찾아서 변경 가능
    products: {
        0: {
            amount: {
                $set: 10
            }
        },
        // 배열 요소 새로 추가
        $push: [{
            "no": "s001-001",
            "name": "블루양말",
            "price": 1000,
            "amount": 2  
        }]
    } 
});

// this.setState({
//     order: updateOrder
// })


console.log(state.order, updateOrder, updateOrder === state.order );
//====================================================================