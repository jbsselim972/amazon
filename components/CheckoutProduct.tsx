import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlices';

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  image,
  category,
  hasPrime,
}: Products) {
  const dispatch = useDispatch();
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

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <span>{price.toFixed(2)} €</span>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="my-auto flex flex-col space-y-2 justify-self-end">
        <button className="buttonam" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="buttonam" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
