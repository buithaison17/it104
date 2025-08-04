const products = [
    {name: "A", price: 100, discount: 0.1, quantity: 2},
    {name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount:{minQuantity: 2, extraDiscount: 0.05}},
    {name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount:{minQuantity: 3, extraDiscount: 0.1}},
]

const productDetail = {};

const getOrderSummary = (products) => {
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    for(product of products){
        const {name, price, discount, quantity, bulkDiscount = {}} = product;
        const totalPrice = quantity * price;
        totalBeforeDiscount += totalPrice;
        let totalDiscountRate = discount;
        if(bulkDiscount && quantity >= bulkDiscount.minQuantity) totalDiscountRate += bulkDiscount.extraDiscount;
        totalAfterDiscount += totalPrice * (1 - totalDiscountRate);
        const finalPrice = price * (1- totalDiscountRate);
        const subTotal = finalPrice * quantity;
        if(!("details" in productDetail)) productDetail.details = [];
        productDetail.details.push({name, quantity, subTotal, finalPrice});
    }
    productDetail.totalBeforeDiscount = totalBeforeDiscount;    
    productDetail.totalAfterDiscount = totalAfterDiscount;
};

getOrderSummary(products);

console.log(productDetail);