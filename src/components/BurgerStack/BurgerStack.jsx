// src/components/BurgerStack/BurgerStack.jsx

import { useState } from 'react';

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => {
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

export default BurgerStack;
