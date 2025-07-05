import { NextResponse } from 'next/server';
import { getProduct } from '@/services/service.product'; // hàm lấy toàn bộ sản phẩm

export async function GET() {
    const products = await getProduct();
    const colorsObject = [
        { name: "Midnight Blue", hex: "#2C3E50" }, //
        { name: "Steel Blue", hex: "#4682B4" }, //
        { name: "Dark Slate", hex: "#2F4F4F" }, //
        { name: "Wine", hex: "#722F37" }, //
        { name: "Forest Green", hex: "#2E4E3F" }, //
        { name: "Smoky Gray", hex: "#505050" }, //
        { name: "white", hex: "#ffffff" }, //
        { name: "Light Gray", hex: "#D3D3D3" }, // Light Gray
        { name: "Platinum", hex: "#E5E4E2" }, // Platinum
        { name: "Champagne", hex: "#F7E7CE" }, // Champagne
        { name: "Lavender Gray", hex: "#C4C3D0" }, // Lavender Gray
        { name: "Powder Blue", hex: "#B0E0E6" }, // Powder Blue
        { name: "Jet Black", hex: "#000000" }, // Jet Black
        { name: "Gunmetal", hex: "#2A3439" }, // Gunmetal
        { name: "Onyx", hex: "#353839" }, // Onyx
    ]
    const listSizes = [
        {
            name: ['unisex', 'hoodie'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"]
        },
        {
            name: ['unisex', 'zip-hoodie'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"]
        },
        {
            name: ['unisex', 'sweatshirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'hooded-vest'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['unisex', 'short-pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['men', 't-shirt'],
            values: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"]
        },
        {
            name: ['women', 't-shirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "9XL"]
        },
        {
            name: ['kid', 'hoodie'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 't-shirt'],
            values: ["XS", "S", "M", "L", "XL", "2XL",]
        },
        {
            name: ['kid', 'sweatshirt'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 'zip-hoodie'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
        {
            name: ['kid', 'pant'],
            values: ["S", "M", "L", "XL", "2XL", "3XL",]
        },
    ]
    const xmlItems = products.map(product => {
        const color = colorsObject?.find(c => c.hex === product?.product_colors[0])?.name || "Unknown Color";
        const sizes = listSizes.find(el => el.name.every(item => product?.product_list_categories.includes(item)))?.values?.join(', ');

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
        const ageGroup = product?.product_list_categories[1] === "kid" ? "kid" : "adult";

        return `
        <item>
            <g:id>${product._id}</g:id>
            <g:title><![CDATA[${product.product_name}]]></g:title>
            <g:description><![CDATA[${product.product_description}]]></g:description>
            <g:link>https://carnobon.com/products/${product.product_slug}</g:link>
            <g:image_link>${product.product_images?.[0]}</g:image_link>
            <g:brand>Carnobon</g:brand>
            <g:price>${product.product_price} USD</g:price>
            <g:availability>in stock</g:availability>
            <g:condition>new</g:condition>
            <g:gender>${valueGender}</g:gender>
            <g:age_group>${ageGroup}</g:age_group>
            <g:color>${color}</g:color>
            <g:size>${sizes}</g:size>
            <g:shipping_weight unit="kg">0.5</g:shipping_weight>
        </item>`;
    }).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0"
         xmlns:g="http://base.google.com/ns/1.0">
      <channel>
        <title>Carnobon</title>
        <link>https://carnobon.com</link>
        <description>Product Feed for Carnobon</description>
        ${xmlItems}
      </channel>
    </rss>`;

    return new NextResponse(xml, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
