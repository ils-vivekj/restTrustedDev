import React from "react";
import { FaTimes} from 'react-icons/fa';
import {GrNext, GrPrevious} from 'react-icons/gr';
import styled from 'styled-components';
import { Col, Container, Image, Jumbotron, Row} from "react-bootstrap";

// import { Navbar, Container, Nav,  } from "react-bootstrap";

const Styles = styled.div`
    .alignArrow{
        height:400px,
        v-align:center,
        float:left
    }
    .candidateDetails{
        background-color: white,
        
    }
  `;

export const CandidateDetails=({candidate,onClick, isPrevious, previous, isNext, next})=>{
    return (
        <Styles>
            
                <Row><Col xs={1} className='alignArrow' width="10px">
                    {isPrevious &&
                          <GrPrevious onClick={previous} style={{cursor:'pointer'}}/>
                    }
                     </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col  width="100px"><Image width="100px" height="100px"  className="d-inline-block align-top " roundedCircle src={candidate.image} /></Col>
                                <Col>
                                
                                    <p>{candidate.name}
                                    {candidate.location}
                                    {candidate.specialization}</p>
                                    
                                </Col>
                            </Row>
                            <Row>
                                {candidate.experience}
                            </Row>
                            <Row>
                                <p>{candidate.education}</p>
                                <p>{candidate.education}</p>
                                <div>
                                    Culture Fit: {candidate.cultureFit}
                                    Year of Experience :{candidate.yoe}
                                    Tech Assement :{candidate.techAssessment}
                                </div>
                            </Row>
                            </Container>
                        
                    </Col>
                    <Col xs={1} className='alignArrow' width="10px">
                    {isNext &&
                        <GrNext onClick={next} style={{cursor:'pointer'}}/>
                        }
                    </Col>
                    <Col xs={1} width="10px">
                        <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={onClick} /> 
                    </Col>
                </Row>
            
    </Styles>
    )
}

export default CandidateDetails;

// export const CandidateSnippet=({candidate})=>{
//     return(
//         <div>
//             {candidate.id},{candidate.name}
//         </div>
//     )
// }

// export default CandidateSnippet;


//  const Campaign = ({campaign})=>{
//          return(
//                <div>
//                        <div>{campaign.cName}</div><div>{campaign.date}</div>
//                        <p>{campaign.cDetails}</p>
//                </div>
//          );
//  }
      
    


// export default Campaign;