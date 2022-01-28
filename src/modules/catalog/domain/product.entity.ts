import {
  AllProductsQuery,
  OneProductQuery
} from '../../../../saleorTypes/index'

export class Product {
  id: string
  title: string
  price: number
  category: string[]
  description: string
  image: string
  variants: string[] | null

  private static hasVariants(p): string[] | null {
    const sizes = p.variants.map((v) => v.name)
    if (sizes.length === 1 && sizes[0].length === 0) return null
    return sizes
  }

  static toDomainList(data: AllProductsQuery) {
    const prods: Product[] = []

    data.products?.edges.map((item) => {
      const p = item.node
      prods.push({
        id: p.id,
        title: p.name,
        category: [p.category.slug],
        description: p.description,
        image: p.thumbnail.url,
        price: p.pricing.priceRangeUndiscounted.start.gross.amount,
        variants: this.hasVariants(p)
      })
    })

    return prods
  }

  static toDomain(data: OneProductQuery) {
    return {
      id: data.product.id,
      title: data.product.name,
      category: [data.product.category.slug],
      description: data.product.description,
      image: data.product.thumbnail.url,
      price: data.product.pricing.priceRangeUndiscounted.start.gross.amount,
      variants: this.hasVariants(data.product)
    }
  }
}
