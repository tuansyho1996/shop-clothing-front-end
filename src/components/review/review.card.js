import Image from "next/image";
const ReviewsCard = ({ reviews }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {reviews?.length > 0 ? (
                reviews?.map((review, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md">
                        <div className="flex items-center mb-2">
                            <span className="text-gray-600 text-xl ml-2 font-bold">{review.review_usr_name}</span>
                            <span className="text-yellow-500 ml-2 text-xl ">{'★'.repeat(review.review_rating)}</span>
                        </div>
                        <div className='flex mt-2'>
                            <Image
                                src={review.review_media}
                                alt="User Avatar"
                                width={100}
                                height={100}
                                loading='lazy'
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <span className="text-gray-700 text-sm ml-5">{review.review_content}</span>
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
export default ReviewsCard;