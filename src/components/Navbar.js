import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../img/logo.png'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    z-index: 999;
    padding-bottom: 20px;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: ponter;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Image = styled.img`
    max-height: 60px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ marginRight: "20px" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "11px" })}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search...' />
                    <SearchIcon style={{color: "gray", fontSize: 16}} />
                </SearchContainer>
            </Left>
            <Center>
                <a href="/"><Image src={logo} alt="logo" /></a>
            </Center>
            <Right>
                <MenuItem>
                    REGISTER
                </MenuItem>
                <MenuItem>
                    SIGN IN
                </MenuItem>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar