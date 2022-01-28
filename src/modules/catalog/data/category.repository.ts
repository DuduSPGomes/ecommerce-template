import axios from "axios"
import { Category } from "../domain/category"
import { queryCategories } from "./query/category.query"

export class CategoryRepository {

  async getCategories(): Promise<Category[]> {
    let categories: Category[] = []
    try {
      const response = await axios({
          url: "https://demo.saleor.io/graphql/",
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          data:{
            query: queryCategories
          }
      })
      const data = response.data.data
      categories = Category.toDomainList(data)
    }catch(error) {
      console.log(error)
    }

    return categories
  }

}
