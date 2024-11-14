import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
    margin-top: auto;
    padding: 20px;
    background-color: #333;
    color: white;
    text-align: center;
`

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <span>&copy; 2024 Simple Online Store. All rights reserved.</span>
        </FooterContainer>
    )
}

export default Footer
