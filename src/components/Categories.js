import React from 'react'
import styled from 'styled-components'
import categories from '../categories'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding 20px;
    justify-content: space-between;
    ${mobile({ padding: "0ox", flexDirection: "column" })}
`

const Categories = () => {
  return (
    <Container>
        {categories.map((category, id) => (
            <CategoryItem key={id} category={category} />
        ))}
    </Container>
  )
}

export default Categories