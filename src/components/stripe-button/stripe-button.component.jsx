import React from "react"

import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51HDD3hE1Ou1Fb0CarW08XlM9yZw3F1S89MfbITzYQOVy6ey1xSxePasn6mzjq27gBxJv2wOpXi2qeC9zODpjNsJO00bvChitLS"
  const onToken = token => {
    console.log(token)
    alert("Payment successful")
  }

  return <StripeCheckout label="Pay now" name="Clothing Store Ltd." billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`} amount={priceForStripe} panelLabel="Pay now" token={onToken} stripeKey={publishableKey} />
}
export default StripeCheckoutButton
