
const UnisexSweatshirt = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Loose fit',
        'Chest pocket, boat neckline, long sleeve',
        'Fabric Weight: 310 g/m².',
        'Because of the characteristics of the fabric, there will be marl after printing.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                Loose fit sweatshirt are cut larger with a roomier fit in the chest and shoulders.When you wear it, you will not feel very constrained.It is made of 100% cotton fabric, which is environmentally friendly, comfortable, highly skin friendly and has a good drape feeling.The chest pocket can be used to place pens, handkerchiefs and other items.A very casual top that pairs well with other clothing such as jeans, boots, etc.
            </p>
            <ul className="list-disc ml-5">
                {
                    list.map((el, index) => (
                        <li key={index}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UnisexSweatshirt;