// import type { GetServerSideProps } from 'next';

import Product from './Product';

function ProductFeed({ products }: Props) {
  return (
    <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            hasPrime={false}
          />
        ))}

      {/**Advert */}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              hasPrime={false}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            hasPrime={false}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
