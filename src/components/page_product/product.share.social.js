'use client'
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
} from "next-share";

const ShareSocial = ({ product }) => {
    const categoryHashtags = product?.product_list_categories_name
        ?.map(cat => `#${cat.replace(/\s+/g, '')}`)
        .join(' ');
    return (
        <div className="flex items-center  gap-4 mt-6">
            <h2 className="">Share this product:</h2>
            {/* Facebook Share Button */}
            <FacebookShareButton
                url={`https://carnobon.com/product/${product?.product_slug}`}
                quote={`Experience comfort with ${product?.product_name}, made from soft natural cotton.${categoryHashtags}`}
                hashtag={`#carnobon ${categoryHashtags}`}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
                url={`https://carnobon.com/product/${product?.product_slug}`}
                title={`Experience comfort with ${product?.product_name}, made from soft natural cotton.${categoryHashtags}`}
                hashtag={`#carnobon ${categoryHashtags}`}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    )
}
export default ShareSocial;