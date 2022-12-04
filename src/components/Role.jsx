import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import img1 from '../Images/img1.svg';
import MediaQuery from 'react-responsive'

const animateList = [
    { id: 1, Title: 'Заголовок 1', Text: 'текст 1', Image: img1, Bg: 'white'},
    { id: 2, Title: 'Заголовок 2', Text: 'текст 2', Image: img1, Bg: 'blue'},
];


export default class ReactReveal extends Component {
    render() {
        return (
            <Fragment >
                {/* mobile */}
                <MediaQuery minWidth={12} maxWidth={999} >
                    <div className="padMob2 border" >
                        <div className="text-center text-main animated fadeInUp ">
                            <h1 className='display-4 p-4'><b>Загаловок</b></h1>
                            <h1 className='paddingLR'>
                                текст
                            </h1>
                        </div>
                    </div>
                    {animateList.map((item, key) => (
                    <div style={styles.block} className={item.Bg} key={key}>
                        <Fade bottom big >
                            <div className='block'>
                                <div className="">
                                    <img  src={item.Image} alt="" height="155px" width="155px"/>
                                </div>
                                <div className="mobile" ref={this.myRef}>
                                    <h1 className='font-weight-bold'>{`${item.Title}`}</h1>
                                    <p/>{`${item.Text}` }<p/>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    ))}
                </MediaQuery>

                {/* desktop */}
                <MediaQuery minWidth={1000}>
                    <div className="pad border">
                    <div className="text-center text-main animated fadeInUp">
                        <h1 className='display-4 p-5'><b>Загаловок</b></h1>
                        <h1>
                            текст
                        </h1>
                    </div>
                    </div>
                    {animateList.map((item, key) => (
                    <div style={styles.block} className={item.Bg} key={key}>
                    <Fade bottom big >
                    <span className='block d-flex'>
                        <div className="p-5">
                            <img src={item.Image} alt="" height="355px" width="355px" />
                        </div>
                        <div className='p-5 desktop'>
                            <h1 className='font-weight-bold display-1'>{`${item.Title}`}</h1>
                            <p/>{`${item.Text}` }<p/>
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