import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { totalmem } from 'os';
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header';
import { selectItems, selectTotal } from '../slices/basketSlices';

function Checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Your cart</title>
      </Head>
      <Header />

      <main className="mx-auto max-w-screen-2xl lg:flex">
        {/**Left */}
        <div className="m-5 flex-grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="border-b pb-4 text-3xl">
              {items.length === 0
                ? 'Your Amazon Basket is empty.'
                : 'Shopping Basket'}
            </h1>

            {items.map((item: Products, i: number) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/**Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{' '}
                <span className="font-bold">{total.toFixed(2)} €</span>
              </h2>

              <button
                disabled={!session}
                className={`buttonam mt-2 whitespace-nowrap ${
                  !session &&
                  'cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
