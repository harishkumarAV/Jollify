import React from 'react';
import './YourOrders.css'; 

const YourOrders = () => {
  const orders = [
    {
      id: 1,
      themeName: 'Decade Dance Party',
      foodPackageName: 'BBQ World',
      date: '2024-03-19',
      name: 'Harish'
    },
    {
      id: 2,
      themeName: 'Unicorn Magic',
      foodPackageName: 'Dessert Buffet',
      date: '2024-04-15',
      name: 'Duke'
    }
  ];

  const handleEdit = (id) => {
    console.log(`Editing order with ID ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting order with ID ${id}`);
  };

  return (
    <div className="orders-container">
      <h4 className="orders-heading">Your Orders</h4>
      {orders.length > 0 ? (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h4 className="order-title">Order {index + 1}</h4>
              <p><strong>Theme Name:</strong> {order.themeName}</p>
              <p><strong>Food Package Name:</strong> {order.foodPackageName}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <div className="order-actions">
                <button onClick={() => handleEdit(order.id)} className={`edit-button-${order.id}`}>Edit</button>
                <button onClick={() => handleDelete(order.id)} className={`delete-button-${order.id}`}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-orders-message">No orders found.</p>
      )}
    </div>
  );
};

export default YourOrders;
