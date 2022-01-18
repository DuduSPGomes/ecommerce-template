import axios from 'axios'
import { ProductRepository } from './product.repository'

export const apiData = [
  {
    id: 1,
    title: 'string',
    price: 0,
    category: [''],
    description: 'string',
    image: 'string',
    rating: {
      rate: 1,
      count: 1
    }
  },
  {
    id: 2,
    title: 'string',
    price: 0,
    category: [''],
    description: 'string',
    image: 'string',
    rating: {
      rate: 1,
      count: 1
    }
  }
]

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () => {
  const url = 'url'
  return new ProductRepository(url)
}

describe('testing ProductRepository', () => {
  describe('gestAll method', () => {
    beforeEach(() => {
      mockedAxios.get.mockResolvedValue({ data: apiData })
    })

    test('should returns list of products', async () => {
      const sut = makeSut()
      const products = await sut.getAll()
      expect(products).toEqual(apiData)
    })

    beforeEach(() => {
      apiData.length = 0
      mockedAxios.get.mockResolvedValue({ data: apiData })
    })

    test('should returns list of products with size 0 if request fails', async () => {
      const sut = makeSut()
      const products = await sut.getAll()
      expect(products.length).toBe(0)
    })
  })
})
