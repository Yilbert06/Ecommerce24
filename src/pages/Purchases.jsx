import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProdPurchase from '../components/Purchases/ProdPurchase'

const Purchases = () => {

    const {purchases, getAllProductsPurchased} = usePurchases()

useEffect(() => {
  getAllProductsPurchased()

}, [])


  return (
    <div className='purchases1'>
       <div className='purchases'>
    {
        purchases?.map(prodPurchase => (
            <ProdPurchase
            key={prodPurchase.id}
            prodPurchase={prodPurchase}/>
        ))
    }
    </div>
     </div>
  )
}

export default Purchases