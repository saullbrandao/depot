import React from 'react'
import { CheckPayType } from './CheckPayType'
import { CreditCardPayType } from './CreditCardPayType'
import { NoPayType } from './NoPayType'
import { PurchaseOrderPayType } from './PurchaseOrderPayType'

export const PayTypeSelector = () => {
  const [selectedPayType, setSelectedPayType] = React.useState(null)

  const onPayTypeSelected = event => {
    setSelectedPayType(event.target.value)
  }

  let PayTypeCustomComponent = NoPayType

  if (selectedPayType == 'Credit card') {
    PayTypeCustomComponent = CreditCardPayType
  } else if (selectedPayType == 'Check') {
    PayTypeCustomComponent = CheckPayType
  } else if (selectedPayType == 'Purchase order') {
    PayTypeCustomComponent = PurchaseOrderPayType
  }

  return (
    <>
      <div className="field">
        <label htmlFor="order_pay_type">Pay type</label>
        <select onChange={onPayTypeSelected} name="order[pay_type]">
          <option value="">Select a payment method</option>
          <option value="Check">Check</option>
          <option value="Credit card">Credit card</option>
          <option value="Purchase order">Purchase order</option>
        </select>
      </div>
      <PayTypeCustomComponent />
    </>
  )
}
