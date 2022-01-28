import { useEffect, useState } from "react"
import { CategoryRepository } from "../data/category.repository"
import { Category } from "../domain/category"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>()
  const repoCat = new CategoryRepository()

  async function getCategories() {
    const cats = await repoCat.getCategories()
    setCategories(cats)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return {categories, setCategories}
}
