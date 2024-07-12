import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'


const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-top: 1px solid lightgray;
  border-bottom: 2px solid lightgray;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
`
const Popular = styled.h1`
  text-align: center;
  background-color: #00000046;
  color: white;
`
const Products = () => {
  return (
    <MainContainer>
      <Popular>BRICKS's Best-Selling Homes and House Plans</Popular>
      <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
    </MainContainer>
  )
}

export default Products
