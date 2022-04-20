import styled from "styled-components";
import {motion} from "framer-motion";

const ProjectStyle = styled.div`
  position: relative;
  width: 20vw;
  margin: 32px;
  
  .project {
    height: 30vh;
    @media (max-width: 900px) {
      height: 45vh;
    }
  }
  
  .bg-image {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${props => props.image});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: end;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: opacity 0.7s;
    cursor: pointer;
    
    &:hover {
      opacity: ${({theme}) => theme.img.opacity};
    }
  }

  .bg-gradient {
    padding: 16px;
    width: 100%;
    color: ${({theme}) => theme.img.color};
  }

  @media (max-width: 1080px) {
    width: 30vw;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
  
  .text-h4,.text-regular {
    color: ${({theme}) => theme.img.color};
  }
`

function Project({project}) {

    return (
        <ProjectStyle image={project.image} onClick={() => window.open(project.link)}>
            <motion.div className='project' layout animate={{ opacity: 1, scale: 1}} initial={{ opacity: 0, scale: 0.9}} exit={{ opacity: 0, scale: 0.9}} transition={{ duration: 0.2}}>
                <div className='bg-image'>
                    <div className='bg-gradient'>
                        <h1 className="text-h4">{project.name}</h1>
                        <p className="text-regular">{project.description}</p>
                    </div>
                </div>
            </motion.div>
        </ProjectStyle>
    )
}

export default Project
