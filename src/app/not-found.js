'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex pt-40 justify-center min-h-screen bg-white px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-xl text-gray-600">
                    Sorry, the page you're looking for doesn't exist.
                </p>

                <div className="mt-6">
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Go back home
                    </button>
                </div>
            </div>
        </div>
    );
}
