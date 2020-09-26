import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Col, Row } from 'react-bootstrap';

const SkeletonCard = (props) => {
    return (
        
        <div style={{marginTop:"20px"}}>
            <div style={{width:'40%',float:'left'}}>
                <Skeleton   style={{ height:'100px',borderRadius:'6px'}}  />
            </div>
            <div style={{width:'55%',marginLeft:'10px',float:'left'}}> 
                <Skeleton height="20" style={{marginTop:'20px'}}  />      
                <Skeleton height="14" style={{marginTop:'20px',width:100}}  />
                <Skeleton height="14" style={{marginTop:'0px',width:100}}  />
            </div>
             


        </div>
        
    );
}

const SkeletonCardList = (props) => {
    const {count=6}=props
    var list = Array(count).fill({})
     return (
       <>
       <Row>
            {list.map((e,i)=> <Col key={i} className="cardForecast" ><SkeletonCard /></Col> )}
       </Row> 
       </>
    );
}

export default SkeletonCardList;
