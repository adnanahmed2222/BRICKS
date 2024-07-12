import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider' 
import styled from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'
import Categories from '../components/Categories'
import Products from '../components/Products'

const HomeContainer = styled.div`
  margin:0;
  padding: 0;
  font-family: "Urbanist", sans-serif;
`

export default function Home() {
  return (
    <HomeContainer>
      <GlobalStyle />
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </HomeContainer>
  )
}
