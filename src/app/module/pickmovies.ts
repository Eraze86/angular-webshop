export class pickMovies {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: number;
  productCategory: string;
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    year: number,
    added: number,
    productCategory: string,
){
this.id = id,
this.name = name,
this.description = description,
this.price = price,
this.imageUrl = imageUrl,
this.year = year,
this.added = added,
this. productCategory = productCategory
}
}
