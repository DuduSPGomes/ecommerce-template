import { Rating } from './rating.entity'

export class Product {
  id: number
  title: string
  price: number
  category: string[]
  description: string
  image: string
  rating: Rating
}
