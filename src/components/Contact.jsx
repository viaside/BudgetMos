import React, {Component} from "react";
import { Jumbotron, Button } from "reactstrap";

class Contact extends Component {
    render() {

    return(
        <div className="desktop ">
            <div className="pad-contact border">
                <h1 className="text-center text-main animated fadeInUp ">Разработчики</h1>
            </div>
            <div className="jumbotron p-5 black ">
                <h1 className="display-3">Киселева Екатерина Дмитриевна</h1>
                <p className="lead">Разработала весь дизайн сайта, создала svg картинки, наполнела сайт информацией.</p>
                <hr className="my-2" />
                <p>Junior frontend/Design разработчик, ученик 3 курса колледжа.</p>
                <p className="lead">
                <a href="https://github.com/Notb0" className="text-main bord1">Узнать больше</a>
                </p>
            </div>
            <div className="jumbotron p-5 blue">
                <h1 className="display-3">Волошин Иван Анатольевич</h1>
                <p className="lead">Разработал сайт</p>
                <hr className="my-2" />
                <p>Junior frontend разработчик, ученик 3 курса колледжа.</p>
                <p className="lead">
                <a href="https://github.com/viaside" className="text-main bord2">Узнать больше</a>
                </p>
            </div>
        </div>
    );
    }
}

export default Contact