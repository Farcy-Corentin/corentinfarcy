import styled from "styled-components";
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/all";

const GithubIcon = styled(AiFillGithub)`
  transition: 0.35s;
  color: ${({theme}) => theme.colors.primary};
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.3);
  }
`

const LinkedinIcon = styled(AiFillLinkedin)`
  transition: 0.35s;
  color: ${({theme}) => theme.colors.primary};
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.3);
  }
`

const MailIcon = styled(AiFillMail)`
  transition: 0.35s;
  color: ${({theme}) => theme.colors.primary};
  &:hover {
    color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.3);
  }
`
const FooterStyle = styled.footer`
  padding: 10vw;

  .separator {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.text};
    opacity: 0.2;
  }
  
  nav {
    display: flex;
    justify-content: center;
  }
  
  ul {
    display: flex;
    gap: 5vw;
    margin-bottom: 8px;
  }
  
  span {
    color: ${({theme}) => theme.colors.primary};
  }
`

function Footer() {

    const icons = [
        {
            name: 'github',
            component: <GithubIcon size={30}/>,
            url: 'https://github.com/Farcy-Corentin'
        },
        {
            name: 'linkedin',
            component: <LinkedinIcon size={30}/>,
            url: 'https://www.linkedin.com/in/corentin-farcy-0a1a01201/'
        },
        {
            name: 'gmail',
            component: <MailIcon size={30}/>,
            url: 'mailto:corentinfarcy1@gmail.com'
        },
    ]

    return (
        <FooterStyle>
            <div className='separator'></div>
            <nav>
                <ul>
                    {icons.map((icon, id) => (
                        <li>
                            <a key={id} href={icon.url}>
                                {icon.component}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <span className="text-small">©2022 Corentin Farcy</span>
        </FooterStyle>
    )
}

export default Footer
