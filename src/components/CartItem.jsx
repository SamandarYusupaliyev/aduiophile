import { currencyFormat } from "../utils";
import CartButton from "./CartButton";

function CartItem({ item }) {
  return (
    <li className="flex justify-between gap-4 my-6">
      <div className="w-[64px] relative rounded-lg overflow-hidden">
        <img src={item.image.desktop} alt={item.name} classes="w-full" />
      </div>
      <div className="flex flex-col w-1/2 grow justify-center text-left justify-self-start">
        <p className="font-bold uppercase">{item.name}</p>
        <p className="font-bold uppercase text-black/50">
          {currencyFormat(item.price)}
        </p>
      </div>
      <div className="self-center">
        <CartButton itemId={item.id} qty={item.quantity} />
      </div>
    </li>
  );
}

export default CartItem;