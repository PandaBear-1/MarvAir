import { Link } from 'react-router-dom'
function NotFoundPage() {
  return (
    <div>
        <h2>Not Found</h2>
        <Link to={'/'}>
        <button>Go Back Home</button>
        </Link>
    </div>
  )
}

export default NotFoundPage