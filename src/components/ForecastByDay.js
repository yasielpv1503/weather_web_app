import React from 'react';
import ForeCastDayHour from './ForeCastDayHour';
import SkeletonCardList from './Loader/SkeletonCard';
import service from '../core/services/fetch-data'
import { Col, Row } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment'
import { decimalAdjust } from '../core/helper/functions';



const getForeCastByHours = (payload) => {
  console.log(payload)
    let data = payload.map(data => (
      {
        time: moment(data.dt_txt).format('HH:SS'),      
        dayName: moment(data.dt_txt).format('ddd'),
        state: data.weather[0].main,
        minTemp: decimalAdjust('floor', data.main.temp_min - 272.15, -2),
        maxTemp: decimalAdjust('floor', data.main.temp_max - 272.15, -2),
        data: data

      }))
    return data 
}

 


const ForecastByDay = props => {
  const { payload, pending, fetchData, history, match } = props
  const { params } = match

  const [data, setData] = React.useState([])
  const [title, setTitle] = React.useState("")
  React.useEffect(() => {
    if (typeof fetchData === 'function')
      fetchData(params.day)
  }, [params.day])

  React.useEffect(() => {
     
    if (!pending) 
      setData(getForeCastByHours(payload))       
  }, [pending])


  return (
    <div >
      <div className=" cardContainer ">
        <h1 style={styles.title}>{title}</h1>

        {pending ? <SkeletonCardList count={5} /> : null}
        {!pending ?
          <Row >
            {data.map((e, i) => {
              return <Col key={i} style={{ textAlign: "-webkit-center" }} className="cardForecast"> <ForeCastDayHour value={e} /></Col>
            })}
          </Row>
          : null}
      </div>


    </div>
  );
}
let mapStateToProps = state => {
  console.log(state.httpReducer.payloadDay)
  return {
    ...state,
    payload: state.httpReducer.payloadDay,
    pending: state.httpReducer.pendingDay
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: (day) => {
    dispatch(service.fetchDataByDay(day))
  }
});

const styles = {
  title: {
    textAlign: 'left',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#555',
    marginTop: 50
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForecastByDay));





