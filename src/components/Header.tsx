import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
    padding: 20px;
    background-color: #333;
    color: white;
    text-align: center;
`

const Title = styled.h1`
    font-size: 24px;
    color: white;
`

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>Simple Online Store</Title>
        </HeaderContainer>
    )
}

export default Header
