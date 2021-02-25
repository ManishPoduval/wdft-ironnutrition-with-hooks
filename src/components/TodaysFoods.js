import React from 'react'


function TodaysFoods({foods, onDelete}) {

    let total = foods.reduce((acc, food) => {
        return  acc + (food.calories * food.quantity)
    }, 0)

    return (
        <>
        <ul>
            {
                foods.map((food, index) => {
                   return  <li>{food.quantity} {food.name} = {food.calories * food.quantity} 
                    <button onClick={() => { onDelete(food.name) }  }>Delete</button>
                    </li>
                })
            }
        </ul>
        <h1>Total {total} cal </h1>
        </>
    )
}

export default TodaysFoods