import api from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList } from 'components/SearchMovieList/MoviesList.styled';
import { Reviewer, ReviewTitle } from './Review.styled';

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
      <ReviewTitle>Reviews({review.length}):</ReviewTitle>
      <ReviewList>
        {review.length > 0 ? (
          review.map(({ id, author, content }) => (
            <li key={id}>
              <Reviewer>{author}</Reviewer>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>This movie has no reviews</p>
        )}
      </ReviewList>
    </section>
  );
};
export default Review;
