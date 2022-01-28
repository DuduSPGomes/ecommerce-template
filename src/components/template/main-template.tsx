import { useCategories } from "@App/modules/catalog/controller/useCategories";
import Header from "@Components/organisms/header";

export default function MainTemplate({children}) {
  const {categories} = useCategories()

  return (
    <>
      <Header categories={categories}/>
      {children}
      <footer></footer>
    </>
  )
}
