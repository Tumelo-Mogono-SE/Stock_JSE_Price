const stockItem = {
    stockOne: {
        name: document.querySelector("#stock-nameOne"),
        price: document.querySelector("#stock_priceOne")
    },
    stockTwo: {
        name: document.querySelector("#stock-nameTwo"),
        price: document.querySelector("#stock_priceTwo")

    },
    stockThree: {
        name: document.querySelector("#stock-numberThree"),
        price: document.querySelector("#stock_priceThree")
    }
};

try{
    const res = await fetch();
    if(!res.ok){
        throw Error("Something went wrong.")
    }
    const data = await res.json()

}catch(err){

}