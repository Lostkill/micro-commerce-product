import React from 'react'

import { products } from '../../@products/data/products'
import Card from '../../components/card'

import * as Styled from './styles'

const ProductsView = () => {
  return (
    <Styled.Wrapper>
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          price={product.price}
          title={product.title}
          action={() => {}}
        />
      ))}
    </Styled.Wrapper>
  )
}

export default ProductsView