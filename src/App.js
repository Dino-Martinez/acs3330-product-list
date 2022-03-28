import { useState } from 'react'
import './App.css'
import CategoryButton from './CategoryButton'
import data, {categoriesCounts} from './data.js'
import ProductCard from './ProductCard'
import generate from './utils/genKey'

function App() {
  const [chosenCategories, chooseCategories] = useState(['All'])
  const keys = generate()

  const toggleCategory = (name) => {
    // If they select 'All' then deselect everything else
    if (name === 'All')
      return chooseCategories(['All'])

    // Remove category
    if (chosenCategories.includes(name)) {
      // If it's the last chosen category, select 'All'
      if (chosenCategories.length === 1)
        return chooseCategories(['All'])

      // Otherwise, just remove it
      return chooseCategories(prev => prev.filter(category => category !== name))
    }

    // Add category but remove 'All' so it's only the chosen categories
    return chooseCategories(prev => [...prev, name].filter(category => category !== 'All'))
  }

  return (
    <div className="content">
      <nav className="categories">
        {categoriesCounts.map(category => {
          return <CategoryButton key={keys.next} className={chosenCategories.includes(category.name) ? 'selected' : ''} callback={toggleCategory} category={category} />
        })}
      </nav>
      <div className="products">
        {data.filter(product => chosenCategories.includes('All') || chosenCategories.includes(product.category)).map(product => {
          return (
            <ProductCard key={keys.next} product={product}/>
          )
        })}
      </div>
    </div>
  )
}

export default App
