import styled from "styled-components";
import {marginPage} from "../styles/globalCustomStyle";
import {BsArrowDown} from "react-icons/all";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import About from "../components/About";
import Projects from "../components/Projects";
import {useState} from "react";
import useThemeStore from "../stores/themeStore";

const HomeStyle = styled.div`
  .hero {
    width: 100vw;
    height: 100vh;
    padding-bottom: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
      justify-content: left;
      ${marginPage};
    }

    .text {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      @media (max-width: 780px) {
        margin-top: -25vh;
      }

      .line {
        text-transform: uppercase;
        width: auto;
        white-space: nowrap;
        font-family: RobotoRegular;
        letter-spacing: 0.03em;
        color: ${({theme}) => theme.colors.primary};
        font-size: 70px;
        line-height: 0.9;

        &.first_line {
          text-align: start;
        }

        &.second_line {
          padding-left: 240px;
        }

        &.third_line {
          position: relative;
          padding-left: 150px;
        }

        .important_word {
          font-family: RobotoRegular;
          text-transform: uppercase;
          color: ${({theme}) => theme.colors.secondary};
          position: relative;
        }
      }

      @media (max-width: 1200px) {
        .line {
          font-size: 50px;

          &.second_line {
            padding-left: 150px;
          }

          &.third_line {
            padding-left: 80px;
          }
        }
      }
      @media (max-width: 950px) {
        .line {
          font-size: 45px;

          &.second_line {
            padding-left: 100px;
          }

          &.third_line {
            padding-left: 50px;
          }
        }
      }
      @media (max-width: 769px) {
        .line {
          font-size: 35px;
          line-height: 1;

          &.second_line {
            padding-left: 0;
          }

          &.third_line {
            padding-left: 0;
          }
        }
      }
      @media (max-width: 500px) {
        .line {
          font-size: 23px;

          .important_word {
            margin-left: 5px;
          }
        }
      }

      @media (max-width: 380px) {
        .line {
          font-size: 20px;
        }
      }
    }
  }
}

.discover {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({theme}) => theme.colors.primary};

  span {
    font-family: RobotoBold;
    font-size: 0.65rem;
    text-transform: uppercase;
  }
}

nav {
  position: absolute;
  top: 10vh;
  left: 65%;
  @media (max-width: 900px) {
    left: 60%;
  }
  @media (max-width: 780px) {
    left: 55%;
  }
  @media (max-width: 700px) {
    left: 50%;
  }
  @media (max-width: 500px) {
    left: 40%;
  }
  @media (max-width: 380px) {
    left: 20%;
  }
  .text-link {
    text-transform: uppercase;
    transition: color 0.5s;
    &:hover {
      color: ${({theme}) => theme.colors.secondary};
    }
  }
}

.switch {
  width: 50px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  cursor: pointer;
}

.switch[data-isOn="true"] {
  justify-content: flex-end;
}

.handle {
  width: 20px;
  height: 20px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 40px;
}

.nav-flex {
  display: flex;
  align-items: center;
}
`

function Home() {

    const [isOn, setIsOn] = useState(false);
    const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode)

    const toggleSwitch = () => {
        setIsOn(!isOn)
    };

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 50,
    };


    const {scrollY} = useViewportScroll()

    const discoverOpacity = useTransform(scrollY, (s) => 1 - s / 300)

    return (
        <HomeStyle>
            <nav>
                <div className="nav-flex">
                    <a className="text-link margin-small" href="#home">
                        home
                    </a>
                    <a className="text-link margin-small" href="#about">
                        about
                    </a>
                    <a className="text-link margin-small" href="#projects">
                        projects
                    </a>
                    <div className="switch" data-isOn={isOn} onClick={() => {
                        toggleSwitch()
                        toggleDarkMode()
                    }}>
                        <motion.div className="handle" layout transition={spring}/>
                    </div>
                </div>
            </nav>
            <div className="hero">
                <motion.div className='text' initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{ease: "easeOut", duration: 3}}>
                    <div className='line first_line'>
                        <p>Hello, I’m <span className="important_word">Corentin Farcy</span></p>
                    </div>
                    <div className='line second_line important_word'>
                        <p>I’m junior web developer</p>
                    </div>
                    <div className='line third_line'>
                        <p>
                            from <span className='important_word'>France</span>
                        </p>
                    </div>
                </motion.div>
            </div>
            <motion.div className="discover" animate={{opacity: 1}} style={{opacity: discoverOpacity}}>
                <span className="discover">discover</span>
                <BsArrowDown size="1.5rem"/>
            </motion.div>
            <motion.div id="about" initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ ease: "easeOut",duration: 1.5}}>
                <About/>
            </motion.div>
            <motion.div id="projects" initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ ease: "easeOut",duration: 1.5}}>
                <Projects/>
            </motion.div>
        </HomeStyle>
    )
}

export default Home
