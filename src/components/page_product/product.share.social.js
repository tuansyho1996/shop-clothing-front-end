'use client'
import { FacebookShareButton, FacebookIcon } from "next-share";

const ShareSocial = ({ product }) => {
    const categoryHashtags = product?.product_list_categories
        ?.map(cat => `#${cat.replace(/\s+/g, '')}`)
        .join(' ');
    return (
        <div className="flex items-center  gap-4 mt-6">
            <h2 className="">Share this product:</h2>
            {/* Facebook Share Button */}
            <FacebookShareButton
                url={`/${product?.product_slug}`}
                quote={`Experience comfort with ${product?.product_name}, made from soft natural cotton.${categoryHashtags}`}
                hashtag={'#Carnobon'}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
    )
}
export default ShareSocial;