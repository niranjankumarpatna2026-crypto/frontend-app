function Billing() {
  return (
    <div className='container mt-4'>
      <h1>💰 Billing</h1>

      <div className='card p-4'>
        <input className='form-control mb-3' placeholder='Product ID' />

        <input className='form-control mb-3' placeholder='Customer ID' />

        <input className='form-control mb-3' placeholder='Quantity' />

        <button className='btn btn-success'>Create Sale</button>
      </div>
    </div>
  )
}

export default Billing