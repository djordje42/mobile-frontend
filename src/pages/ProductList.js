import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", dipslay: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
    padding: 20px;
    margin-right: 20px;
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

    console.log(filters)
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter products: 
                </FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                    <Option>pink</Option>
                    <Option>purple</Option>
                    <Option>multicolor</Option>
                    <Option>silver</Option>
                    <Option>gold</Option>
                    <Option>gray</Option>
                </Select>
                <Select name="type" onChange={handleFilters}>
                    <Option disabled>Type</Option>
                    <Option>iphone</Option>
                    <Option>android</Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>
                    Sort products: 
                </FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option value= "newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList