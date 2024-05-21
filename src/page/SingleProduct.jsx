import { Menu, FooterElement } from "../components";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addItemToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { currencyFormat } from "../utils";

import data from "../data/db.json";

function SingleProduct() {
  const { slug } = useParams();
  const [productData, setProductData] = useState(null);
  const [cartNum, setCartNum] = useState(1);
  const dispatch = useDispatch();

  const cartDecreaseHandler = () => {
    setCartNum(cartNum - 1);
  };

  const cartIncreaseHandler = () => {
    setCartNum(cartNum + 1);
  };

  const addToCartHandler = () => {
    const cartProduct = {
      id: productData.id,
      price: productData.price,
      quantity: cartNum,
      totalPrice: productData.price,
      name: productData.name,
      image: productData.image,
    };
    dispatch(addItemToCart(cartProduct));
  };

  useEffect(() => {
    const matchedProduct = data.find((product) => product.slug === slug);
    setProductData(matchedProduct);
  }, [slug]);

  if (!productData) {
    return <h2>Loading...</h2>;
  }

  const {
    includes,
    name,
    image,
    description,
    features,
    gallery,
    price,
    others,
  } = productData;

  const equipmentArr = includes;
  const equipment = equipmentArr.map((eq, index) => {
    return (
      <div key={index} className="flex gap-6">
        <span className="font-[500] text-cream text-[15px] leading-[25px]">
          {eq.quantity}x
        </span>
        <p className="font-[500] text-black/50 text-[15px] leading-[25px]">
          {eq.item}
        </p>
      </div>
    );
  });

  const othersArr = others;
  const alsoLike = othersArr.map((el, index) => {
    return (
      <div key={index} className="flex flex-col items-center">
        <img src={el.image.desktop} className="hidden lg:block rounded-[8px]" />
        <h5 className="text-[24px] font-bold leading-normal tracking-[1.4px] uppercase mt-10">
          {el.name}
        </h5>
        <Link to={`../${el.category}/${el.slug}`}>
          <button className="bg-cream py-[15px] w-[160px] mt-8 hover:bg-cream-light text-white uppercase transition-all duration-150">
            See product
          </button>
        </Link>
      </div>
    );
  });

  return (
    <div className="max-container">
      <div className="md:pt-8 lg:pt-[79px]">
        <Link relative="path" to="..">
          <button className="p text-black/50 cursor-pointer hover:text-cream transition-all duration-150">
            Go back
          </button>
        </Link>
      </div>
      <section className="flex md:flex-row md:items-center lg:min-w-[730px] gap-[10%] lg:mt-[56px]">
        <div>
          <img
            src={image.desktop}
            className="lg:block min-w-[443px] w-[540px] rounded-[8px]"
          />
        </div>

        <div className="md:w-[450px]">
          {productData.new && (
            <p className="text-[14px] text-cream tracking-[10px] font-normal uppercase md:mt-0 md:mb-4">
              New Product
            </p>
          )}
          <h2 className="lg:text-[40px] font-bold lg:leading-[44px] lg:tracking-[1.4px] uppercase">
            {name}
          </h2>
          <p className="p text-black/50 md:py-8">{description}</p>
          <h6 className="lg:mb-[47px]">{currencyFormat(price)}</h6>
          <div className="flex gap-4">
            <div className="w-[120px] flex justify-between bg-gray-light p-[15px] items-center">
              <div
                className="text-[14px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer"
                onClick={cartDecreaseHandler}
                disabled={cartNum === 0 || (cartNum < 0 && true)}
              >
                -
              </div>
              <div className="text-[14px] text-black font-bold tracking-[1px]">
                {cartNum}
              </div>
              <div
                className="text-[14px] text-black/30 hover:text-cream font-bold tracking-[1px] cursor-pointer"
                onClick={cartIncreaseHandler}
              >
                +
              </div>
            </div>
            <button
              className="bg-cream py-[15px] w-full hover:bg-cream-light text-white uppercase transition-all duration-150"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <section className="flex lg:flex-row  gap-[125px] lg:py-[160px]">
        <div className="flex flex-col gap-[32px] lg:max-w-[635px]">
          <h3 className="md:text-[32px] font-bold leading-[36px] md:tracking-[1.1px] uppercase">
            Features
          </h3>
          <div
            className="text-black/50"
            dangerouslySetInnerHTML={{
              __html: features.replace(/\n/g, "<br />"),
            }}
          ></div>
        </div>
        <div className="flex lg:flex-col lg:gap-8 whitespace-nowrap">
          <h3 className="md:text-[32px] font-bold leading-[36px] md:tracking-[1.1px] uppercase">
            In the box
          </h3>
          <div className="flex flex-col gap-2">{equipment}</div>
        </div>
      </section>
      <section className="flex md:flex-row md:gap-[18px] lg:gap-8 items-center">
        <div className="flex flex-col lg:gap-8">
          <div>
            <img
              src={gallery.first.desktop}
              className="lg:block rounded-[8px]"
            />
          </div>
          <div>
            <img
              src={gallery.second.desktop}
              className="lg:block rounded-[8px]"
            />
          </div>
        </div>
        <div>
          <img
            src={gallery.third.desktop}
            className="lg:block rounded-[8px]"
          />
        </div>
      </section>
      <section className="flex flex-col items-center lg:py-[160px]">
        <p className="md:text-[32px] font-bold leading-[36px] md:tracking-[1.1px] uppercase">
          You may also like
        </p>
        <div className="flex md:flex-row items-center lg:gap-[30px] lg:mt-16">
          {alsoLike}
        </div>
      </section>
      <section>
        <Menu />
      </section>
      <FooterElement />
    </div>
  );
}

export default SingleProduct;