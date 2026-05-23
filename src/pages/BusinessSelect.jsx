export default function BusinessSelect() {
  return (
    <div className="container mt-5">
      <h2>🏪 Select Business Type</h2>

      <div className="card p-3 mt-3">
        <button className="btn btn-primary mb-2">
          Kirana Shop
        </button>

        <button className="btn btn-success mb-2">
          Mobile Shop
        </button>

        <button className="btn btn-warning mb-2">
          Pharmacy
        </button>

        <button className="btn btn-dark">
          Coaching Center
        </button>
      </div>
    </div>
  )
}