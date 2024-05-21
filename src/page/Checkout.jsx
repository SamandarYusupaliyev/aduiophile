import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import cashIcon from "/assets/checkout/icon-cash-on-delivery.svg";
import orderLogo from "/assets/checkout/icon-order-confirmation.svg";
import { useState } from "react";
import { currencyFormat } from '../utils'

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("e-Money");

  const handlePaymentMethod = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\+\d{1,3} \d{3}-\d{3}-\d{4}$|^\d{9}$/.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};

    if (formData.name.trim() === "") {
      newFormErrors.name = "Name is required";
    }
    if (formData.address.trim() === "") {
      newFormErrors.address = "Address is required";
    }
    if (formData.zipCode.trim() === "") {
      newFormErrors.zipCode = "ZIP Code is required";
    }
    if (formData.city.trim() === "") {
      newFormErrors.city = "City is required";
    }
    if (formData.country.trim() === "") {
      newFormErrors.country = "Country is required";
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required";
    } else {
      const emailIsValid = validateEmail(formData.email);
      if (!emailIsValid) {
        newFormErrors.email = "Invalid email format";
      }
    }

    if (formData.phoneNumber.trim() === "") {
      newFormErrors.phoneNumber = "Phone number is required";
    } else {
      const phoneNumberIsValid = validatePhoneNumber(formData.phoneNumber);
      if (!phoneNumberIsValid) {
        newFormErrors.phoneNumber = "Invalid phone number format";
      }
    }

    if (selectedPaymentMethod === "e-Money") {
      if (formData.eMoneyNumber.trim() === "") {
        newFormErrors.eMoneyNumber = "Number is required";
      }
      if (formData.eMoneyPin.trim() === "") {
        newFormErrors.eMoneyPin = "PIN is required";
      }
    }

    setFormErrors(newFormErrors);

    const isFormInvalid = Object.values(newFormErrors).some(
      (error) => error !== ""
    );

    if (!isFormInvalid) {
      setOrder(true);
    }
  };

  const cartItems = cart.items.map((item, index) => {
    return (
      <div key={index} className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <img
              src={item.image.desktop}
              className="w-16 h-16 rounded-lg"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-bold leading-6 text-black">
              {item.name}
            </p>
            <p>{currencyFormat(item.price)}</p>
          </div>
        </div>
        <div className="flex p-4 items-center">
          <p className="text-base font-bold text-black/50">x{item.quantity}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-light">
      <div className="pt-[79px] max-container">
        <div>
          <Link relative="path" to="..">
            <button className="text-[15px] font-[500] leading-[25px] text-black/50 cursor-pointer hover:text-cream transition-all duration-150">
              Go Back
            </button>
          </Link>
        </div>
        <div className="mt-[38px] pb-[140px] flex gap-8">
          <section className="bg-white p-12 rounded-lg w-full">
            <h3 className=" text-3xl font-bold leading-[36px] tracking-[1.1px] uppercase">
              Checkout
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mt-10">
                <p className="text-cream text-sm font-bold uppercase leading-[25px] tracking-wide">
                  Billing Details
                </p>
                <div className="mt-4 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between">
                        <label
                          className={`text-xs font-bold ${formErrors.name ? "text-red-600" : "text-black"
                            }`}
                        >
                          Name
                        </label>
                        <p className="text-red-600 text-xs font-medium">
                          {formErrors.name}
                        </p>
                      </div>
                      <input
                        className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.name ? "border-red-600" : ""
                          }`}
                        type="text"
                        name="name"
                        placeholder="Alexei Ward"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between">
                        <label
                          className={`text-xs font-bold ${formErrors.email ? "text-red-600" : "text-black"
                            }`}
                        >
                          Email Adress
                        </label>
                        <p className="text-red-600 text-xs font-medium">
                          {formErrors.email}
                        </p>
                      </div>
                      <input
                        className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.email ? "border-red-600" : ""
                          }`}
                        type="text"
                        name="email"
                        placeholder="alexei@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <label
                        className={`text-xs font-bold ${formErrors.phoneNumber ? "text-red-600" : "text-black"
                          }`}
                      >
                        Phone number
                      </label>
                      <p className="text-red-600 text-xs font-medium">
                        {formErrors.phoneNumber}
                      </p>
                    </div>
                    <input
                      className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] w-1/2 px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.phoneNumber ? "border-red-600" : ""
                        }`}
                      type="text"
                      name="phoneNumber"
                      placeholder="+1 202-555-0136"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[53px]">
                <p className="text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide">
                  Shipping Info
                </p>
                <div className="mt-4 flex flex-col gap-6">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <label
                        className={`text-xs font-bold ${formErrors.address ? "text-red-600" : "text-black"
                          }`}
                      >
                        Address
                      </label>
                      <p className="text-red-600 text-xs font-medium">
                        {formErrors.address}
                      </p>
                    </div>
                    <input
                      className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.address ? "border-red-600" : ""
                        }`}
                      type="text"
                      name="address"
                      placeholder="1137 Williams Avenue"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex xs:flex-col md:flex-row items-center gap-4">
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between">
                        <label
                          className={`text-xs font-bold ${formErrors.zipCode ? "text-red-600" : "text-black"
                            }`}
                        >
                          ZIP Code
                        </label>
                        <p className="text-red-600 text-xs font-medium">
                          {formErrors.zipCode}
                        </p>
                      </div>
                      <input
                        className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.zipCode ? "border-red-600" : ""
                          }`}
                        type="text"
                        name="zipCode"
                        placeholder="10001"
                        maxLength={5}
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between">
                        <label
                          className={`text-xs font-bold ${formErrors.city ? "text-red-600" : "text-black"
                            }`}
                        >
                          City
                        </label>
                        <p className="text-red-600 text-xs font-medium">
                          {formErrors.city}
                        </p>
                      </div>
                      <input
                        className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.city ? "border-red-600" : ""
                          }`}
                        type="text"
                        name="city"
                        placeholder="New York"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <label
                        className={`text-xs font-bold ${formErrors.country ? "text-red-600" : "text-black"
                          }`}
                      >
                        Country
                      </label>
                      <p className="text-red-600 text-xs font-medium">
                        {formErrors.country}
                      </p>
                    </div>
                    <input
                      className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] w-1/2 bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.country ? "border-red-600" : ""
                        }`}
                      type="text"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[61px]">
                <div className="flex items-center justify-between">
                  <p className="text-cream text-[13px] font-bold uppercase leading-[25px] tracking-wide">
                    Payment Details
                  </p>
                </div>

                <div className="flex xs:flex-col xs:gap-[17px] md:gap-0 md:flex-row mt-4 justify-between">
                  <label className="text-black text-xs font-bold flex-1">
                    Payment Methods
                  </label>
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="flex items-center gap-4 p-[18px] rounded-lg border border-stone-300 hover:border-cream transition-all duration-150">
                      <input
                        type="radio"
                        className="cursor-pointer checked:accent-cream checked:border-cream"
                        name="payment"
                        value="e-Money"
                        checked={selectedPaymentMethod === "e-Money"}
                        onChange={handlePaymentMethod}
                      />
                      <label className="text-black text-xs font-bold">
                        e-Money
                      </label>
                    </div>
                    <div className="flex items-center gap-4 p-[18px] rounded-lg border border-stone-300 hover:border-cream transition-all duration-150">
                      <input
                        type="radio"
                        className="cursor-pointer checked:accent-cream checked:border-cream"
                        name="payment"
                        value="Cash on Delivery"
                        checked={selectedPaymentMethod === "Cash on Delivery"}
                        onChange={handlePaymentMethod}
                      />
                      <label className="text-black text-xs font-bold">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {selectedPaymentMethod === "e-Money" && (
                <div className="flex xs:flex-col md:flex-row items-center gap-4 mt-4">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                      <label
                        className={`text-xs font-bold ${formErrors.eMoneyNumber
                          ? "text-red-600"
                          : "text-black"
                          }`}
                      >
                        e-Money Number
                      </label>
                      <p className="text-red-600 text-xs font-medium">
                        {formErrors.eMoneyNumber}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="238521993"
                      className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.eMoneyNumber ? "border-red-600" : ""
                        }`}
                      maxLength={9}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                      <label
                        className={`text-xs font-bold ${formErrors.eMoneyPin ? "text-red-600" : "text-black"
                          }`}
                      >
                        e-Money PIN
                      </label>
                      <p className="text-red-600 text-xs font-medium">
                        {formErrors.eMoneyPin}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="6891"
                      className={`placeholder:text-[14px] placeholder:text-black/40 placeholder:font-bold placeholder:leading-[-0.25px] text-black font-bold py-[18px] px-[24px] bg-white rounded-lg border border-stone-300 focus:outline-cream caret-cream mt-[9px] ${formErrors.eMoneyPin ? "border-red-600" : ""
                        }`}
                      maxLength={4}
                    />
                  </div>
                </div>
              )}
              {selectedPaymentMethod === "Cash on Delivery" && (
                <div className="mt-[30px] flex xs:flex-col md:flex-row items-center gap-8">
                  <img src={cashIcon} />
                  <p className="text-black/50 text-[15px] font-medium leading-[25px]">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </form>
          </section>
          <section className="rounded-lg p-8 h-full bg-white">
            <div>
              <h6 className="text-[24px] font-bold leading-normal tracking-[1.4px] uppercase text-black">
                Summary
              </h6>
            </div>
            <div className="flex flex-col items-center gap-6 py-8 overflow-y-auto max-h-[304px] xs:w-full lg:w-[284px]">
              {cartItems}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-black/50 uppercase">
                  Total
                </p>
                <h6 className="font-bold text-black text-[18px] leading-normal tracking-[1.3px] uppercase">
                  {currencyFormat(cart.totalCartPrice)}
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-black/50 uppercase">
                  Shipping
                </p>
                <h6 className="font-bold text-black text-[18px] leading-normal tracking-[1.3px] uppercase">
                  {currencyFormat(cart.shippingCost)}
                </h6>
              </div>
              <div className="flex items-center justify-between">
                <p className='text-[15px] font-[500] leading-[25px] text-black/50 uppercase'>
                  Vat (Included)
                </p>
                <h6 className="font-bold text-black text-[18px] leading-normal tracking-[1.3px] uppercase">
                  {currencyFormat(Math.floor(cart.totalCartPrice * 0.2))}
                </h6>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <p className="text-[15px] font-[500] leading-[25px] text-black/50 uppercase">
                  Grand Total
                </p>
                <h6 className="font-bold text-cream text-[18px] leading-normal tracking-[1.3px] uppercase">
                  {currencyFormat(Math.floor(cart.totalCartPrice + cart.shippingCost + cart.totalCartPrice * 0.2))}
                </h6>
              </div>
            </div>
            <div className="mt-8">
              <button onClick={handleFormSubmit} className="w-full py-[15px] uppercase bg-cream text-white hover:bg-cream-light transition-all duration-150">
                Continue & Pay
              </button>
            </div>
          </section>
        </div>
        {order && (
          <>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-[50]' />
            <section className='fixed lg:left-[35%] md:top-[100px] bg-white xs:w-auto md:w-[540px] h-[475px] flex flex-col justify-center md:p-12 z-50 rounded-lg'>
              <div>
                <img src={orderLogo} />
              </div>
              <h3 className='text-[32px] font-bold leading-[36px] tracking-[1.1px] uppercase md:mt-[33px]'>
                Thank you for your order
              </h3>
              <p className='p text-black/50 xs:mt-4 md:mt-6'>
                You will receive an email confirmation shortly.
              </p>
              <div className='flex xs:flex-col md:flex-row items-center xs:mt-4 md:mt-[33px] w-full'>
                <div className='bg-gray-light xs:rounded-tl-lg xs:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg flex md:flex-1 flex-col gap-2 xs:max-h-[92px] md:max-h-[280px] w-full overflow-y-auto'>
                  {cartItems}
                </div>
                <div className='bg-stone xs:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg xs:rounded-br-lg flex md:flex-1 gap-2 xs:h-[92px] md:h-full flex-col justify-center w-full'>
                  <p className='text-[15px] font-[500] leading-[25px] text-white/50 uppercase ml-8'>
                    Grand Total
                  </p>
                  <h6 className='font-bold leading-[25px] ml-8 text-white'>
                    {currencyFormat(Math.floor(cart.totalCartPrice + cart.shippingCost + cart.totalCartPrice * 0.2))}
                  </h6>
                </div>
              </div>
              <Link to='/' className='w-full'>
                <button className='bg-cream py-[15px] hover:bg-cream-light text-white uppercase transition-all duration-150 mt-[46px] w-full'>
                  Back to Home
                </button>
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;