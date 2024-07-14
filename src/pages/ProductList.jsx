import styled from "styled-components"
import GlobalStyle from '../components/GlobalStyles'
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({margin:"10px 0px",display:"flex",flexDirection:"column"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Navbar/>
      <Title>Discover Your Dream Home Plans</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter:</FilterText>
            <Select>
              <Option disabled selected>Type of house</Option>
              <Option>Bungalow</Option>
              <Option>Single-family</Option>
              <Option>Luxury Home</Option>
              <Option>Victorian House</Option>
              <Option>Modern House</Option>
            </Select>
            <Select>
              <Option disabled selected>select size in sq. feet</Option>
              <Option>1000 sq. feet</Option>
              <Option>2000 sq. feet</Option>
              <Option>3000 sq. feet</Option>
              <Option>4000 sq. feet</Option>
              <Option>5000 sq. feet</Option>
              <Option>6000 sq. feet</Option>
              <Option>7000 sq. feet</Option>
              <Option>8000 sq. feet</Option>
              <Option>9000 sq. feet</Option>
              <Option>10000 sq. feet</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Plans:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>price (asc)</Option>
              <Option>price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
