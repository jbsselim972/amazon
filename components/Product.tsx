import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlices';

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }: Products) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };

    // Sending the product as an action to REDUX Store
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative z-30 m-5 flex flex-col rounded-md bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        className="hover:scale-110 hover:transform hover:transition hover:duration-150 hover:ease-out"
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>

      <div className="mb-5">
        <span> {price.toFixed(2)} €</span>
      </div>

      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="buttonam mt-auto">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
