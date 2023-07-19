import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const relative = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(process.env.NEXT_PUBLIC_BILLBOARD_ID!);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-4 sm:px-6 lg:px-8">
          <ProductList products={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
