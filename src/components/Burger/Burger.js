import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
        //For each ingredient, creates an array of ingredients for the number of unique ingredients
        //Then maps those individual values into burger ingredients
        return [...Array(props.ingredients[ingredient])].map((_, index) => {
            return <BurgerIngredient key={ingredient + index} type={ingredient} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please add some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger