import { useState } from 'react';

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="relative">
            <ul className="flex space-x-6 justify-center py-4 bg-white border-b border-gray-200">
                <li
                    className="relative cursor-pointer"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <span className="font-semibold text-gray-700">Explore</span>
                    {showDropdown && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 p-6 rounded-lg w-[600px] grid grid-cols-3 gap-6 z-50">
                            <div>
                                <h3 className="text-sm font-semibold border-b pb-2 mb-3">CATEGORIES</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>Anime</li>
                                    <li>Cartoons</li>
                                    <li>Comics</li>
                                    <li>Gaming</li>
                                    <li>Horror</li>
                                    <li>Classics</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold border-b pb-2 mb-3">BRANDS</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>DC Comics <span className="text-blue-500 bg-blue-100 px-1 rounded">FanShop</span></li>
                                    <li>Disney</li>
                                    <li>Dungeons and Dragons</li>
                                    <li>Fortnite</li>
                                    <li>Game of Thrones</li>
                                    <li>Harry Potter</li>
                                    <li>Jurassic Park</li>
                                    <li>Looney Tunes <span className="text-blue-500 bg-blue-100 px-1 rounded">FanShop</span></li>
                                    <li>Magic The Gathering</li>
                                    <li>Marvel</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold border-b pb-2 mb-3">CREATORS</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>FireDragon</li>
                                    <li>Gladd</li>
                                    <li>Jambo</li>
                                    <li>Littlesiha</li>
                                    <li>MrFruit</li>
                                    <li>NeebsGaming</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </li>
                <li className="text-gray-700 font-semibold">Shop</li>
                <li className="text-gray-700 font-semibold">Popular</li>
                <li className="text-gray-700 font-semibold">Artists</li>
                <li className="text-gray-700 font-semibold">Brands</li>
                <li className="text-gray-700 font-semibold">Discover</li>
            </ul>
        </nav>
    );
}
