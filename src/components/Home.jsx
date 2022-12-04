import MediaQuery from 'react-responsive'
import React, { Component } from 'react';
import {  } from 'reactstrap';
import Carousel from 'react-elastic-carousel'
import '../App.css';
import img1 from '../Images/img1.svg';
import med from '../Images/med.svg';
import nac from '../Images/nacia.svg'
import plan from '../Images/PLANNING.svg'

class Home extends Component {
    constructor(props) {
        super(props);

        var minOffset = 750;
        window.addEventListener('scroll', function () {
            window.onscroll = function () {
                let has_class = document.body.classList.contains("scroll_navbar");

                if (minOffset < document.documentElement.scrollTop) {
                    if (!has_class) {
                    }
                } else if (has_class) {
                }
            }
        });
        }

    render() {

        return (
            <div className="Home desktop">
                <MediaQuery minWidth={12} maxWidth={999} >
                    <div className="padMob border">
                        <div className="text-center text-main animated fadeInUp">
                            <h1>
                                <h1 className='display-1'><b>Бюджет</b></h1>
                                <p>
                                    <br/>форма образования и расходования 
                                    <br/>денежных средств, предназначенных для
                                    <br/>финансового обеспечения задач и функций 
                                    <br/>местного самоуправления
                                </p>
                            </h1>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <div className="pad border">
                        <div className="text-center text-main animated fadeInUp">
                            <h1>
                                <h1 className='display-1'><b>Бюджет</b></h1>
                                <p>
                                    <br/>форма образования и расходования 
                                    <br/>денежных средств, предназначенных для
                                    <br/>финансового обеспечения задач и функций 
                                    <br/>местного самоуправления
                                </p>
                            </h1>
                        </div>
                    </div>
                </MediaQuery>
                <div className="text-dark">
                    <div>
                        <div className="black text-main p-5">
                            <div className="d-flex align-middle container">
                                <MediaQuery minWidth={12} maxWidth={999} >
                                    <span className="align-middle d-flex flex-column">
                                        <img height="130px" width="130px" className="p-2" src={img1} alt="girl"></img>
                                        <div className='desktop'>
                                            <h1 className='display-2'>Бюджет</h1>
                                            <p>форма образования и расходования денежных средств</p>
                                        </div>
                                    </span>
                                </MediaQuery>
                                <MediaQuery minWidth={1000}>
                                    <span className="align-middle d-flex">
                                        <img height="250px" width="250px" className="p-2" src={img1} alt="girl"></img>
                                        <div className='desktop'>
                                            <h1 className='display-2'>Бюджет</h1>
                                            <p>форма образования и расходования денежных средств</p>
                                        </div>
                                    </span>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blue text-center p-5 text-main ">

                    <h1 className='display-4'>
                        Направления расохдов бюджета города москвы
                    </h1>

                    <MediaQuery minWidth={12} maxWidth={999} >
                        {/* mobile */}
                        <Carousel className="styling-example mobile-c" itemsToShow={1}>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={med} alt="girl"></img>
                                <h4>Здравоохранение</h4>
                                <p>381,6 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={nac} alt="girl"></img>
                                <h4>Национальная экономика</h4>
                                <p>1042,6 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h4>Социальная политика</h4>
                                <p>551,8 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h4>Образование</h4>
                                <p>479,7 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h4>Физическая культура и спорт</h4>
                                <p>68,0 млрд рублей</p>
                            </div>
                        </Carousel>
                    </MediaQuery>

                    <MediaQuery minWidth={1000}>
                        {/* Desktop */}
                        <Carousel className="styling-example desktop" itemsToShow={1}>
                            <div className="Item desktop">
                                <img height="200px" width="200px" className="p-2" src={med} alt="girl"></img>
                                <h1>Здравоохранение</h1>
                                <p>381,6 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={nac} alt="girl"></img>
                                <h1>Национальная экономика</h1>
                                <p>1042,6 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h1>Социальная политика</h1>
                                <p>551,8 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h1>Образование</h1>
                                <p>479,7 млрд рублей</p>
                            </div>
                            <div className="Item">
                                <img height="200px" width="200px" className="p-2" src={img1} alt="girl"></img>
                                <h1>Физическая культура и спорт</h1>
                                <p>68,0 млрд рублей</p>
                            </div>
                        </Carousel>
                    </MediaQuery>
                </div>

                <div>
                    <div className="black text-main p-5">
                        <div className="d-flex align-middle container">
                            <MediaQuery minWidth={12} maxWidth={999}>
                                <span className="align-middle d-flex flex-column">
                                    <div>
                                        <h1 className='display-4'>БЮДЖЕТНАЯ СИСТЕМА РФ</h1>
                                        <p>Основанная на экономических отношениях и государственном устройстве Российской Федерации, регулируемая законодательством Российской Федерации совокупность федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и бюджетов государственных внебюджетных фондов</p>
                                    </div>
                                   <img height="250px" width="250px" className="p-2" src={plan} alt="girl"></img>
                                </span>
                            </MediaQuery>
                            <MediaQuery minWidth={1000}>
                                <span className="align-middle d-flex">
                                    <div>
                                        <h1 className='display-4'>БЮДЖЕТНАЯ СИСТЕМА РФ</h1>
                                        <p>Основанная на экономических отношениях и государственном устройстве Российской Федерации, регулируемая законодательством Российской Федерации совокупность федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и бюджетов государственных внебюджетных фондов</p>
                                    </div>
                                    <img height="250px" width="250px" className="p-2" src={plan} alt="girl"></img>
                                </span>
                            </MediaQuery>
                        </div>
                    </div>
                </div>
                <div className="text-main blue">
                    <div className="container p-5">
                        <span className="align-middle d-flex text-center">
                            <div>
                                <h1 className='display-4'>БЮДЖЕТНАЯ КЛАССИФИКАЦИЯ</h1>
                                <p>Бюджетная классификация Российской Федерации является группировкой доходов, расходов и источников финансирования дефицитов бюджетов бюджетной системы Российской Федерации, используемой для составления и исполнения бюджетов, а также группировкой доходов, расходов и источников финансирования дефицитов бюджетов и (или) операций сектора государственного управления, используемой для ведения бюджетного (бухгалтерского) учета, составления бюджетной (бухгалтерской) и иной финансовой отчетности, обеспечивающей сопоставимость показателей бюджетов бюджетной системы Российской Федерации</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;