import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import phones from '../phones'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: "40px"})}
`

const Products = ({cat,filters,sort}) => {
  

const [products, setProducts] = useState([])
const [filteredProducts, setFilteredProducts] = useState([])

useEffect(() => {
  const getProducts = async () => {
    try{
      const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products?category")
      setProducts(res.data)
      console.log(res.data)
    }catch(err){

    }
  }
  getProducts()
}, [cat])

useEffect(() => {
  cat && 
  setFilteredProducts(
    products.filter(item => 
      Object.entries(filters).every(([key, value]) => 
    item[key].includes(value)
    )
    )
  )
}, [products,cat, filters])
 
useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);

  return (
    <Container>
        {cat ? filteredProducts.map((phone, id) => (
            <Product key={id} phone={phone} />
        )) : products.slice(0,8).map((phone, id) => (
          <Product key={id} phone={phone} />
      ))}
    </Container>
  )
}

export default Products