function Dashboard() {
  return (
    <div className='container mt-4'>
      <h1>📊 Dashboard</h1>

      <div className='row mt-4'>
        <div className='col-md-3'>
          <div className='card p-3'>
            <h5>Total Sales</h5>
            <h2>₹5000</h2>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='card p-3'>
            <h5>Products</h5>
            <h2>25</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard