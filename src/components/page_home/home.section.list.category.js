import { Grid, Card, CardActionArea, Typography } from "@mui/material";

const categories = [
  { name: "Quần", count: 5866 },
  { name: "Áo Sweater", count: 1189 },
  { name: "Áo Hoodie", count: 2966 },
  { name: "Áo Sơ Mi", count: 4284 },
  { name: "Áo Cổ Trụ", count: 491 },
  { name: "Áo Khoác", count: 2289 },
  { name: "Ba lô, Túi Xách", count: 4505 },
  { name: "Váy", count: 250 },
  { name: "Áo Thun", count: 18760 },
  { name: "Áo Dây", count: 127 },
];

const ListCategory = () => {
  return (
    <section className="container mx-auto p-4">
      <h5 variant="h5" className="mb-4">
        Top danh mục
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-2"
          >
            <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
              <button className="flex flex-col items-center p-4 w-full">
                <div className="mb-2 h-10 w-10 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
                <p className="text-base font-medium text-center">
                  {category.name}
                </p>
                <p className="text-sm text-gray-500 text-center">
                  {category.count}
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListCategory;
