import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { BiError } from 'react-icons/bi'

const Alert = () => {
  const { alert } = useContext(AlertContext)
  return (
    alert !== null && (
      <div className="flex items-start mb-5 space-x-3">
        {alert.type === 'error' && <BiError className="inline text-4xl " />}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.message}</strong>
        </p>
      </div>
    )
  )
}

export default Alert
