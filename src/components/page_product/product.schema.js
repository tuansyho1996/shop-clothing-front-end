'use client'
const ProductSchema = ({ colorsObject, listSizes, product }) => {
    const hasVariant = [];
    const findSize = listSizes.find(el => el.name.every(item => product?.product_list_categories.includes(item)))
    const variantId = typeof product?._id === 'string'
        ? product._id.slice(-6).toUpperCase()
        : product._id?.toString().slice(-6).toUpperCase();
    if (findSize) {
        const colors = product.product_colors.map(color => colorsObject.find(el => el.hex === color)?.name || color);
        colors.forEach(color => {
            findSize.values.forEach(size => {
                hasVariant.push({
                    "@type": "Product",
                    sku: `MYTHOLOGY-${color.toUpperCase().replace(/\s+/g, '-')}-${size}-${variantId}`,
                    color: color,
                    size: size,
                    offers: {
                        "@type": "Offer",
                        price: product?.product_price?.toFixed(2),
                        priceCurrency: "USD",
                        availability: "https://schema.org/InStock"
                    }
                });
            });
        });

    }
    console.log("categories", product?.product_list_categories)
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
        "name": product.product_name,
        "image": [product.product_images[0] || "https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a"],
        "description": product.product_description,
        "sku": `MYTHOLOGY-MAIN-${variantId}`,
        "brand": {
            "@type": "Brand",
            "name": "Carnobon"
        },
        "gender": valueGender,
        "ageGroup": product?.product_list_categories[1] === "kid" ? "kid" : "adult",
        "offers": {
            "@type": "Offer",
            "url": `https://carnobon.com/product/${product.product_slug}`,
            "priceCurrency": "USD",
            "price": product?.product_price?.toFixed(2),
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31",
            "shippingDetails": [
                {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": 4.99,
                        "currency": "USD"
                    },
                    "shippingLabel": "Standard Shipping (under $100)",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "eligibleTransactionVolume": {
                            "@type": "PriceSpecification",
                            "minPrice": 0,
                            "maxPrice": 99.99
                        }
                    },
                    "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 0,
                            "maxValue": 2,
                            "unitCode": "d" // days
                        },
                        "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 10,
                            "maxValue": 15,
                            "unitCode": "d"
                        }
                    },
                    "shippingWeight": {
                        "@type": "QuantitativeValue",
                        "value": 0.5,
                        "unitCode": "kg" // hoặc "g" nếu bạn muốn gram
                    }
                },
                {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": 0,
                        "currency": "USD"
                    },
                    "shippingLabel": "Free Shipping (over $100)",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD",
                        "eligibleTransactionVolume": {
                            "@type": "PriceSpecification",
                            "minPrice": 100
                        }
                    },
                    "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 0,
                            "maxValue": 2,
                            "unitCode": "d" // days
                        },
                        "transitTime": {
                            "@type": "QuantitativeValue",
                            "minValue": 10,
                            "maxValue": 15,
                            "unitCode": "d"
                        }
                    },
                    "shippingWeight": {
                        "@type": "QuantitativeValue",
                        "value": 0.5,
                        "unitCode": "kg" // hoặc "g" nếu bạn muốn gram
                    }
                },
            ]
        },
        hasVariant: hasVariant,
        "additionalProperty": {
            "@type": "PropertyValue",
            "name": "Material",
            "value": product?.product_material || "Cotton"
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

