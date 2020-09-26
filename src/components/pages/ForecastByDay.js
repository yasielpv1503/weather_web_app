import React from 'react';
import ForeCastHour from '../reusable/ForeCastHour';
import SkeletonCardList from '../Loader/SkeletonCard';
import service from '../../core/services/fetch-data'
import { Col, Row } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment'
import { decimalAdjust } from '../../core/helper/functions';



const getForeCastByHours = (payload) => {
  let data = payload.map(data => (
    {
      time: moment(data.dt_txt).format('HH:SS'),
      dayName: moment(data.dt_txt).format('ddd'),
      state: data.weather[0].main,
      icon: data.weather[0].icon,      
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
    if (!pending && Array.isArray(payload))
      setData(getForeCastByHours(payload))
  }, [pending])


  return (
    <div >
      <div className=" cardContainer ">
  <h1 style={styles.title}>Forecast of {params.day}</h1>

        {pending ? <SkeletonCardList count={5} /> : null}
        {!pending && Array.isArray(data) ?
          <Row >
            {data.map((e, i) => {
              return <Col key={i} style={{ textAlign: "-webkit-center" }} className="cardForecast"> <ForeCastHour value={e} /></Col>
            })}
          </Row>
          : null}
      </div>

      <div className=" cardContainer">
        <h1 style={styles.help} onClick={()=>history.push("/")}>Go to Home</h1>
      </div>



    </div>
  );
}
let mapStateToProps = state => {
  console.log(state.httpReducer.payloadDay)
  return {
    ...state,
    payload: state.httpReducer.payload || [],
    pending: state.httpReducer.pending
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
  },
  help: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#c3c3c3',
    marginTop: 50,
    cursor:'pointer'
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForecastByDay));





