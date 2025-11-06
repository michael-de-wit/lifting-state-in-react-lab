// src/components/BurgerStack/BurgerStack.jsx

import { useState } from 'react';

const BurgerStack = (props) => {

    const handleRemove = (event, ingredient) => {
        event.preventDefault();
        console.log(`remove ok`);
        props.removeIngredient(ingredient)
    }

    const[ingredientToRemove, setIngredientToRemove]=useState('');

    return (
        <ul>
            {props.stack.map((ingredient, index) => {
                return (
                    <>
                        <form onSubmit={(e) => handleRemove(e, ingredient)}>
                            <li 
                                key={index} 
                                style={{ backgroundColor: ingredient.color }}
                                value={ingredientToRemove}>
                                    {ingredient.name}
                                <button type="submit" style={{ color: 'white' }}>-</button>
                            </li>
                        </form>
                    </>
                )
            })}
        </ul>
  )
};

export default BurgerStack;
