'use client'
const ProductSchema = ({ colorsObject, listSizes, product }) => {
    const color = colorsObject?.find(c => c.hex === product?.product_colors[0])?.name || "Unknown Color";
    const variantId = typeof product?._id === 'string'
        ? product?._id.slice(-6).toUpperCase()
        : product?._id?.toString().slice(-6).toUpperCase();

    let valueGender;
    if (product?.product_list_categories[1] === "kid") {
        valueGender = "unisex";
    } else if (product?.product_list_categories[1] === "men") {
        valueGender = "male"
    }
    else if (product?.product_list_categories[1] === "women") {
        valueGender = "female"
    } else {
        valueGender = "unisex";
    }
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product?.product_name,
        "image": [product?.product_images[0] || "https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a"],
        "description": product?.product_description,
        "sku": `MYTHOLOGY-${variantId}`,
        "brand": {
            "@type": "Brand",
            "name": "Carnobon"
        },
        "gender": valueGender,
        "color": color,
        "ageGroup": product?.product_list_categories[1] === "kid" ? "kid" : "adult",
        "shippingWeight": {
            "@type": "QuantitativeValue",
            "value": 0.5, // Assuming a default weight, adjust as necessary
            "unitCode": "KG"
        },
        "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Material",
            "value": product?.product_material || "Cotton"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://carnobon.com/products/${product?.product_slug}`,
            "priceCurrency": "USD",
            "price": product?.product_price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
        }
    }
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
    )
}
export default ProductSchema;

