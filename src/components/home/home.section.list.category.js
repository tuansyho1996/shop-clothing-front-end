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
      <Typography variant="h5" gutterBottom className="mb-4">
        Top danh mục
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid
            item
            xs={6} // 2 items per row on mobile
            sm={4} // 3 items per row on small screens
            md={3} // 4 items per row on medium screens
            lg={2.4} // 5 items per row on large screens
            key={index}
          >
            <Card>
              <CardActionArea className="flex flex-col items-center p-4">
                <div className="mb-2 h-10 w-10 bg-gray-300 rounded-full"></div> {/* Placeholder for icon */}
                <Typography variant="body1" align="center">
                  {category.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {category.count} sản phẩm
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ListCategory;
