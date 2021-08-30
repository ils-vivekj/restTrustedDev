import React from "react";
import { Col,Row ,Image, Container} from "react-bootstrap";
import styled from 'styled-components';
// import { Navbar, Container, Nav,  } from "react-bootstrap";

const Styles = styled.div`
  .borderSnippet {
    width:50%;
    border:gro0ove;
    float:left;
    margin:2%px;
    background-color: white;
    }
    .expClass{
        color:blue;
        font-family:verdana,
        font-size: 8
    }
  `;

// const Campaign = ({campaign})=>{
//     return(
//           <div>
//                   <div>{campaign.cName}</div><div>{campaign.date}</div>
//                   <p>{campaign.cDetails}</p>
//           </div>
//     );
// }
export const CandidateSnippet=({candidate})=>{

    return(
        <Styles>
            <div  className="borderSnippet">
                <Container>
                <Row>
                    <Col className="expClass" >{candidate.yoe}  of Experience</Col>
                    <Col> image</Col>
                </Row>
                <Row>
                    <Col>
                        <Image width="100px" height="100px"  
                                        className="d-inline-block align-top " roundedCircle 
                                        src={candidate.image} /> 
                    </Col>
                    <Col><p>{candidate.name}</p><p>{candidate.location}</p><p>{candidate.specialization}</p></Col>
                </Row>
                <Row>
                    <Col>Hired</Col>
                    <Col>Love image</Col>
                </Row>
                </Container>
            </div>
                    
            
            </Styles>
        
    )
}

export default CandidateSnippet;