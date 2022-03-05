export class Order{
    id: string;
    companyId: string;
    created: string;
    createdBy: string;
    paymentMethod: string;
    Paypal: string;
    totalPrice: string;
    status: string;
    orderRows: string;

    constructor(id:string,
        companyId: string,
        created: string,
        createdBy: string,
        paymentMethod: string,
        Paypal: string,
        totalPrice: string,
        status: string,
        orderRows: string,){

            this.id = id,
            this.companyId = companyId,
            this.created = created,
            this.createdBy = createdBy,
            this.paymentMethod =  paymentMethod,
            this.Paypal = Paypal,
            this.totalPrice = totalPrice,
            this.status = status,
            this.orderRows = orderRows

        }

}