import React from 'react';
import ForeCastDate from './ForeCastDay';
import SkeletonCardList from './Loader/SkeletonCard';
import service from '../core/services/fetch-data'
import { Col, Row } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment'
 

const Home = props => {
  


  return (
    <div >
      <div className=" cardContainer ">
         <h1 style={styles.title}>Click on a forecast to see the details</h1>
      </div>


    </div>
  );
}

const styles = {
  title: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#c3c3c3',
      marginTop:50
  }
}

export default Home;





