import styled from "styled-components";

function Header() {

    const HeaderStyle = styled.header`
      padding: 0 5vw;
      nav {
        margin: 64px 0 164px 0;
        display: flex;
        justify-content: center;
        gap: 0 3vw;
        width: 100%;
        text-transform: uppercase;
      }
      
      a:hover {
        color: #fff;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
      }
    `

    return (
        <HeaderStyle>
            <nav>
                <a className='text-link text-h5' href="">home</a>
                <a className='text-link text-h5' href="">about</a>
                <a className='text-link text-h5' href="">projects</a>
            </nav>
        </HeaderStyle>
    )
}

export default Header
