import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import img1 from '../Images/img1.svg';
import './Test.css';
import MediaQuery from 'react-responsive'

const animateList = [
    { id: 1, Title: 'Для чего нужен бюджет для граждан?', Text: 'Бюджет для граждан призван помогать информировать жителей страны о финансовой политике государства, решениях, которые принимает правительство.', Image: img1, Bg: 'black'},
    { id: 2, Title: 'Бюджет для граждан', Text: 'Бюджет для граждан – это документ (аналитический материал), разрабатываемый и публикуемый в открытом доступе финансовым органом соответствующего публично-правового образования в целях предоставления гражданам актуальной информации о бюджете и отчете о его исполнении в объективной, заслуживающей доверия, доступной и простой для понимания форме.', Image: img1, Bg: 'blue'},
    { id: 3, Title: 'Бюджет', Text: 'Бюджет - форма образования и расходования денежных средств, предназначенных для финансового обеспечения задач и функций государства и местного самоуправления. В общих чертах, бюджет - это план доходов и расходов на очередной финансовый год и плановый период (два предстоящих года).', Image: img1, Bg: 'black'},
    { id: 4, Title: 'Какой есть бюджет?', Text: 'Здесь возможны три различных варианта: сбалансированный бюджет - расходы бюджета равны доходам дефицитный бюджет - расходы бюджета превышают доходы профицитный бюджет - доходы бюджета превышают расходы.', Image: img1, Bg: 'blue'},
    { id: 5, Title: 'Что входит в бюджет?', Text: 'налоги, акцизные сборы, таможенные пошлины, доходы от государственной собственности, поступление денег из фондов социального страхования, пенсионного и страхового фондов, займы, эмиссия денег.', Image: img1, Bg: 'black'}
];


export default class ReactReveal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if (350 < window.scrollY){
        }
    }
    
    render() {
        return (
            <Fragment >
                <MediaQuery minWidth={12} maxWidth={999} >
                    <div className="padMob2 border" >
                        <div className="text-center text-main animated fadeInUp ">
                            <h1 >
                                <h1 className='display-4 text-bold p-5'><b>РОЛЬ БЮДЖЕТА ГОРОДА <br/> МОСКВЫ ДЛЯ ГРАЖДАН</b></h1>
                                <p className=''>бюджет для граждан призван помогать <br/>
                                    информировать жителей Москвы 
                                    о финансовой политике, <br/>
                                    решениях, которые принимает <br/>
                                    правительство для снижения <br/>
                                    уровня бедности</p>
                            </h1>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <div className="pad border" >
                        <div className="text-center text-main animated fadeInUp ">
                            <h1 >
                                <h1 className='display-4 text-bold p-5'><b>РОЛЬ БЮДЖЕТА ГОРОДА <br/> МОСКВЫ ДЛЯ ГРАЖДАН</b></h1>
                                <p className=''>бюджет для граждан призван помогать <br/>
                                    информировать жителей Москвы 
                                    о финансовой политике, <br/>
                                    решениях, которые принимает <br/>
                                    правительство для снижения <br/>
                                    уровня бедности</p>
                            </h1>
                        </div>
                    </div>
                </MediaQuery>

                    <MediaQuery minWidth={12} maxWidth={999} >
                        {/* mobile */}
                        {animateList.map((item, key) => (
                            <div style={styles.block} className={item.Bg} key={key}>
                                <Fade bottom big >
                                    <div className='block'>
                                        <div className="">
                                            <img height="155px" width="155px" src={item.Image} alt="image"/>
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

                    <MediaQuery minWidth={1000}>
                        {/* desktop */}
                        {animateList.map((item, key) => (
                            <div style={styles.block} className={item.Bg} key={key}>
                                <Fade bottom big >
                                    <span className='block d-flex'>
                                        <div className="p-5">
                                            <img height="355px" width="355px" src={item.Image} alt="image"/>
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
        height: '1000px',
        borderBottom: '1px solid rgba(255,255,255,.2)',
        minWidth: '100%',
        minHeight: '100%'
    }
};