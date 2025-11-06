// src/components/IngredientList/IngredientList.jsx

import { useState } from 'react';

const IngredientList = (props) => {
    
    const handleAdd = (event) => {
        event.preventDefault();
        console.log(`add ok`);
        props.addIngredient(ingredientToAdd)
    }

    const[ingredientToAdd, setIngredientToAdd]=useState('');

    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => {
                return (
                    <>
                        <form onSubmit={handleAdd}>
                            <li 
                                key={index} 
                                style={{ backgroundColor: ingredient.color }}
                                value={ingredientToAdd}>
                                    {ingredient.name}
                                <button type="submit" style={{ color: 'white' }}>+</button>
                            </li>
                        </form>
                    </>
                )
            })}
        </ul>
    )
};

export default IngredientList;
