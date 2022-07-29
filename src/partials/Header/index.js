import { useState } from "react";
import { Container } from "./styled";
import { MenuToggle } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {

    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible(!visible);
    }

    return (
        <>
            <Container>
                <Link to="/" className="logo">
                    <span className="logo-1">ToDo</span>
                    <span className="logo-2">X</span>

                </Link>
                <nav>
                    <div className="nav-toggle" onClick={handleToggle}>
                        <div className="line-toggle"></div>
                        <div className="line-toggle"></div>
                        <div className="line-toggle"></div>
                    </div>

                    <ul className="nav-laptop">
                        <li><Link to="/">Meus Afazeres</Link></li>
                        <li><Link to="incomplete-tasks">A Fazer</Link></li>
                        <li><Link to="completed-tasks">Concluídos</Link></li>
                        <li>
                            <Link to="hire-me">
                                <button>Me Contrate!</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Container>
            <MenuToggle visible={visible}>
                <ul className="nav-tablet">
                    <li><Link to="/">Meus Afazeres</Link></li>
                    <li><Link to="incomplete-tasks">A Fazer</Link></li>
                    <li><Link to="completed-tasks">Concluídos</Link></li>
                    <li>
                        <Link to="hire-me">
                            <button>Me Contrate!</button>
                        </Link>
                    </li>
                </ul>
            </MenuToggle>
        </>
    );
}

export default Header;