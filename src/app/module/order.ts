


export class Order{
    id: number;
    companyId: number;
    created: Date;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: string;
    orderRows: string;

    constructor(
 
        id:number,
        payment: string,
        totalPrice: number,
        status: string,
        orderRows: string){

            this.id = id,
            this.companyId = 39,
            this.created = new Date,
            this.createdBy =
            this.paymentMethod =  payment,
       
            this.totalPrice = totalPrice,
            this.status = status,
            this.orderRows = orderRows

        }

}