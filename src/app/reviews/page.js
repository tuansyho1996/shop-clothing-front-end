import { getReview } from '../../services/service.review';
import Image from 'next/image';
import ReviewsCard from '@/components/review/review.card';
const Reviews = async () => {
    const reviews = await getReview('all')
    return (
        <div className="container w-full mx-auto mt-5">
            <h1 className="text-4xl font-bold mb-4 text-center">All Reviews</h1>
            <ReviewsCard reviews={reviews} />
        </div>
    );
}
export default Reviews;                                     
