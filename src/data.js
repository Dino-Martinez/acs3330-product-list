import data from './data.json'
const categories = data.map(product => product.category)
const categoriesUnique = Array.from(new Set(categories))
const categoriesHistogram = categories.reduce((histogram, category) => {
  if (!histogram['All'])
    histogram['All'] = 0
  if (!histogram[category])
    histogram[category] = 0
  
  histogram[category]++
  histogram['All']++
  return histogram
}, {})

const categoriesCounts = Object.keys(categoriesHistogram).map(category => {
  return { name: category, count: categoriesHistogram[category]}
})

export default data
export {categories, categoriesUnique, categoriesHistogram, categoriesCounts}