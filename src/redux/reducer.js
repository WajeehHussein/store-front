const initialeState = {
    cart: []
};

const handleCart = (state = initialeState, action) => {
    console.log('action', action);
    const { type, payload } = action;
    let cart = state.cart;
    switch (type) {
        case "ADD":
            // check if Product is Already exist
            const exist = cart.find(x => x.id === payload.id);
            if (exist) {
                //increase
                return cart.map(x => x.id === payload.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                return (
                    [...cart, { ...payload, qty: 1 }]
                )
            }
        case "DELETE":
            const exist1 = cart.find(x => x.id === payload.id);
            if (exist1.qty === 1) {
                return cart.filter(x => x.id === exist1.id)
            } else {
                return cart.map(x => x.id === payload.id ? { ...x, qty: x.qty - 1 } : x);
            }


        default:
            return state;

    }
}



export default handleCart;