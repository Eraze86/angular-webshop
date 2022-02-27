import { AppRoutingModule } from "../app-routing.module"

export class Movies{
    id: number
    name: string
    description: string
    price: number
    year: number
    added: number
    productCategory: string

    constructor(
        id: number, 
        name: string, 
        description: string, 
        price: number,
        year: number,
        added: number,
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