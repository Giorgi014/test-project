import React from 'react'
import StripePayments from '../StripePayments/StripePayments';
import './Main.scss'

const Main: React.FC = () => {
  return (
    <main>
        <StripePayments/>
    </main>
  )
}

export default Main;