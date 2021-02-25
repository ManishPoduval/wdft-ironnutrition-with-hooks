import React, {useState} from 'react'


function FoodBox({food, onAdd}) {

    const [quantity, updateQuantity] = useState(1)

    const handleQuantityChange = (event) => {
        updateQuantity(Number(event.target.value))
    }

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input onChange={handleQuantityChange} className="input" type="number" value={quantity} />
                    </div>
                    <div className="control">
                    <button onClick={() => { onAdd(food, quantity ) }} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>
    )
}

export default FoodBox
