import { getTopCategory } from "@/services/service.category";
import Image from "next/image";
import Link from "next/link";

const ListCategory = async () => {
  const topCategories = await getTopCategory();
  return (
    <section className="container mx-auto p-4">
      <h5 variant="h5" className="mb-4">
        Top danh mục
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {topCategories.map((category, index) => (
          <div
            key={index}
            className="p-2"
          >
            <Link href={`/category/${category.top_ct_categories.map(el => el).join('&')}`} passHref>
              <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
                <button className="flex flex-col items-center p-4 w-full">
                  <div className="mb-2 h-20 w-20 bg-gray-300 rounded-full">
                    <Image
                      src={category.top_ct_image[0]}
                      alt={category.top_ct_name}
                      width={80}
                      height={80}
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div> {/* Placeholder for icon */}
                  <p className="text-base font-medium text-center">
                    {category.top_ct_name}
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    {category.count}
                  </p>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListCategory;
