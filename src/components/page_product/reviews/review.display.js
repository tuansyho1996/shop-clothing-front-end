'use client'

import { useState, useEffect, useContext } from 'react';
import { AppContext } from '@/context/context.app';
import ReviewsCard from '@/components/review/review.card';

const ReviewDisplay = ({ product_reviews }) => {
    const { reviews, setReviews } = useContext(AppContext);

    useEffect(() => {
        if (product_reviews) {
            setReviews(product_reviews);
        }
    }
        , [product_reviews]);
    return (
        <ReviewsCard reviews={reviews} />
    );
}
export default ReviewDisplay;