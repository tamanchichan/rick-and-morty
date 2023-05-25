import { useNavigate } from 'react-router-dom';

function Buttons(props) {
  const navigate = useNavigate();
  
  return (
    <div className='buttons'>
      <button
        className='sort'
        onClick={props.sort}
      >
        Sort Name
      </button>
      <button
        className='add'
        onClick={() => {navigate(`new-character`)}}
      >
        Add Character
      </button>
    </div>
  )
}

export default Buttons