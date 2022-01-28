import { useEffect, useState } from "react"
import { ProductRepository } from "../data/product.repository"
import { Product } from "../domain/product.entity"

export function useProducts() {
  const repo = new ProductRepository()
  const [products, setProducts] = useState<Product[]>()

  async function getProducts() {
    const prods = await repo.getProducts()
    setProducts(prods)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return {products, setProducts}
}
