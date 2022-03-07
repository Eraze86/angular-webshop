export class Users{
    firstName: string;
    lastName: string;
    street: string;
    cityCode: number;
    city: string;
    payment: string;

    constructor( 
        firstName: string,
        lastName: string,
        street: string,
        cityCode: number,
        city: string,
        payment: string){

            this.firstName = firstName,
            this.lastName = lastName,
            this.street = street,
            this.cityCode = cityCode,
            this.city = city
            this.payment = payment
        }
        

}