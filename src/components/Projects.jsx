import styled from "styled-components";
import {marginPage} from "../styles/globalCustomStyle";
import {projects} from "../data/projects";
import Project from "./Project";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const ProjectsStyle = styled.section`
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

  .projects-container {
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .button {
    cursor: pointer;

    @media (max-width: 769px) {
      padding: 7px 25px;
    }
    @media (max-width: 500px) {
      padding: 4px 13px;
    }
    @media (max-width: 380px) {
      padding: 6px 10px;
    }
  }

  .disabled {
    background: ${({theme}) => theme.colors.secondary};
    cursor: not-allowed;
    border: solid 1px ${({theme}) => theme.colors.text.disabled};
    padding: 15px 50px;
    border-radius: 30px;
    color: ${({theme}) => theme.colors.text};
    font-family: RobotoRegular;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 40px;
    transition: background-color 0.5s;

    @media (max-width: 769px) {
      padding: 7px 25px;
    }
    @media (max-width: 500px) {
      padding: 4px 13px;
    }
    @media (max-width: 380px) {
      padding: 6px 10px;
    }
  }
`

function Projects() {

    const filters = [
        {
            name: 'all'
        },
        {
            name: 'javascript'
        },
        {
            name: 'react'
        }
    ]
    const [projectFiltered, setProjectFiltered] = useState(projects)
    console.log('0: ', filters[0].name)
    const [selectedButton, isSelectedButton] = useState(filters[0].name)
    const [disabled, isDisabled] = useState(false)

    function Buttons({filters, disabled, handleSelect, selectedButton}) {
        return filters.map((filter) => (
                <button
                    disabled={filter.name === selectedButton ? disabled : false}
                    className={filter.name === selectedButton ? "disabled margin-small" : "button margin-small"}
                    onClick={() => {
                        handleSelect(filter.name)
                    }}
                >
                    {filter.name}
                </button>
        ))
    }

    function handleSelect(value) {
        console.log('value', value)
        isSelectedButton(value)
        isDisabled(true)
        if (value === 'all') {
            return setProjectFiltered(projects)
        }
        return setProjectFiltered(projects.filter(project => project.technologies.includes(value)))
    }

    console.log('selected', projects)

    return (
        <ProjectsStyle>
            <h2 className="text-title">Projects</h2>
            <div className="separator"></div>
            <div>
                <Buttons
                    filters={filters}
                    disabled={disabled}
                    handleSelect={handleSelect}
                    selectedButton={selectedButton}/>
            </div>
            <motion.div layout>
                <AnimatePresence>
                    <div className="projects-container">
                        {projectFiltered.map((filteredProject, id) => (
                            <Project project={filteredProject} key={id}/>
                        ))}
                    </div>
                </AnimatePresence>
            </motion.div>
        </ProjectsStyle>
    )
}

export default Projects
