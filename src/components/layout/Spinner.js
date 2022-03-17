import spinner from '../../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="w-120 mt-20">
      <img
        width={120}
        className="text-center mx-auto"
        src={spinner}
        alt="loading..."
      />
    </div>
  )
}

export default Spinner
