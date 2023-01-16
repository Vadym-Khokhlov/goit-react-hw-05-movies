import api from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReview() {
      try {
        const review = await api.fetchReview(Number(movieId));
        setReview(review);
      } catch (error) {
        console.log(error);
      }
    }
    getReview();
  }, [movieId]);

  return (
    <section>
      Review
      {review.length > 0 ? (
        review.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>This movie has no reviews</p>
      )}
    </section>
  );
};
export default Review;
