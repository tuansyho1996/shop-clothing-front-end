'use client'

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '@/context/context.app';

const ReviewDisplay = ({ product_reviews }) => {
    const { reviews, setReviews } = useContext(AppContext);

    useEffect(() => {
        if (product_reviews) {
            setReviews(product_reviews);
        }
    }
        , [product_reviews]);
    return (
        <div className="flex gap-2 mt-4">
            {reviews?.length > 0 ? (
                reviews?.map((review, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 text-xl ml-2 font-bold">{review.review_usr_name}</span>
                            <span className="text-yellow-500 ml-2 text-xl ">{'★'.repeat(review.review_rating)}</span>
                        </div>
                        <div className='flex items-center mt-2'>
                            <Image
                                src={review.review_media}
                                alt="User Avatar"
                                width={100}
                                height={100}
                                loading='lazy'
                            />
                            <span className="text-gray-700 text-sm">{review.review_content}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-sm text-gray-500">
                    No reviews yet.
                </p>
            )}
        </div>
    );
}
export default ReviewDisplay;