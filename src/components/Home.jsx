import React, { Component} from 'react';
import MediaQuery from 'react-responsive'
import Fade from 'react-reveal/Fade';
import Carousel from 'react-elastic-carousel'
import img1 from '../Images/img1.svg';
import med from '../Images/med.svg';
import nac from '../Images/nacia.svg'
import plan from '../Images/PLANNING.svg'

const CarouselItems = [
    { id: 1, img: med, title: 'Здравоохранение', text: "381,6 млрд рублей" },
    { id: 2, img: nac, title: 'Национальная экономика', text: "1042,6 млрд рублей" },
    { id: 3, img: img1, title: 'Социальная политика', text: "551,8 млрд рублей" },
    { id: 4, img: img1, title: 'Образование', text: "479,7 млрд рублей" },
    { id: 5, img: img1, title: 'Физическая культура и спорт', text: "68,0 млрд рублей" }
];

const AnimatedListItems = [
    { id: 1, img: img1, title: 'БЮДЖЕТНАЯ КЛАССИФИКАЦИЯ', text: "Бюджетная классификация Российской Федерации является группировкой доходов, расходов и источников финансирования дефицитов бюджетов бюджетной системы Российской Федерации, используемой для составления и исполнения бюджетов, а также группировкой доходов, расходов и источников финансирования дефицитов бюджетов и (или) операций сектора государственного управления, используемой для ведения бюджетного (бухгалтерского) учета, составления бюджетной (бухгалтерской) и иной финансовой отчетности, обеспечивающей сопоставимость показателей бюджетов бюджетной системы Российской Федерации." },
    { id: 2, img: plan, title: 'ПЛАНИРОВАНИЕ БЮДЖЕТА', text: (<>
        <p>Решение о начале работы над  составлением  проекта  бюджета принимает Премьер Правительства Москвы   в   соответствии   с нормативными актами, определяющими  особенности  бюджетной  системы Российской Федерации в планируемом бюджетном году. <br/> Далее Правительство Москвы готовит проект бюджетного  послания  и представляет его Мэру Москвы. Бюджетное  послание  Мэра  Москвы  Московской  городской  Думе включает в себя: </p>
        <ul>
            <li>оценку  исполнения  бюджета   предшествующего и текущего финансовых годов; </li>
            <li>прогноз   основных   показателей    социально-экономического положения Москвы в соответствующий период; </li>
            <li>основные приоритеты бюджетной политики Москвы в  наступающем финансовом году; </li>
            <li>сведения о прогнозируемых доходах бюджета Москвы; </li>
            <li>проект бюджета Москвы.</li>
        </ul>
     </>)},
];

const animateListDesktop = [
    { id: 1, Text:  
    <span>
    <div id='carousel'>
        <h1 className='vam font-weight-bold display-1'>ОСНОВНЫЕ НАПРАВЛЕНИЯ БЮДЖЕТЫ</h1>
        <Carousel className="styling-example p-5" itemsToShow={1}>
            {CarouselItems.map((item, key) => (
                <div className="Item" key={key}>
                    <p><img src={ item.img } alt=""></img></p>
                    <p><b>{ item.title }</b></p>
                    <p>{ item.text }</p>
                </div>
            ))}
        </Carousel> 
    </div>
    </span>, Bg: 'white'},
    { id: 2, Text: 
    <span className='block d-flex'>
        <div className="p-5">
            <img src={ AnimatedListItems[0].img } alt="" height="355px" width="355px"/>
        </div>
        <div className='p-5 desktop'>
            <h1 className='font-weight-bold display-1'>{ AnimatedListItems[0].title }</h1>
            <p/>{ AnimatedListItems[0].text }<p/>
        </div>
    </span>, Bg: 'blue'},
        { id: 3, Text: 
            <span className='block d-flex'>
                <div className='p-5 desktop'>
                    <h1 className='font-weight-bold display-1'>{ AnimatedListItems[1].title }</h1>
                    <p/>{ AnimatedListItems[1].text }<p/>
                </div>
                <div className="p-5">
                    <img src={ AnimatedListItems[1].img } alt="" height="355px" width="355px"/>
                </div>
            </span>, Bg: 'white'},
];

const animateListMobile = [
    { id: 1, Text:
    <span >
    <div className='paddingLR'>
        <h1 className='font-weight-bold vam'><b>ОСНОВНЫЕ НАПРАВЛЕНИЯ БЮДЖЕТЫ</b></h1>
        <Carousel className="styling-example-mobile" itemsToShow={1}>
            {CarouselItems.map((item, key) => (
                <div className="ItemMobile" key={key}>
                    <p><img src={ item.img } alt=""></img></p>
                    <p><b>{ item.title }</b></p>
                    <p>{ item.text }</p>
                </div>
            ))}
        </Carousel> 
    </div>
    </span>, Bg: 'white'},
    { id: 2, Text: 
    <span className=''>
        <div>
            <img src={ AnimatedListItems[0].img } alt="" height="200px" width="200px" />
        </div>
        <div className='mobile'>
            <h1 className='font-weight-bold display-1'>{ AnimatedListItems[0].title }</h1>
            <p className='smallFont'>{ AnimatedListItems[0].text }</p>
        </div>
    </span>, Bg: 'blue'},
    { id: 3, Text: 
        <span className=''>
            <div>
                <img src={ AnimatedListItems[1].img } alt="" height="200px" width="200px" />
            </div>
            <div className='mobile'>
                <h1 className='font-weight-bold '>{ AnimatedListItems[1].title }</h1>
                <p className='verySmallFont'>{ AnimatedListItems[1].text }</p>
            </div>
        </span>, Bg: 'white'},
];

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
            {/* mobile */}
            <MediaQuery minWidth={12} maxWidth={999} >
                <div className="padMob2 border" >
                    <div className="text-center text-main animated fadeInUp ">
                        <h1 className='display-4 p-4'><b>БЮДЖЕТ</b></h1>
                        <h1 className='paddingLR'>
                        форма образования и расходования 
                        денежных средств, предназначенных 
                        для финансового обеспечения задач 
                        и функций государства и местного самоуправления.
                        </h1>
                    </div>
                </div>
                {animateListMobile.map((item, key) => (
                <div style={styles.block} className={item.Bg} key={key}>
                <Fade bottom big >
                    <div className='blockMobile mobile d-flex'>
                        {item.Text}
                    </div>
                </Fade>
                </div>
                ))}
            </MediaQuery>

            {/* desktop */}
            <MediaQuery minWidth={1000}>
                <div className="pad border">
                    <div className="text-center text-main animated fadeInUp">
                        <h1 className='display-1 font-weight-bold p-5'>БЮДЖЕТ</h1>
                        <h1 className=''>
                        форма образования и расходования <br/>
                        денежных средств, предназначенных <br/>
                        для финансового обеспечения задач <br/>
                        и функций государства <br/>
                        и местного самоуправления.
                        </h1>
                    </div>
                </div>
                {animateListDesktop.map((item, key) => (
                <div style={styles.block} className={item.Bg} key={key}>
                    <Fade bottom big >
                    <div className='block desktop paddingLR'>
                        {item.Text}
                    </div>
                    </Fade>
                </div>
                ))}
            </MediaQuery>
            </div>
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