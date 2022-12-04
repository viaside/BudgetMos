import React, {Component} from "react";

class Contact extends Component {
    render() {

    return(
        <div className="desktop ">
            <div className="border pad-contact">
                <h1 className="text-center text-main animated fadeInUp ">Разработчики</h1>
            </div>
            <div className="jumbotron p-5 white ">
                <div className="vrt">
                <h1 className="display-3">Киселева Екатерина Дмитриевна</h1>
                <p className="lead">Разработала весь дизайн сайта, создала svg картинки, наполнила сайт информацией.</p>
                <hr className="my-2" />
                <p>Junior frontend разработчик, ученик 3 курса колледжа.</p>
                <p className="lead">
                <a href="https://github.com/Notb0" className="text-main bord1">Узнать больше</a>
                </p>
                </div>
            </div>
            <div className="jumbotron p-5 blue">
                <div className="vrt">
                <h1 className="display-3">Волошин Иван Анатольевич</h1>
                <p className="lead">Разработал сайт</p>
                <hr className="my-2" />
                <p>Junior frontend разработчик, ученик 3 курса колледжа.</p>
                <p className="lead">
                <a href="https://github.com/viaside" className="text-main bord2">Узнать больше</a>
                </p>
                </div>
            </div>
            <div className="jumbotron p-5 white">
                <div className="vrt">
                <h1 className="display-3">Преподаватель</h1>
                <p className="lead">Руководитель проекта</p>
                <hr className="my-2" />
                <p></p>
                <p className="lead">
                <a href="https://github.com/viaside" className="text-main bord2">Узнать больше</a>
                </p>
                </div>
            </div>
        </div>
    );
    }
}

export default Contact