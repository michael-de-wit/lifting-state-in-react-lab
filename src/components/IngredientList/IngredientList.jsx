// src/components/IngredientList/IngredientList.jsx

import { useState } from 'react';

const IngredientList = (props) => {
    
    const handleAdd = (event, ingredient) => {
        event.preventDefault();
        console.log(ingredient);
        props.addIngredient(ingredient)
    }

    // const[ingredientToAdd, setIngredientToAdd]=useState('');

    return (
        <ul>
            {props.availableIngredients.map((ingredient, index) => {
            let ingredientInput = ingredient
            // console.log(ingredientInput);
                return (
                    <>
                            <li 
                                key={index} 
                                style={{ backgroundColor: ingredient.color }}
                            > {ingredient.name}
                            <form onSubmit={(e) => handleAdd(e, ingredient)}> {/* From: https://claude.ai/chat/5ba8b74c-a864-4be1-9780-bb0e4bf765bd */}
                                {/* <input 
                                    type="hidden"
                                    value={ingredientInput}
                                /> */}
                                <button type="submit" style={{ color: 'white' }}>+</button>
                            </form>
                            </li>
                    </>
                )
            })}
        </ul>
    )
};

export default IngredientList;
