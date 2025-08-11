import jazzicon from "@metamask/jazzicon";
import { useRef, useEffect } from "react";

const JazzAvatar = ({ address, diameter = 32 }) => {
    const ref = useRef();

    useEffect(() => {
        if (!address || !ref.current) return;
        const seed = parseInt(address.slice(2, 10), 16); // từ địa chỉ ví
        const icon = jazzicon(diameter, seed);
        ref.current.innerHTML = ""; // xóa cũ nếu có
        ref.current.appendChild(icon);
    }, [address, diameter]);

    return <div ref={ref} style={{ width: diameter, height: diameter, borderRadius: "9999px", overflow: "hidden" }} />;
};

export default JazzAvatar;