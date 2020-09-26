import React from 'react';
import { withRouter } from "react-router-dom";
import { getImage } from '../core/helper/functions';
const ForeCastDayHour = (props) => {
    const { history, value } = props
    return (
        <>
            <div  className="cardOfferts" style={{ width: "100%", padding: "0px", minHeight: "70px", marginTop: "10px", cursor: 'pointer' }} >
                <img style={styles.image} src={getImage(value.state)} />
                <div style={styles.container}>                     
                    <span style={styles.title}>{value.dayName} at {value.time}</span>
                   
                    <div>
                        <span style={styles.tempMin}><span style={{ fontSize: 10 }}>min</span> {value.minTemp}&deg;</span>
                        <br />
                        <span style={styles.tempMax}><span style={{ fontSize: 10 }}>max</span> {value.maxTemp}&deg;</span>
                    </div>
                </div>
            </div>
        </>
    );
}

const styles = {
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#42404d'
    },
    subTitle: {
        textAlign: 'center',
        textTransform: 'uppercase',        
        color: '#222',
        fontSize: 12,
        float:'right',
        marginLeft:10
    },

    image: {
        width: 100,
        height: 100
    },
    container: {
        padding: 10,
        textAlign:'left'
    },
    tempMin: {
        fontWeight: 'bold',
        color: '#5136c9',
        fontSize: 20
    }
    ,
    tempMax: {
        fontWeight: 'bold',
        color: '#dc3545',
        fontSize: 20
    }
}

export default withRouter(ForeCastDayHour);
