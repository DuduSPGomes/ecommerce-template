import { AllProductsQuery } from '../../../../saleorTypes/index'
import { Rating } from './rating.entity'

export class Product {
  id: string
  title: string
  price: number
  category: string[]
  description: string
  image: string
  rating: Rating

  static toDomainList(data: AllProductsQuery) {
    const prods: Product[] = []
    data.products?.edges.map(item => {
      const p = item.node
      prods.push({
        id: p.id,
        title: p.name,
        category: [p.category.slug],
        description: p.description,
        image: p.thumbnail.url,
        price: p.pricing.priceRangeUndiscounted.start.gross.amount,
        rating: {count: 1, rate: 2}

      })
    })

    return prods
  }

}

