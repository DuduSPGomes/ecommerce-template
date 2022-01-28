import axios from "axios"
import { Product } from "../domain/product.entity"
import { queryProducts } from "./query/product.query"

export class ProductRepository {

  async getProducts() : Promise<Product[]> {
    let products: Product[] = []

    try {
      const response = await axios({
          url: "https://demo.saleor.io/graphql/",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          data:{
            query: queryProducts
          }
      })
      const data = response.data.data
      products = Product.toDomainList(data)
    }catch(err) {
      console.log(err)
    }

    return products
  }
}
