import './Orders.css';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../provider/StateProvider';
import Order from './order/Order';

function Orders() {

    const [{ user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ));
        }
        else {
            setOrders([]);
        }
    }, [user]);


    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders-order">
                {
                    orders?.map((order, _) => (
                        <Order order={order} key={_} />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;