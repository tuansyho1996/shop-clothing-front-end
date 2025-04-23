'use client';

import { useState, useRef, useEffect } from 'react';

export default function ReviewModal() {
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);
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



    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 my-5 text-gray-700 rounded bg-[var(--primary-color)] hover:bg-accent-color hover:text-white transition text-sm md:text-base text-white">
                Be the first to write a review!
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
                                            className={`text-2xl ${i <= rating ? 'text-orange-500' : 'text-gray-300'
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
                                />
                            </div>

                            <div>
                                <label className="block font-medium">Add a headline *</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded"
                                    placeholder="Summarize your experience"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label className="block font-medium">Your name *</label>
                                    <input type="text" className="w-full border p-2 rounded" />
                                </div>
                                <div className="w-1/2">
                                    <label className="block font-medium">Your email address *</label>
                                    <input type="email" className="w-full border p-2 rounded" />
                                    <p className="text-xs text-gray-500">
                                        We'll send you an email to verify this review came from you.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium">Add media</label>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*,video/*"
                                    className="mt-1"
                                />
                                <p className="text-xs text-gray-500">
                                    Upload up to 10 images and 3 videos (max. file size 2 GB)
                                </p>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 rounded mt-4"
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
