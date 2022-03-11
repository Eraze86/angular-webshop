import { OrderRow } from "./orderrow";
import { Users } from "./users";

export class Order{
    id: number;
    companyId: number;
    created: Date;
    createdBy: Users;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: OrderRow[] = [];

    constructor(
        users: Users,
        id: number,
        payment: string,
        totalPrice: number,
        status: number,
        orderRows:OrderRow[]){

            this.id = 0,
            this.companyId = 39,
            this.created = new Date(),
            this.createdBy = users,
            this.paymentMethod =  payment,
            this.totalPrice = totalPrice,
            this.status = status,
            this.orderRows = orderRows

        }

}