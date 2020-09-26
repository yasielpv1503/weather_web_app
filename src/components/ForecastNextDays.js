import React from 'react';
import ForeCastDay from './ForeCastDay';
import SkeletonCardList from './Loader/SkeletonCard';
import service from '../core/services/fetch-data'
import { Col, Row } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment'
import { decimalAdjust } from '../core/helper/functions';

 

const getForeCastByDay = (payload) => {
  if (payload.list) {
    let dataByFirstTime = payload.list.filter(data => data.dt_txt.indexOf('00:00:00') !== -1)
    let data = dataByFirstTime.map(data => (
      {
        date: data.dt_txt,
        state: data.weather[0].main,
        id: moment(data.dt_txt).format('YYYY-MM-DD'),
        dayName: moment(data.dt_txt).format('ddd'),
        minTemp: decimalAdjust('floor',data.main.temp_min-272.15,-2),
        maxTemp: decimalAdjust('floor',data.main.temp_max-272.15,-2),
        data: data

      }))
    return data
  }
  return []
}

const getGeneralInfo = (payload) => {
  if (payload.city && payload.list) {
    let dataByFirstTime = payload.list.filter(data => data.dt_txt.indexOf('00:00:00') !== -1)
    let dateData = dataByFirstTime.map(data => ({date: moment(data.dt_txt).format('YYYY/MM/DD'),}))
      
    return {
      startDate:dateData[0].date,
      endDate:dateData[dateData.length-1].date,
      city:payload.city.name,
    }
  }
  return {}
}


const ForecastNextDays = props => {
  const { payload, pending, fetchData, history } = props
  const [data, setData] = React.useState([])
  const [title, setTitle] = React.useState("")
  React.useEffect(() => {
    if (typeof fetchData === 'function')
      fetchData()
  }, [])

  React.useEffect(() => {
    if (!pending) {      
      setData(getForeCastByDay(payload))
      let info = getGeneralInfo(payload)
      setTitle(`Forecast in ${info.city} from ${info.startDate} to ${info.endDate}`)
    }
  }, [pending])


  return (
    <div >
      <div className=" cardContainer ">
        <h1 style={styles.title}>{title}</h1>

        {pending ? <SkeletonCardList /> : null}
        {!pending ?
          <Row >
            {data.map((e, i) => {
              return <Col key={i} style={{ textAlign: "-webkit-center" }} className="cardForecast"> <ForeCastDay value={e} /></Col>
            })}
          </Row>
          : null}
      </div>


    </div>
  );
}
let mapStateToProps = state => {
  return {
    ...state,
    payload: state.httpReducer.payload,
    pending: state.httpReducer.pending,

  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(service.fetchData())
  }
});

const styles = {
  title: {
      textAlign: 'left',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#555',
      marginTop:50
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForecastNextDays));





