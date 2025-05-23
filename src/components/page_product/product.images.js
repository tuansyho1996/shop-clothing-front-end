'use client'
import { AppContext } from "@/context/context.app"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"

export default function ImagesProduct({ product }) {
    const [imagesProduct, setImagesProduct] = useState([])
    const { currentImageDetail, setCurrentImageDetail, currentColor, setCurrentColor } = useContext(AppContext)

    useEffect(() => {
        setCurrentImageDetail(product.product_images[0])
        const copyProductColorImages = [...product.product_color_images]
        copyProductColorImages.shift()
        setImagesProduct([...product.product_images, ...copyProductColorImages])
    }, [])
    const handleClickMultipleImages = (image) => {
        const indexColorImage = product?.product_color_images.findIndex(el => el === image)
        if (indexColorImage !== -1) {
            setCurrentColor(product?.product_colors[indexColorImage])
        }
        setCurrentImageDetail(image)
    }
    return (
        <div className="flex flex-col w-full md:w-1/2 gap-1">
            <div className='relative w-full pt-[100%] flex-1 shadow-2xl'>
                <Image
                    src={currentImageDetail ? currentImageDetail : product?.product_images[0]}
                    alt={product?.product_name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100w, 50w"
                    // loading="lazy"
                    priority={true}
                />
            </div>
            <div className="grid grid-cols-7 sm:grid-cols-9 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-1">
                {
                    imagesProduct.length > 0 && imagesProduct.map((image, index) => (
                        <div className="sm:w-[60px]" key={index}>
                            <Image
                                onClick={() => handleClickMultipleImages(image)}
                                key={index}
                                src={image}
                                alt={`Image view ${index + 1} of ${product?.product_name}`}
                                width={70}
                                height={70}
                                style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                                className={`border-2 ${currentImageDetail === image ? 'border-black' : 'border-gray-200'} rounded-sm`}
                                loading="lazy"
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}