import { ChevronDown } from "lucide-react";
import { ButtonCheckout } from "./btn/button";
import "./checkout.css";
import { Products } from "./products/products";

export function Checkout() {
  return (
    <>
      <article className="content__checkout-products">
        <div className="bx--titleCheckout-and-count">
          <span className="checkout">Checkout</span>
          <span className="count">3 items</span>
        </div>

        <section className="content--products__and__formInfo">
          <article className="bx-products">
            <section className="section-products">
              <Products
                ImageProduct={"/resources/Gold@2x.png"}
                NameProduct={"Iphone 12 Pro"}
                ColorProduct={"Gold"}
                PriceProduct={"999.00"}
              />
              <Products
                ImageProduct={"/resources/Apple-watchx2.png"}
                NameProduct={"Apple Watch"}
                ColorProduct={"Blue"}
                PriceProduct={"399.00"}
              />
              <Products
                ImageProduct={"/resources/iMac@2x.png"}
                NameProduct={"iMac"}
                ColorProduct={"Green"}
                PriceProduct={"1999.00"}
              />
            </section>
            <span className="lineSeparator"></span>

            <section className="bx-section-couponCode__and__totalPrice">
              <div className="bx-input--and--btn-applyCoupon">
                <input
                  type="text"
                  className="introduceCouponCode"
                  placeholder="Enter coupon code"
                />

                <div className="bx-btnCoupon">
                  <ButtonCheckout ValueText={"Apply Coupon"} />
                </div>
              </div>

              <article className="bx--subTotal-tax-total">
                <ul className="prices">
                  <li className="items--namePrices--and-numberPrices">
                    Sub total
                  </li>
                  <li className="items--namePrices--and-numberPrices">Tax</li>
                  <li className="items--namePrices--and-numberPrices">Total</li>
                </ul>
                <ul className="prices">
                  <li className="items--namePrices--and-numberPrices">
                    $2597.00
                  </li>
                  <li className="items--namePrices--and-numberPrices">
                    $623.28
                  </li>
                  <li className="items--namePrices--and-numberPrices">
                    $3220.28
                  </li>
                </ul>
              </article>
            </section>
          </article>
          <form className="bx-formulary">
            <span className="contactInfo">Contact Information</span>

            <article className="sections-inpust--ands--label">
              <div className="bx-label-and-input__form">
                <label className="formLabel">First & Last name</label>
                <input
                  type="text"
                  className="input--contactInfo"
                  placeholder="Enter first & last name"
                />
              </div>

              <div className="bx-label-and-input__form">
                <label className="formLabel">Email Address</label>
                <input
                  type="text"
                  className="input--contactInfo"
                  placeholder="Enter email address"
                />
              </div>

              <section className="content__labelsInputs-modeFlex">
                <div className="bx-label-and-input__form">
                  <label className="formLabel">Country</label>

                  <section className="bx-selectedCountry">
                    <select className="input--contactInfo stylesSelect">
                      <option value="" className="selectedCountry">
                        Finland
                      </option>
                      <option value="" className="selectedCountry">
                        Colombia
                      </option>
                      <option value="" className="selectedCountry">
                        Brasil
                      </option>
                    </select>

                    <div className="bx-arrowDown">
                      <ChevronDown />
                    </div>
                  </section>
                </div>

                <div className="bx-label-and-input__form">
                  <label className="formLabel">Postal Code</label>
                  <input
                    type="text"
                    className="input--contactInfo"
                    placeholder="00270"
                    maxLength={5}
                  />
                </div>
              </section>

              <div className="bx-btn-continue">
                <ButtonCheckout ValueText={"Continue"} />
              </div>
            </article>
          </form>
        </section>
      </article>
    </>
  );
}
