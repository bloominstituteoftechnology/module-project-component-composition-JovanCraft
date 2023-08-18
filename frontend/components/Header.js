import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    h1 {
        color: #93005a;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <nav className='nav'>
                <img src='https://api.nasa.gov/assets/img/favicons/favicon-192.png' className='nasa-logo' width='40px'/>
                <h1 className='nasa-name'>National Aeronautics and Space Administration 🚀</h1>
            </nav>
        </StyledHeader>
    )
}



export default Header;
