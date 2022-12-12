import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.div`
  padding: 20px 0;
`
const ProductId = styled.span`
  padding: 20px 0;
`
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color}
`
const ProductSize = styled.div`
  padding: 20px 0;
`
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "15px 15px" })}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.span`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
`

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null)

  const onToken = (token) => {
    setStripeToken(token)
  }

  console.log(stripeToken)

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Your bag</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping bag (2)</TopText>
              <TopText>Your wishlist (0)</TopText>
            </TopTexts>
            <TopButton  type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map(product =>  (
              <Product>
                <ProductDetail>
                  <Image src={product.img} alt="ecommerce" />
                  <Details>
                    <ProductName><b>Product:</b> {product.title}</ProductName>
                    <ProductId><b>ID:</b> {product._id}</ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize><b>Type:</b> {product.type}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                </PriceDetails>
              </Product>
              ))}
              <Hr />
              
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemText>$ {cart.total}</SummaryItemText>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemText>-</SummaryItemText>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemText>-</SummaryItemText>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemText>$ {cart.total}</SummaryItemText>
              </SummaryItem>
              <StripeCheckout
              name="Tech e-commerce"
              image="#"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Cart