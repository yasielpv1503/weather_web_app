import React from 'react';
import { _t } from '../../core/helper/i18n';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import service from '../../core/services/fetch-data'

const cityList = [
  'Pinar del Rio',
  'Isla de la Juventud',
  'La Habana',
  'Mayabeque',
  'Artemisa',
  'Matanzas',
  'Villa Clara',
  'Santi Spíritu',
  'Cienfuegos',
  'Ciego de Avila',
  'Las Tunas',
  'Camaguey',
  'Holguín',
  'Santiago de Cuba',
  'Guantánamo',
]
function Header(props) {
  const {pending,fetchData}=props
  const [city, setCity] = React.useState((localStorage.getItem('city')?localStorage.getItem('city'):process.env.REACT_APP_CITY))

  React.useEffect(()=>{
    localStorage.setItem('city',city)
    if (typeof fetchData === 'function')
      fetchData(city)
  },[city])

  return (
    <>

      <header className="cd-main-header js-cd-main-header" style={{ textAlign: 'right' }}>
        <div className="cd-nav__list js-cd-nav__list" style={{ fontSize: 20 }}>

          <Form.Control disabled={pending} style={{ width: "200px", float: 'right' }} onChange={(e) => setCity(e.target.value)} value={city} as="select">
            
            {cityList.map((e, i)=><option key={i} value={e}>{e}</option>)}
        </Form.Control>
        </div>
      </header>




    </>
  );
}
let mapStateToProps = state => {
  return {
    ...state,
    pending: state.httpReducer.pending,

  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: (city) => {
    dispatch(service.fetchData(city))
  }
});
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));


