import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>Current Price: {props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                        key={control.label} 
                        label={control.label} 
                        addIngredient={() => props.addIngredient(control.type)}
                        removeIngredient={() => props.removeIngredient(control.type)}
                        disabled={props.disabled[control]}></BuildControl>
            })}
            <button 
                className={classes.OrderButton} 
                disabled={!props.canPurchase}
                onClick={props.purchasing}>Order!</button>
        </div>
    );
};

export default BuildControls;