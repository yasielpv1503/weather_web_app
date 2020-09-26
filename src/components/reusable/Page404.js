import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { _t } from '../../core/helper/i18n';



const Page404 = (props) => {



    return (
        <>
            <div className="containerMessagePage" style={{ borderBottom: '1px solid #c3c3c3', padding: "40px", textAlign: 'center' }}>
                <Row>
                    <Col lg="4">
                        <i style={{ fontSize: '150px', color: '#35B031' }} className="fa fa-map-signs"></i>
                    </Col>
                    <Col lg="8">
                        <h1 style={{ fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: '#35B031' }}> {_t('Página no encontrada')}</h1>
                        <p style={{ marginLeft: '10px', fontSize: '15px', fontWeight: 'bold', color: '#35B031' }}> {_t('Lo sentimos. No podemos encontrar una página que cumpla con la solitud hecha')}</p>

                    </Col>

                </Row>




            </div >
            <div className="containerMessagePage" style={{ textAlign: 'center', padding: '20px' }}>
                <h2 onClick={() => props.history.push("/")} className="filterTag" >REGRESAR A DEDITI</h2>
              
                <h2 onClick={() => props.history.push("/publish")} className="filterTag" >PUBLICAR OTRA OFERTA </h2>

            </div>
        </>
    );
}



export default withRouter(Page404);
