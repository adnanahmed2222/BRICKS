import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Container = styled.div`
  height: 60px;
  background-color: #ffffff;
  color: black;
  font-family: "Urbanist", sans-serif;
  display: flex;
  align-items: center;
  
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius:7px;
  margin-left: 25px;
  display: flex;
  align-items: center;
`;

// Corrected: Use `Input` instead of `input`
const Input = styled.input`
  border: none;
  outline: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Language = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <SearchIcon style = {{color:"gray", fontSize: 25}}/>
          </SearchContainer>
        </Left>
        <Center>
          <MapsHomeWorkIcon/>
          <Logo>BRICKS.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
