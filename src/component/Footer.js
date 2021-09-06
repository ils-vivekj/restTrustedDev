import {  Navbar } from "react-bootstrap"
// import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';


export const Footer=({campaigns,candidates})=>{


let colorArr=['red','green', 'blue', 'yellow', 'grey'] ;
let campaignArr;
for(let j=0; j<campaigns.length;j++){
    let campCadidate=candidates.filter(cand=>cand.campaign_id===campaigns[j].id);
    let camCandArray;
    for(let i=0; i<campCadidate.length ;i++ ){
        if(camCandArray){
            let valueInserted=false;
            for(let k =0; k<camCandArray.length;k++){
                if(campCadidate[i].hiredDate===camCandArray[k].x){
                    camCandArray[k].y=camCandArray[k].y+1;
                    valueInserted=true;
                }
            }
            if(valueInserted===false){
                camCandArray.push({x:campCadidate[i].hiredDate,y:1})
            }
            
        }else{
            camCandArray=[{x:campCadidate[i].hiredDate,y:1}]
        }
    
    }
    if(camCandArray){
        if(campaignArr ){
            campaignArr.push({name:campaigns[j].cName, points:camCandArray});
        }else{
            campaignArr=[{name:campaigns[j].cName, points:camCandArray}];
        }
    }
}

let graphData;
if(campaignArr){
for(let p=0;p<campaignArr.length;p++){
    if(graphData){
        graphData.push({color:colorArr[p] ,points:campaignArr[p].points });
    }else{
        graphData=[{color:colorArr[p] ,points:campaignArr[p].points }];
    }
}}
console.log('This is graph Data',graphData);
console.log('This is campaignArr',campaignArr);
    const data = [
        {									
            color: "blue", 
            points: [{x:'2021-01-01' , y: 1}, {x: '2021-02-01', y: 4}, {x: '2021-03-01', y: 0}]  
        },
        {									
            color: "red", 
            points: [{x:'2021-01-01' , y: 2}, {x: '2021-02-01', y: 5}, {x: '2021-03-01', y: 0}] 
        }
    ];
    const isDate=true;
    return(
        <Navbar>
                <div className="App">
                    {/* <LineChart yMin={0} isDate={isDate} height={200} showLegends={true} xMin='2021-01-01' xMax='2021-12-31'
                        data={graphData}
                    /> */}
                </div>				
        </Navbar>
    );
}
