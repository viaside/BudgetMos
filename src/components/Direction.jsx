import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import MediaQuery from 'react-responsive'
import Donut from "./Donut";
import DonutMobile from "./DonutMobile";


const animateListMobile = [
    { id: 1, Title: "ОСНОВНЫЕ ПАРАМЕТРЫ БЮДЖЕТА", Item:<DonutMobile/>, Bg: 'white'},
];
const animateListDesktop = [
    { id: 1, Title: "ОСНОВНЫЕ ПАРАМЕТРЫ БЮДЖЕТА ", Item:<Donut/>, Bg: 'white'},
];


export default class ReactReveal extends Component {
    render() {
        return (
            <Fragment >
                {/* mobile */}
                <MediaQuery minWidth={12} maxWidth={999} >
                    <div className="padMob2 border" >
                        <div className="text-center text-main animated fadeInUp ">
                            <h1 className='display-4 p-4'><b>НАПРАВЛЕНИЯ БЮДЖЕТА</b></h1>
                            <h1 className='paddingLR'>
                                Бюджет для граждан призван помогать жителям москвы социально
                            </h1>
                        </div>
                    </div>
                    {animateListMobile.map((item, key) => (
                    <div style={styles.block} className={item.Bg} key={key}>
                        <Fade bottom big >
                            <span>
                                <div >
                                    <h1 className='font-weight-bold display-1 vam'>{item.Title}</h1>
                                    <div className='p-2'>{item.Item}</div> 
                                </div>
                            </span>
                        </Fade>
                    </div>
                    ))}
                </MediaQuery>

                {/* desktop */}
                <MediaQuery minWidth={1000}>
                    <div className="pad border">
                    <div className="text-center text-main animated fadeInUp">
                        <h1 className='display-4 p-5'><b>НАПРАВЛЕНИЯ БЮДЖЕТА</b></h1>
                        <h1>
                            Бюджет для граждан призван <br/>помогать жителям москвы социально
                        </h1>
                    </div>
                    </div>
                    {animateListDesktop.map((item, key) => (
                    <div style={styles.block} className={item.Bg} key={key}>
                        <Fade bottom big >
                            <span>
                                <div className='block desktop paddingLR'>
                                    <h1 className='font-weight-bold display-1'>{item.Title}</h1>
                                    <div className='d-flex vam'>{item.Item}</div> 
                                </div>
                            </span>
                        </Fade>
                    </div>
                    ))}
                </MediaQuery>
            </Fragment>
        );
    }
}

const styles = {
    block: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        borderBottom: '1px solid rgba(255,255,255,.2)',
        minWidth: '100%',
        minHeight: '100%'
    }
};