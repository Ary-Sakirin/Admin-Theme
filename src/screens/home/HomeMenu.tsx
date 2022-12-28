import { faEnvelope, faCube, faBars, faEllipsis, faCheckDouble, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeMenu() {
    return (
        <div>
            <div className="nav p-4 home-menu nav-darkmode">

                <div className="container d-flex align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">
                            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                            Dashboards
                            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                        </a></li>
                        <li className="nav-item  text-color-change"><a href="#" className="nav-link">

                            <FontAwesomeIcon icon={faCube} className="me-1" />
                            App & Pages
                            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faBars} className="me-1" />
                            User Interface
                            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faCheckDouble} className="me-1" />
                            Form
                            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                        </a></li>
                        <li className="nav-item"><a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faEllipsis} className="me-1" />
                            Others
                            <FontAwesomeIcon icon={faChevronDown} className="ms-1" />
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}