import { AllCategoriesQuery } from "saleorTypes"

export class Category {
  id: string
  name: string
  parent?: {
    id: string
    name: string
  }

  static toDomainList(data: AllCategoriesQuery) {
    const categories: Category[] = []

    data.categories.edges.map(item => {
      const category = item.node
      categories.push({
        id: category.id,
        name: category.name,
        parent: category?.parent
      })
    })

    return categories
  }
}
