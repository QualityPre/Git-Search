import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md hover:shadow-lg card-compact card-side bg-base-100 hover:bg-base-200">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-16 h-16">
              <img src={avatar_url} alt="Profile"></img>
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40 hover:text-slate-300"
            to={`/user/${login}`}
          >
            Visit this githubber!
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
