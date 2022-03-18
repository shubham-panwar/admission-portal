import {useState} from 'react'
import styled from "styled-components";

const CourseCard = (props) => {
  const {Title,Duration,Deadline,CTA } = props

  const [active, setActive] = useState('')

    const activeBorder = (active) => {
        setActive(active)
    }


const Container = styled.div`
font-family: 'Poppins', sans-serif;
position: relative;
box-sizing: border-box;
align-items: center;
height: 196px;
width: 240px;
border-radius: 12px;
border-radius: 12px;
background-color: #F7F8FB;
mix-blend-mode: normal;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
:hover {
     background: #EDF2FF;
      };
 border: ${active};


 h1 {
  color: #061938;
    font-size: 20px;
    margin: 0;
    position: absolute;
    width: 67px;
    height: 20px;
    left: 12px;
    top: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  
  h2 {
  color: #505F79;
  font-size: 14px;
  position: absolute;
  width: 143px;
  height: 14px;
  left: 12px;
  top: 52px;
  font-weight: 400;
  }
  
  .date {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #061938;
  position: absolute;
  width: 165px;
  height: 14px;
  left: 38px;
  top: 112px;
  
  }
  
  .cta {
  font-weight: 600;
  font-size: 14px;
  color: #092682;
  font-style: normal;
  position: absolute;
  width: 165px;
  height: 14px;
  left: 83px;
  top: 9px;
  left: 100px;
  top: 150px;
  cursor: pointer;
  }
  
  
  .hover {
  background-color: #EDF2FF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
      }

  `

    return (
        <>      
            <Container>
                    <h1>{Title}</h1>
                    <h2>{Duration}</h2>
                    <span className="date">{Deadline}</span>
                    <span className="cta" onClick={()=>{activeBorder('1px solid #092682')}}>{CTA}</span>
                </Container>         
        </>
    )
    
  }

export default CourseCard