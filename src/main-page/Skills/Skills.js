import React from "react";
import Styled from "styled-components"

const Skills = ({name,value, max=100, color="#759CD8", }) => {

    const Container= Styled.li`
        progress[value] {
            -webkit-appearance: none;
            appearance:none
        }
        progress {
          color: ${color};
        }
        
        progress::-webkit-progress-value {
          background: ${color};
        }
        
        progress::-moz-progress-bar {
          background: #DCDCDC;
        }
        
        progress::-webkit-progress-value {
          background: ${color};
        }
        
        progress::-webkit-progress-bar {
          background: #DCDCDC;
        }
    `
    return (

        <>

            <Container color={color}>
                <div className="skills__item">
                    <div className="skills__caption">
                        {name}
                    </div>
                    <progress value={value} max={max} className={"skills__progress-bar"}>{value}</progress>
                </div>
            </Container>
        </>
    )
}

export default Skills;
