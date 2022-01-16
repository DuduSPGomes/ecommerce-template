import { Box, Flex, Icon, IconButton, Img, Text } from '@chakra-ui/react'
import { Product } from 'domain/entities/product.entity'
import React from 'react'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Box>
      <Text>{product.category}</Text>
      <Text>{product.title}</Text>
      <Box>
        <Box>
          <Text>-44%</Text>
        </Box>
        <Img src={product.image} w="150px" h="150px" />
      </Box>
      <Flex>
        <Text>{product.price}</Text>
        <Text>{product.price}</Text>
      </Flex>
      <IconButton aria-label="Select options" icon={<Icon />}></IconButton>
    </Box>
  )
}
