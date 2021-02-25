import React, {useState} from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddForm from './components/AddForm';
import TodaysFoods from './components/TodaysFoods';

function App() {

  const [allFoods, updateAllFoods] = useState(foods)
  const [filterFoods, updateFilterFoods] = useState(foods)
  const [showForm, updateShowForm] = useState(false)
  const [todaysFoods, updateTodaysFoods] = useState([])

  const handleShowForm = () => {
    updateShowForm(true)
  }

  const handleAddItem = (event) => {
      event.preventDefault()
      const {name, calories, image} = event.target
      let newItem = {
        name: name.value,
        calories: calories.value,
        image: image.value
      }
      updateAllFoods([newItem, ...allFoods])
      updateFilterFoods([newItem, ...allFoods])
  }


  const handleSearch = (event) => {
      let searchText = event.target.value.toLowerCase()
      let filteredFoods = allFoods.filter((food) => {
        return food.name.toLowerCase().startsWith(searchText)
      })

      updateFilterFoods(filteredFoods)
  }

  const handleAddTodaysFood = (food, quantity) => {

      let cloneFoods = JSON.parse(JSON.stringify(todaysFoods))
      let isFoodPresent = false
      for (let i=0; i<cloneFoods.length; i++ ) {
          if (cloneFoods[i].name == food.name){
            cloneFoods[i].quantity = cloneFoods[i].quantity + quantity
              isFoodPresent = true
              break;
          }
      }

      if (isFoodPresent) {
        updateTodaysFoods(cloneFoods)
      }
      else {
        let newFood = {
          name: food.name,
          calories: food.calories,
          quantity: quantity,
        }
  
        updateTodaysFoods([...todaysFoods, newFood])
      }  
  }

  const handleDelete = (name) => {
    let filteredTodaysFoods = todaysFoods.filter((food) => {
      return food.name !== name
    })

    updateTodaysFoods(filteredTodaysFoods)
  }

  return (
    <div className="columns">
      <div className="column">
        <input onChange={handleSearch} placeholder="Search an Item" />
        { showForm ? <AddForm onAdd={handleAddItem} /> : <button onClick={handleShowForm}>Show Form</button>}
        {
          filterFoods.map((food, index) => {
            return  <FoodBox onAdd={handleAddTodaysFood} key={food.name} food={food} />
          })
        }
     
      </div>
      <div className="column">
        Todays foods
        <TodaysFoods onDelete={handleDelete} foods={todaysFoods}/>
      </div>
    </div>
  );
}

export default App


