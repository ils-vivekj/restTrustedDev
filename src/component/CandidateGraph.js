import * as React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';



export const CandidateGraph =({candidates})=>{
    return (
        <>
            {/* <Row>
                <Col>
                    <h5>{(candidates.filter(cand=>cand.isInterviwed===true)).length}</h5>
                </Col>
                <Col>
                    <h5>{(candidates.filter(cand=>cand.isHired===true)).length}</h5>
                </Col>
                <Col>
                    <h5>{candidates.filter(cand=>cand.isHired===false).length}</h5>
                </Col>
                <Col>
                    <h5>{candidates.filter(cand=>cand.isInterviwed===false).length}</h5>
                </Col>
            </Row>
            <Row>
                <Col>Interviwed</Col>
                <Col>Hired</Col>
                <Col>Archived</Col>
                <Col>Not Interviwed</Col>
            </Row> */}

            
            <h6>Interviwed : {(candidates.filter(cand=>cand.isInterviwed===true)).length}</h6>
            <h6>Hired: {(candidates.filter(cand=>cand.isHired===true)).length}</h6>
            <h6>Archived:{candidates.filter(cand=>cand.isHired===false).length}</h6>
            <h6>Not Interviwed :{candidates.filter(cand=>cand.isInterviwed===false).length}</h6>
            <Row><Col>
            <PieChart viewBoxSize={[200,200]} animate={true} paddingAngle={0} 
            lineWidth={100} startAngle ={0} labelPosition={0}
            data={[
                { title: 'Interviewd', value: (candidates.filter(cand=>cand.isInterviwed===true)).length, color: '#E38627' },
                { title: 'Non-Interviewed', value: (candidates.filter(cand=>cand.isInterviwed===false)).length, color: '#C13C37' }
                
            ]} ></PieChart>
            </Col><Col>
            <PieChart viewBoxSize={[200,200]} animate={true} paddingAngle={0} 
            lineWidth={100} startAngle ={10} labelPosition={50}
            data={[
                { title: 'Interviewd', value: (candidates.filter(cand=>cand.isHired===true)).length, color: '#E38627' },
                { title: 'Non-Interviewed', value: (candidates.filter(cand=>cand.isHired===false)).length, color: '#C13C37' }
                
            ]} ></PieChart>
            </Col></Row>
        </>
    )
}

export default CandidateGraph;