import styled from "styled-components"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import GlobalStyle from "../components/GlobalStyles"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper= styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px",flexDirection:"column"})}
` 
const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`

const InfoContainer= styled.div`
    flex: 1;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    ${mobile({padding: "10px"})}


`

const Title = styled.h1`
    font-weight: 100;    
`

const Description = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const Button = styled.button`
    margin-top: 100px;
    width: 150px;
    padding: 10px;
    font-weight: 500;
    font-size: 20px;
    border:2px solid teal;
    background-color: #ffffff;
    &:hover{
        background-color: teal;
        color: white;
        border :2px solid white;
        cursor: pointer;
    }
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    margin-top: 30px;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 100;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Extended= styled.div`
    padding: 50px;
    display: flex;
    border-top: 2px solid teal;
    flex-direction:column;
` 
const Option = styled.option``


const Product = () => {
  return (
    <Container>
      <GlobalStyle/>  
      <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://img.freepik.com/premium-photo/simple-beautiful-house-design-image_739463-172.jpg?w=740"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Modern House</Title>
                <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestiae illum impedit, doloremque sunt vero, excepturi quaerat nihil aperiam eos veritatis aliquam perspiciatis, inventore quam nemo iure itaque ipsam sed!</Description>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Propert size:</FilterTitle>
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
                </FilterContainer>
                <Button>Add to Cart</Button>
            </InfoContainer>
        </Wrapper>
        <Extended>
            <Title>Extended description and details</Title>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestiae illum impedit, doloremque sunt vero, excepturi quaerat nihil aperiam eos veritatis aliquam perspiciatis, inventore quam nemo iure itaque ipsam sed!</Description>
        </Extended>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
