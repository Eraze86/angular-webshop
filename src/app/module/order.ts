import { Users } from "./users";



export class Order{
    id: number;
    companyId: number;
    created: Date;
    createdBy: Users;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: [];

    constructor(
        users: Users,
        id:number,
        payment: string,
        totalPrice: number,
        status: number,
        orderRows:[]){

            this.id = id,
            this.companyId = 39,
            this.created = new Date(),
            this.createdBy = users,
            this.paymentMethod =  payment,
            this.totalPrice = totalPrice,
            this.status = status,
            this.orderRows = orderRows

        }

}