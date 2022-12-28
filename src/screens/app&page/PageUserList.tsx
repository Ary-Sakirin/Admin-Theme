import { icon } from "@fortawesome/fontawesome-svg-core";
import { faUser, faChartSimple, faArrowTrendUp, faDollarSign, faChevronUp, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormGroup, Input, Label, Table } from "reactstrap";
import { UserCardInfo } from "../../components/UserCardInfo/UserCardInfo";

const items = [
    {
        amount: "8.458",
        percentage: " 8.1%",
        desc: "New Customers",
        icon: faUser,
        icon2: faChevronUp
    },
    {
        amount: "$28.5K",
        percentage: " 18.2%",
        desc: "Total Profit",
        icon: faChartSimple,
        icon2: faChevronUp
    },
    {
        amount: "2.450K",
        percentage: " 24.6%",
        desc: "New Transactions",
        icon: faArrowTrendUp,
        icon2: faChevronUp
    },
    {
        amount: "$48.2K",
        percentage: " 22.5%",
        desc: "Total Revenue",
        icon: faDollarSign,
        icon2: faChevronUp
    }
]

export default function PageUserList() {
    return (
        <>
            <div className="container mt-4">
                <div className="row row-card">
                    <UserCardInfo items={items} />
                    <div className="col col-12 mt-4">
                        <div className="card border-0 card-bg-shadow card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Search Filter</div>
                                </div>
                            </div>
                            <div className="card-text-1">
                                <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <FormGroup>
                                            <Input
                                                name="select"
                                                type="select"
                                                placeholder="Select Role"
                                                className="input-darkmode"
                                            >
                                                <option>
                                                    Admin
                                                </option>
                                                <option>
                                                    Author
                                                </option>
                                                <option>
                                                    Editor
                                                </option>
                                                <option>
                                                    Maintainer
                                                </option>
                                                <option>
                                                    Subscriber
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <FormGroup>
                                            <Input
                                                name="select"
                                                type="select"
                                                placeholder="Select"
                                                className="input-darkmode"
                                            >
                                                <option>
                                                    Admin
                                                </option>
                                                <option>
                                                    Author
                                                </option>
                                                <option>
                                                    Editor
                                                </option>
                                                <option>
                                                    Maintainer
                                                </option>
                                                <option>
                                                    Subscriber
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                        <FormGroup>
                                            <Input
                                                name="select"
                                                type="select"
                                                placeholder="Select"
                                                className="input-darkmode"
                                            >
                                                <option>
                                                    Admin
                                                </option>
                                                <option>
                                                    Author
                                                </option>
                                                <option>
                                                    Editor
                                                </option>
                                                <option>
                                                    Maintainer
                                                </option>
                                                <option>
                                                    Subscriber
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            <hr className="v-divider" aria-orientation="horizontal" role="separator"></hr>
                            <div className="card-text-1 d-flex flex-wrap gap-4">
                                <div className="">
                                    <Button outline>
                                        <FontAwesomeIcon icon={faFileExport}/> Export
                                    </Button>
                                </div>
                                <div className="flex-grow-1"></div>
                                <div className="d-flex">
                                    <div className="mx-3">
                                        <>
                                            <Input
                                                id="search"
                                                name="search"
                                                placeholder="Search User"
                                                type="search"
                                            />
                                        </>
                                    </div>
                                    <div>
                                        <Button
                                            color="primary"
                                        >
                                            Add User
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <hr className="v-divider" aria-orientation="horizontal" role="separator"></hr>
                            <div className="card-text-1">
                                <Table responsive>
                                    <thead className="table-darkmode">
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                            <th>
                                                Table heading
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-darkmode">
                                        <tr>
                                            <th scope="row">
                                                1
                                            </th>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                2
                                            </th>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                3
                                            </th>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                4
                                            </th>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                5
                                            </th>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                            <td>
                                                Table cell
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="card-text-1 d-flex alert align-items-baseline justify-content-between">
                                <span className="text-sm text-disabled">Showing 1 to 10 of 50 entries</span>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{ height: "200px" }}></div>
                </div>
            </div>
        </>
    );
}