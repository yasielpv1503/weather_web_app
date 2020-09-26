import React from "react";
import { Row, Col } from "react-bootstrap";

export const Loading = () => <div className="containerLoading" >
 
    <Row>
        <Col>
            <div style={{marginLeft:'-80px'}}>
                <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                    <circle cx="170" cy="170" r="160" stroke="#35B031" />
                    <circle cx="170" cy="170" r="135" stroke="#35B031" />
                    <circle cx="170" cy="170" r="110" stroke="#35B031" />
                    <circle cx="170" cy="170" r="85" stroke="#35B031" />
                </svg>
            </div>
        </Col>
    </Row>




</div>;

