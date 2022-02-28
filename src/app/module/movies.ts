import { AppRoutingModule } from "../app-routing.module"

export class Movies{
    id: string
    name: string
    description: string
    price: string
    year: string
    added: string
    productCategory: string

    constructor(
        id: string, 
        name: string, 
        description: string, 
        price: string,
        year: string,
        added: string,
        productCategory: string){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.year = year
        this.added = added
        this.productCategory = productCategory
    }
}