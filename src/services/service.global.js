const fetcher = async (endpoint, options = {}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }

    return res.json();
};
const getGlobal = async (name) => {
    try {
        const response = await fetcher(`/api/global/${name}`, { cache: "no-cache" });
        if (!response.status === 200) {
            return null
        }
        return response.metadata
    } catch (error) {
        console.error(error)
    }
}
export {
    getGlobal
}