function addToDb(id, count) {
    // empty object is a truthy value (set to the varibale shoppingCart when shopping-cart is null )
    //  null is a falsy value (returned when local storage has no Item named shopping-cart)
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || {};
    if (shoppingCart[id]) {
        shoppingCart[id] = count;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
    else {
        shoppingCart[id] = 1;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}
function addToDbWithoutCount(id) {
    // empty object is a truthy value (set to the varibale shoppingCart when shopping-cart is null )
    //  null is a falsy value (returned when local storage has no Item named shopping-cart)
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || {};
    if (shoppingCart[id]) {
        const count = parseInt(shoppingCart[id]);
        shoppingCart[id] = count;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
    else {
        shoppingCart[id] = 1;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


function removeFromDb(id) {
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
    //if not found then isExists is undefined
    //console.log(isExits, id);
    if (shoppingCart[id]) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const clearTheDd = () => {
    localStorage.removeItem('shopping-cart');
}

const getDataFromDb = () => {
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart')) || {};
    return shoppingCart;
}


export { addToDb, removeFromDb, clearTheDd, getDataFromDb, addToDbWithoutCount };