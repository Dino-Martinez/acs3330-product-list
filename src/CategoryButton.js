export default function CategoryButton(props) {
  const {callback, category, className} = props
  return (
    <button className={className + " categories__button"} onClick={e=>{callback(category.name)}}> 
      {category.name} <span className="bubble">{category.count}</span> 
    </button>
  )
}