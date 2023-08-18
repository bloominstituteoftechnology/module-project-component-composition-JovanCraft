import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`

const Footer = () => {
    return (
        <StyledFooter>
            <small>© 2023 Craft development. All rights reserved.</small>
        </StyledFooter>
    )
}

export default Footer;
