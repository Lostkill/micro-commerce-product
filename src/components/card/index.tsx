import React from 'react'

import * as Styled from "./styles"

const Card = ({ image, title, price, action }: 
  { 
    image: any,
    title: string,
    price: string,
    action(): void
  }) => {
  return (
    <Styled.Wrapper>
      <Styled.ImageWrapper>
        <Styled.ImageLink imageUrl={image} />
      </Styled.ImageWrapper>
      <Styled.CardTitle>
        {title}
      </Styled.CardTitle>
      <p>{price}</p>
      <Styled.CardButton onClick={() => action()}>
        COMPRAR
      </Styled.CardButton>
    </Styled.Wrapper>
  )
}

export default Card