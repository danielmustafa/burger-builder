import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css'
const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}><span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}</li>
    })
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><span className={classes.TotalPrice}>Total Price: ${props.totalPrice.toFixed(2)}</span></p>
            <Button clicked={props.cancelPurchasing} btnType="Danger">Cancel</Button>
            <Button clicked={props.continuePurchasing} btnType="Success">Continue</Button>
        </Aux>
    );
};

export default OrderSummary;