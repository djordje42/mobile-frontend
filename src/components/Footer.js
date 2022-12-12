import React from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Image = styled.img`
    height: 150px;
    width: 250px;
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 60px;
    height: 40px;
    margin-left: 10px;
`
const PaymentContainer = styled.div`
    display: flex;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Image src={logo} alt="logo" />
        <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae, placeat corporis? Porro nemo distinctio sunt error ad nulla natus reprehenderit 
            fugit magnam possimus dicta vitae mollitia, tempore corporis, voluptatum dolor!
        </Desc>
        <SocialContainer>
            <SocialIcon color="385999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight: "10px"}} /> Cara Dusana 1-1150
            </ContactItem>
            <ContactItem>
               <PhoneIcon style={{marginRight: "10px"}} /> 060-00-0000-0
            </ContactItem>
            <ContactItem>
              <EmailIcon style={{marginRight: "10px"}} />  contact@techshop.dev
            </ContactItem>
            <PaymentContainer>
                <Payment src="https://img.gigatron.rs//assets/img/layout/payment/raiffeisen1.jpg" />
                <Payment src="https://img.gigatron.rs//assets/img/layout/payment/wspay-v2.png" />
                <Payment src="https://img.gigatron.rs//assets/img/layout/payment/logo-ips.png" />
                <Payment src="https://img.gigatron.rs//assets/img/layout/payment/visa-secure.png" />
                <Payment src="https://img.gigatron.rs//assets/img/layout/payment/mastercard-identity-check.png" />
            </PaymentContainer>
        </Right>
    </Container>
  )
}

export default Footer