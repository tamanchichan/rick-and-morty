import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Character() {
  const { character } = useParams();
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [origin, setOrigin] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  
  // const navigate = useNavigate();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);
        setId(data.id);
        setImage(data.image);
        setName(data.name);
        setGender(data.gender);
        setOrigin(data.origin.name);
        setSpecie(data.species);
        setStatus(data.status);
      } catch (error) {
        console.log(error);
      };
    };
    
    getData();
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${name}`}</title>
      </Helmet>
      <div className='character-details'>
        {/* <div className='center'> */}
          <div className=''>
            <figure>
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className=''>            
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>{origin}</p>
            <p>{specie}</p>
            <p>{status}</p>
          {/* </div> */}
        </div>
        {/* <div className='icon-left'>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(location.href=`${id - 1}`)}
          />
        </div>
        <div className='icon-right'>
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => navigate(location.href=`${id + 1}`)}
          />
        </div> */}
        <div className='know-more'>
          <button type='button'>Know More</button>
        </div>
      </div>
    </>
  );
};

export default Character;