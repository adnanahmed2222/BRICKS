import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    background-color: #0000005a;
`
const Button = styled.button`
    border: none;
    padding:10px;
    color: darkgray;
    background-color: white;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>EXPLORE</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
