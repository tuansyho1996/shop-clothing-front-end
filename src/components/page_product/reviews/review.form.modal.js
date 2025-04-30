'use client';

import { postReview } from '@/services/service.review';
import { useState, useRef, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '@/context/context.app';

export default function ReviewModal({ product_id, reviews_length }) {
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [media, setMedia] = useState(null);
    const { user, setReviews, reviews } = useContext(AppContext)

    const ModalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ModalRef.current && !ModalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowModal(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!review || !name || !rating || !email) {
            toast.error('Please fill in all required fields.');
            return;
        }

        if (!media || media.length === 0) {
            toast.error('Please upload at least one image or video.');
            return;
        }

        const formData = new FormData();
        if (user) {
            formData.append('review_usr_id', user._id);
        }
        else {
            formData.append('review_usr_id', 'none');
        }
        formData.append('review_product_id', product_id);
        formData.append('review_content', review);
        formData.append('review_usr_name', name);
        formData.append('review_usr_email', email);
        formData.append('review_rating', rating);

        Array.from(media).forEach((file, index) => {
            formData.append('media', file);
        });

        const response = await postReview(formData);
        if (response.status === 201) {
            toast.success('Review submitted successfully!');
            setShowModal(false);
            setReview('');
            setName('');
            setEmail('');
            setRating(0);
            setMedia(null);
            setReviews([...reviews, response.metadata])
        }
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 my-5 text-gray-700 rounded bg-[var(--primary-color)] hover:bg-accent-color hover:text-white transition text-sm md:text-base text-white">
                {
                    reviews_length > 0 ?
                        'Write a review' :
                        'Be the first to write a review!'
                }
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" >
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl" ref={ModalRef}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Share Your Thoughts</h2>
                            <button onClick={() => setShowModal(false)} className="text-xl font-bold">&times;</button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block font-medium">Rate your experience *</label>
                                <div className="flex space-x-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setRating(i)}
                                            className={`text-2xl ${i <= rating ? 'text-[var(--accent-color)]' : 'text-gray-300'
                                                }`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium">Write a review *</label>
                                <textarea
                                    className="w-full border p-2 rounded resize-none"
                                    rows={4}
                                    placeholder="Tell us what you like or dislike"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                            </div>



                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block font-medium">Your name *</label>
                                    <input type="text" className="w-full border p-2 rounded"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block font-medium">Your email address *</label>
                                    <input type="email" className="w-full border p-2 rounded"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium">Add media</label>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    className="mt-1"
                                    onChange={(e) => setMedia(e.target.files)}
                                />
                                <p className="text-xs text-gray-500">
                                    Upload up to 10 images and 3 videos (max. file size 2 GB)
                                </p>
                            </div>

                            <button
                                className="w-full bg-[var(--accent-color)] text-white py-2 rounded mt-4"
                                onClick={handleSubmit}
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
