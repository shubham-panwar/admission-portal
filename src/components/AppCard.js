import {useState} from 'react'
import styled from "styled-components";
import ProgressBar from './ProgressBar'




const AppCard = (props) => {
    const { Title, Duration, Deadline, CTA, Id } = props
    const [active, setActive] = useState('')

    const activeBorder = (active) => {
        setActive(active)
        console.log('hillow hillow')
    }


const Container = styled.div`
font-family: 'Poppins', sans-serif;
position: relative;
line-height: 100%;
width: 240px;
height: 196px; 
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
    font-size: 18px;
    position: absolute;
    width: 38px;
    height: 18px;
    left: 15px;
    top: 24px;
   /*text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;*/
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
}

h2 {
position: absolute;
width: 65px;
height: 14px;
left: 13px;
top: 50px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 100%;
color: #505F79;
}

h3 {
    position: absolute;
    width: 106px;
    height: 14px;
    left: 12px;
    top: 72px;
    font-family: 'Poppins' , sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: #505F79;
}

.date {
position: absolute;
font-style: normal;
font-family: 'Poppins';
font-weight: 400;
font-size: 14px;
color: #061938;
width: 164px;
height: 14px;
text-transform: capitalize;
left: 39px;
top: 122px;
line-height: 100%;
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
left: 50px;
top: 150px;
cursor: pointer;
}

.progress {
position: absolute;
width: 48px;
height: 48px;
left: 166px;
top: 16px;
box-sizing: border-box;
}

.hover {
background-color: #EDF2FF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
    }

   .selected {
background-color: #F7F8FB;
border: 1px solid #092682;  
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
   } 
`

return (
    <>
            <Container>
            <ProgressBar className="progress"/>
                <h1>{Title}</h1>
                <h2>{Id}</h2>
                <h3>{Duration}</h3>
                <span className="date">{Deadline}</span>
                <span className="cta" onClick={()=>{activeBorder('1px solid #092682')}}>{CTA}</span>
            </Container>
    </>
)
}

export default AppCard