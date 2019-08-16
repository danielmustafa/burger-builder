import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = props => {
    const [ingredientState, setIngredientState] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    })

    const [orderState, setOrderState] = useState({
        totalPrice: 0,
        canPurchase: false,
        purchasing: false
    })

    useEffect(() => {
        const ingredients = ingredientState
        const sum = Object.keys(ingredients).map((ingredient) => {
            return ingredients[ingredient]
        }).reduce((prev, el) => {
            return prev + el
        }, 0)

        setOrderState({
            ...orderState,
            canPurchase: sum > 0
        })
    }, [ingredientState])

    const modalClosed = () => {
        setOrderState({
            ...orderState,
            purchasing: false
        })
    }

    const updatePurchasing = () => {
        setOrderState({
            ...orderState,
            purchasing: true
        })
    }

    const cancelPurchasing = () => {
        setOrderState({
            ...orderState,
            purchasing: false
        })        
    }

    const continuePurchasing = () => {
        alert('Continuing..')
    }

    const addIngredientHandler = (ingredient) => {
        const oldCount = ingredientState[ingredient]
        const updatedCount = oldCount + 1;
        const newPrice = orderState.totalPrice + INGREDIENT_PRICES[ingredient]
        setIngredientState({
            ...ingredientState,
            [ingredient]: updatedCount
        })
        setOrderState({
            ...orderState,
            totalPrice: newPrice
        })
    }

    const removeIngredientHandler = (ingredient) => {
        const oldCount = ingredientState[ingredient]

        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const newPrice = orderState.totalPrice - INGREDIENT_PRICES[ingredient]

        setIngredientState({
            ...ingredientState,
            [ingredient]: updatedCount
        })
        setOrderState({
            ...orderState,
            totalPrice: newPrice
        })
    }

    const disabledInfo = {
        ...ingredientState
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (

        <Aux>
            <Modal modalClosed={modalClosed} show={orderState.purchasing}>
                <OrderSummary 
                    ingredients={ingredientState} 
                    cancelPurchasing={cancelPurchasing}
                    continuePurchasing={continuePurchasing}
                    totalPrice={orderState.totalPrice}/>
            </Modal>
            <Burger ingredients={ingredientState} />
            <BuildControls
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
                disabled={disabledInfo}
                totalPrice={orderState.totalPrice}
                canPurchase={orderState.canPurchase}
                purchasing={updatePurchasing}
></BuildControls>
        </Aux>
    )


}
export default BurgerBuilder;