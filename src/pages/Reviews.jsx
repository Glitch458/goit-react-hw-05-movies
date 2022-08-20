import { useState, useEffect } from 'react';
import { SearchReviewAPI } from 'services/SearchAPI';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    SearchReviewAPI(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length === 0 ? (
        <h3>There is no reviews</h3>
      ) : (
        reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
