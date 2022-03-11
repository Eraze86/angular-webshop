export class OrderRow {

    orderId: number;
    id: number;
    productId: number;
    product: null;
    amount: number;
    constructor( orderId: number, id: number, productId:number,product: null, amount:number){
        this.productId = productId,
        this.product = null,
        this.amount = amount,
        this.id = 0,
        this.orderId = 0


    }

}