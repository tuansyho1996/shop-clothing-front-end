// pages/index.js

export default function Home() {
    return (
        <>
            {/* <Head>
        <title>Mythic Threads - Mythology-Inspired Clothing</title>
        <meta
          name="description"
          content="Explore clothing inspired by Egyptian, Norse, and Greek mythology. Rediscover legends and redefine your style with Mythic Threads."
        />
      </Head> */}
            <main className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-10">
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800">Welcome to Mythic Threads</h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Dive into a world where history, culture, and style collide. Rediscover legends. Redefine your style.
                        </p>
                    </header>
                    <section className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Egyptian Mystique</h2>
                            <p className="text-gray-600 mt-4">
                                Unveil the elegance of ancient Egypt with designs reflecting the grandeur of pharaohs, the wisdom of Thoth, and the beauty of Hathor.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Norse Valor</h2>
                            <p className="text-gray-600 mt-4">
                                Embrace the spirit of the Vikings with bold patterns inspired by Odin, Thor, and the intricate runes of Yggdrasil.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Greek Sophistication</h2>
                            <p className="text-gray-600 mt-4">
                                Channel the grace of Mount Olympus with garments honoring Zeus, Athena, and the epic tales of heroes like Hercules.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
