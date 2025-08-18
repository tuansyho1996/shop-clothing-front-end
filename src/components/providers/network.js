const chains = {
    1: {
        name: "Ethereum",
        explorer: "https://etherscan.io/tx/"
    },
    42161: {
        name: "Arbitrum",
        explorer: "https://arbiscan.io/tx/"
    },
    10: {
        name: "Optimism",
        explorer: "https://optimistic.etherscan.io/tx/"
    },
    137: {
        name: "Polygon",
        explorer: "https://polygonscan.com/tx/"
    },
    8453: {
        name: "Base",
        explorer: "https://basescan.org/tx/"
    }
};

// helper function
const getExplorerUrl = (chainId, txHash) => {
    const chain = chains[chainId];
    if (!chain) return null;
    return `${chain.explorer}${txHash}`;
};
const getNameChain = (chainId) => {
    const chain = chains[chainId];
    return chain ? chain.name : "Unknown Chain";
}

export { chains, getExplorerUrl, getNameChain };
