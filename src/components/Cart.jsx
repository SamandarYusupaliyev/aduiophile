import { useDispatch, useSelector } from "react-redux"
import { clearCart } from '../features/cart/cartSlice'
import CartItem from "./CartItem"
import { Fragment } from "react"
import { currencyFormat } from "../utils"
import { Link } from "react-router-dom"

function Cart() {
    const cart  = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const removeAllHandler = () => {
        dispatch(clearCart())
    }

  return (
    <div className="max-container mx-auto px-5 lg:px-0 relative">
      <div className="card p-8 absolute bg-white rounded-lg w-52 md::w-auto md:min-w-[24rem]  ">
        <div className="flex justify-between">
          <p className="uppercase text-black font-bold text-md">Cart {cart.totalQuantity > 0 ? `(${cart.totalQuantity})` : ''}</p>
          {cart.totalQuantity > 0 && <button className="border-0 text-black/50 underline" onClick={removeAllHandler}>Remove all</button>}
        </div>
        {cart.totalQuantity <= 0 && <p className="text-black text-md mt-8">There are no items added in cart.</p> }
        <ul className="mt-8">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>
        {cart.totalQuantity > 0 && (
          <Fragment>
            <div className="flex justify-between">
              <p className="text-black/50 uppercase">Total</p>
              <p className="font-bold">{currencyFormat(cart.totalCartPrice)}</p>
            </div>
            <Link to="/checkout" className="bg-cream text-center mt-6 py-[15px] w-full hover:bg-cream-light text-white uppercase transition-all duration-150">
              Checkout
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Cart