// import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { CPanel } from "./component/CPanel";
import { Footer } from "./component/Footer";
import {LPanel} from "./component/LPanel";
//import  LPanel  from "./component/LPanel";
import { RPanel } from "./component/RPanel";
// import { useState } from 'react';
import { useState, useEffect } from 'react';
/*
const campaigns=[
  {
      id: 1,
      cName: 'Java',
      date:'27-08-2021',
      cDetails:'This campaign is for looking the candidate for Java',
      candidateId: [3,1],
      status:'New'    
  },
  {
      id: 2,
      cName: 'React',
      date:'27-08-2021',
      cDetails:'This campaign is for looking the candidate for Java',
      candidateId: [2,4],
      status:'Active' 

  },
  {
      id: 3,
      cName: 'Angular',
      date:'27-08-2021',
      cDetails:'This campaign is for looking the candidate for Java',
      candidateId: [5,6],
      status:'Active'     
  },
  {
      id: 4,
      cName: 'Bootstrap',
      date:'27-08-2021',
      cDetails:'This campaign is for looking the candidate for Java',
      candidateId: [5,6],
      status:'Archived'     
  },
  {
      id: 5,
      cName: 'Mysql',
      date:'27-08-2021',
      cDetails:'This campaign is for looking the candidate for Java',
      candidateId: [5,6],
      status:'Archived'    
  }
]; */
/*
const candidates=[
  {
      id:1,
      name:'One name',
      image: './images/1.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:true,
      isHired:true,
      hiredDate: '2021-08-15',
      campaignId:1
  },
  {
      id:2,
      name:'Two Name',
      image: './images/2.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:true,
      isHired:false,
      hiredDate: '2021-08-15',
      campaignId:2
  },
  {
      id:3,
      name:'Three Name',
      image: './images/3.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:true,
      isHired:true,
      hiredDate: '2021-02-15',
      campaignId:3
  },
  {
      id:4,
      name:'Four Name',
      image: './images/4.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:true,
      isHired:true,
      hiredDate: '2021-01-15',
      campaignId:1
  },
  {
      id:5,
      name:'Five Name',
      image: './images/5.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:true,
      isHired:false,
      hiredDate: '2021-08-15',
      campaignId:2
  },
  {
      id:6,
      name:'Six Name',
      image: './images/6.jpg',
      location: 'Austin, Texas',
      specialization: 'Accounting Specialist',
      experience :'Risk Assessment',
      education: 'Computation and Cognition',
      cultureFit: 2,
      yoe: 6,
      techAssessment: true,
      isInterviwed:false,
      isHired:true,
      hiredDate: '2021-02-15',
      campaignId:3

  }

] */

const Styles1 = styled.div`
  .container {
    background-color: white; 
    border:groove;
    overflow-auto:scroll;
  }
`;
const homeClicked=true;

 export const Home=()=>{
  //  alert('1');

//    const [cadidateList, setCadidateList]= useState(candidates);
    // let candidates=[];
    const [candidates, setCandidates]= useState([]);
    const [cadidateList, setCadidateList]= useState(candidates);
   const [campaigns, setCampaigns]= useState([]);
    // const [cadidateList, setCadidateList]= useState([]);
    useEffect(() => {
        const fetchAllCampaign=async()=>{ 
            const res=await fetch('http://127.0.0.1:4000/getCampigns');
            const resCampaign=await res.json();
            setCampaigns(resCampaign);
            // console.log(resCampaign);
           
        }

        const fetchAllCandidate=async()=>{ 
            const res=await fetch('http://127.0.0.1:4000/getAllCandidates');
            const resCandidates=await res.json();
            setCandidates(resCandidates);
            setCadidateList(resCandidates);
            // console.log(resCandidates);
           
        }
        fetchAllCandidate();
        fetchAllCampaign();
    }, [])




   const filterCandidates=(campaiinId)=>{
    //   console.log(campaiinId);
      if(campaiinId){
        //   console.log(candidates);
        let newCandidateList=candidates.filter(cand=>cand.campaign_id===campaiinId);
        // let newCandidateList=cadidateList.filter(cand=>cand.campaignId===campaiinId);
        // console.log(newCandidateList);
        // console.log(newCandidateList);
        setCadidateList(newCandidateList);
      }else{
        setCadidateList(candidates);
        // setCadidateList(cadidateList);
      }
      
   }
  
  return(
      
    // const [campaignCadidate, set]

    <Styles1>
    <Container fluid="md">
    <Row>
        <Col className='mt-2' bg='dark'><LPanel campaigns={campaigns} filterCandidates={filterCandidates}/></Col>
        <Col xs={6}><CPanel candidates={cadidateList}  /></Col>
        <Col><RPanel candidates={cadidateList} campaigns={campaigns}/></Col>
    </Row>
    <Row>
        <Col>
        <Container>
            {/* <Footer campaigns={campaigns} candidates={candidates}/> */}
            <Footer campaigns={campaigns} candidates={cadidateList}/>
            </Container>
        </Col>        
    </Row>
    </Container>  
    </Styles1>  
)}

export default Home;
// export default Home;

