import React, { useEffect, useState } from 'react'
import "./MyOrders.css"

function MyOrders() {

    const [record, setRecord] = useState([])

    useEffect(() => {
        fetch('/orders')
        .then((response) => response.json())
        .then((data) => {
            setRecord(data)
            
        })
    }, [])
  return (
      <div className='history_container'>
        <h2>My Orders</h2>
        <div className='history_table'>
          <table className='table'>
            <thead>
              <th>Order Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment</th>
            </thead>
            <tbody>
              {record.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.total_amount.toFixed(2)}</td>
                  <td>{order.order_date}</td>
                  <td>{order.status == 0 ?('pending'):('paid')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default MyOrders