import { useEffect, useState } from 'react'
import API from '../api/api'

function Products() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const fetchProducts = async () => {
    const res = await API.get('/products')
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addProduct = async () => {
    await API.post('/products', null, {
      params: {
        name,
        price,
        stock
      }
    })

    fetchProducts()
  }

  return (
    <div className='container mt-4'>
      <h1>📦 Products</h1>

      <div className='card p-3 mb-4'>
        <input
          className='form-control mb-2'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='form-control mb-2'
          placeholder='Price'
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className='form-control mb-2'
          placeholder='Stock'
          onChange={(e) => setStock(e.target.value)}
        />

        <button className='btn btn-primary' onClick={addProduct}>
          Add Product
        </button>
      </div>

      <div className='row'>
        {products.map((p) => (
          <div className='col-md-4 mb-3' key={p.id}>
            <div className='card p-3'>
              <h5>{p.name}</h5>
              <p>₹{p.price}</p>
              <p>Stock: {p.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products