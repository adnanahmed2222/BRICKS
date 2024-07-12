import React from 'react'
import styled from 'styled-components'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    position: absolute;
    background-color: #00000020;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;  
    min-width : 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ececece1;
    position: relative;

    &:hover ${Info}{
      opacity:1;
    }
`
const Circle = styled.div`
    width : 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image= styled.img`
    width: 100%;
    object-fit: cover;
    z-index: 2;
`
const Icons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all .3s ease;
  cursor: pointer;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icons>
            <AddShoppingCartOutlinedIcon/>
        </Icons>
        <Icons>
            <OpenWithOutlinedIcon/>
        </Icons>
        <Icons>
            <FavoriteBorderOutlinedIcon/>
        </Icons>
      </Info>
    </Container>
  )
}

export default Product
