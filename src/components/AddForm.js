import React from 'react'


function AddForm({onAdd}) {
    return (
        <form onSubmit={onAdd}>
            <input name="name" type="text" placeholder="Enter Name"/>
            <input name="image" type="text" placeholder="Enter Image Url"/>
            <input name="calories" type="number" />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddForm
