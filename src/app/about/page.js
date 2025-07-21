// pages/index.js

export const metadata = {
    title: 'Carnobon - Wear the Chain – Where Crypto Meets Streetwear',
    description: 'Discover a unique fusion of crypto culture and fashion. At Wear the Chain, we craft limited-edition streetwear inspired by blockchain, Bitcoin, Ethereum, and beyond. Pay with ETH, live decentralized.',
}

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
            <main className=" min-h-[50vh]">
                <section className="  px-6 py-16 md:px-20">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Carnobon
                        </h1>

                        <p className="text-lg md:text-xl text-gray-900 mb-8">
                            <span className="text-[var(--accent-color)] font-semibold">Carnobon</span> is where crypto culture meets fashion.
                            We design premium apparel inspired by blockchain, decentralization, and the digital future — for devs, traders, and believers.
                            Crypto-native. ETH-powered. Always on-chain.
                        </p>

                        <div className="space-y-10">
                            <section>
                                <h2 className="text-2xl font-semibold  mb-2">Our Mission</h2>
                                <p className="text-gray-900 ">
                                    At Carnobon, we’re reimagining clothing as a canvas for the decentralized generation.
                                    Our mission is to let people express their identity and alignment through wearable crypto aesthetics.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold  mb-2">What Makes Carnobon Unique</h2>
                                <ul className="list-disc list-inside text-gray-900 space-y-2">
                                    <li><span className=" font-medium">Pay with ETH:</span> Native support for Ethereum payments. Fast. Trustless. Borderless.</li>
                                    <li><span className=" font-medium">Limited Drops Only:</span> Every design is a collectible. No restocks. No duplicates.</li>
                                    <li><span className=" font-medium">Web3-Inspired Designs:</span> Inspired by Ethereum, memecoins, DeFi, zk tech & DAO culture.</li>
                                    <li><span className=" font-medium">Built for Comfort:</span> Premium fabrics. Durable prints. Tailored for hodlers and hustlers alike.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold  mb-2">Our Vision</h2>
                                <p className="text-gray-900 ">
                                    Carnobon is more than a clothing label. We’re building a fashion-native layer on top of crypto.
                                    In a world of wallets and zero-knowledge, your wardrobe should speak Web3.
                                </p>
                            </section>

                            <section className="pt-6">
                                <p className="text-xl font-semibold text-[var(--accent-color)]">
                                    Live decentralized. Dress accordingly. Only at <a href="https://carnobon.com" className="underline hover:">Carnobon.com</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
