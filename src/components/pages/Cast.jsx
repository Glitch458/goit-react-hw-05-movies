import { useParams } from 'react-router-dom';
import { SearchCastAPI, IMG_URL } from 'components/services/SearchAPI';
import { useState, useEffect } from 'react';
import Placeholder from '../pictures/avatar.png';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    SearchCastAPI(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul className="actorList">
      {actors &&
        actors.map(actor => (
          <li key={actor.id} className="actor">
            <img
              src={
                actor.profile_path ? IMG_URL + actor.profile_path : Placeholder
              }
              alt={actor.name}
              width={150}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
    </ul>
  );
};
