import React from 'react';
import FoodListItem from './FoodListItem';

export default class FoodList extends React.Component {
    render() {
        return (
            <ul className='FoodList'>
                <FoodListItem name='Bread' quantity='1'/>
                <FoodListItem name='Milk' quantity='3'/>
                <FoodListItem name='Egg' quantity='2'/>
            </ul>
        );
    }
}