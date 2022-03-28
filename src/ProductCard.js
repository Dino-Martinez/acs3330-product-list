export default function ProductCard(props) {
  const {product} = props
  return (
    <div className="products__product">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.units}</p>
    </div>
  )
}