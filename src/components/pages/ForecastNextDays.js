import React from 'react';
import ForeCastDay from '../reusable/ForeCastDay';
import SkeletonCardList from '../Loader/SkeletonCard';
import { Col, Row } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as moment from 'moment'
import { decimalAdjust } from '../../core/helper/functions';
import Skeleton from 'react-loading-skeleton';
import Graph from '../reusable/Graph';


const transformData = (payload) => {
  let array = []
  let listOfdates = payload.list.filter(data => data.dt_txt.indexOf('00:00:00') !== -1).map(data => (
    {
      date: data.dt_txt,
      state: data.weather[0].main,
      icon: data.weather[0].icon,
      id: moment(data.dt_txt).format('YYYY-MM-DD'),
      dayName: moment(data.dt_txt).format('ddd'),
      minTemp: decimalAdjust('floor', data.main.temp_min - 272.15, -2),
      maxTemp: decimalAdjust('floor', data.main.temp_max - 272.15, -2),
      data: data

    }))
  listOfdates.forEach(date => {
    let minList = payload.list.filter(data => data.dt_txt.indexOf(date.id) !== -1)
      .map(data => ({ min: data.main.temp_min }))
      .sort((a, b) => (a.min > b.min) ? 1 : (a.min < b.min) ? -1 : 0)
    let maxList = payload.list.filter(data => data.dt_txt.indexOf(date.id) !== -1)
      .map(data => ({ max: data.main.temp_max }))
      .sort((a, b) => (a.max > b.max) ? -1 : (a.max < b.max) ? 1 : 0)


    array.push({
      ...date,
      minTemp: decimalAdjust('floor', minList[0].min - 272.15, -2),
      maxTemp: decimalAdjust('floor', maxList[0].max - 272.15, -2)
    })

  });
  return array
}




const getGeneralInfo = (payload) => {
  if (payload.city && payload.list) {
    let dataByFirstTime = payload.list.filter(data => data.dt_txt.indexOf('00:00:00') !== -1)
    let dateData = dataByFirstTime.map(data => ({ date: moment(data.dt_txt).format('YYYY/MM/DD'), }))

    return {
      startDate: dateData[0].date,
      endDate: dateData[dateData.length - 1].date,
      city: payload.city.name,
    }
  }
  return {}
}


const ForecastNextDays = props => {
  const { payload, pending } = props
  const [data, setData] = React.useState([])
  const [title, setTitle] = React.useState("")
 

  React.useEffect(() => {
    if (!pending && payload.list) {
     
      setData(transformData(payload))
      let info = getGeneralInfo(payload)
      setTitle(`Forecast in ${info.city} from ${info.startDate} to ${info.endDate}`)
    }
  }, [pending,payload])


  return (
    <div >
      <div className=" cardContainer ">
        {pending ? <Skeleton style={{ marginTop: 50, height: '25px', width: '50%', borderRadius: '6px' }} /> : <h1 style={styles.title}>{title}</h1>}

        {pending ? <SkeletonCardList /> : null}
        {!pending ?
          <Row >
            {data.map((e, i) => {
              return <Col key={i} style={{ textAlign: "-webkit-center" }} className="cardForecast"> <ForeCastDay value={e} /></Col>
            })}
          </Row>
          : null}
        <div style={{ marginTop: 40 }}>
          {!pending ? <Graph graphData={data} /> : null}
        </div>
      </div>

      <div className=" cardContainer">
        <h1 style={styles.help}>Click on a forecast to see the details</h1>
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


const styles = {
  title: {
    textAlign: 'center',
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
    marginTop: 50
  }
}
export default withRouter(connect(mapStateToProps, null)(ForecastNextDays));





