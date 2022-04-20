import styled from "styled-components";
import {marginPage} from "../styles/globalCustomStyle";
import Cv from '../assets/shared/cv-dev-web.pdf'

const AboutStyle = styled.section`
    ${marginPage};
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  margin-top: 30vh;
  .text-title {
    text-transform: uppercase;
    font-size: 14px;
    font-family: RobotoRegular;
    color: ${({theme}) => theme.colors.primary};
    @media (max-width: 700px) {
      margin-top: 20vh;
    }
  }

  .separator {
    margin-top: 20px;
    margin-bottom: 50px;
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.text};
    opacity: 0.2;
  }

  .description {
    text-align: center;
    font-family: RobotoRegular;
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 40px;
  }

  .important-word {
    font-family: RobotoBold;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.secondary};
  }
`

function About() {

    return (
        <AboutStyle>
            <h2 className="text-title">About</h2>
            <div className="separator"></div>
            <p className="description text-h2-5">
                I am a French back-end developer, I use <span className="important-word">LARAVEL</span> and <span
                className="important-word">REACT</span>.
            </p>
            <a className="button" href={Cv} download="corentin_farcy_cv.pdf">Download My Resume</a>
        </AboutStyle>
    )
}

export default About
