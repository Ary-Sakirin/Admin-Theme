import { icon } from "@fortawesome/fontawesome-svg-core";
import { faUser, faChartSimple, faArrowTrendUp, faDollarSign, faChevronUp, faFileExport, faEllipsisVertical, faNoteSticky, faTableList } from "@fortawesome/free-solid-svg-icons";
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
                                        <FontAwesomeIcon icon={faFileExport} /> Export
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
                                                className="input-darkmode"
                                            />
                                        </>
                                    </div>
                                    <div>
                                        <Button
                                            className="fw-bold"
                                            color="primary"
                                        >
                                            ADD USER
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <hr className="v-divider" aria-orientation="horizontal" role="separator"></hr>
                            <div className="card-text-1">
                                <Table responsive className="">
                                    <thead className="table-darkmode">
                                        <tr className="tr-border">
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
                                        <tr className="tr-border">
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
                                        <tr className="tr-border">
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
                                        <tr className="tr-border">
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
                                        <tr className="tr-border">
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
                                        <tr className="tr-border">
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
                                    <ul className="pagination ">
                                        <li className="page-item">
                                            <a className="page-link page-item-dark" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link " href="#">1</a></li>
                                        <li className="page-item"><a className="page-link page-item-dark" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link page-item-dark" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link page-item-dark" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <div className="card  border-0 card-bg-shadow card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Activity Timeline</div>
                                </div>
                                <div className="card-item__append">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                            <div className="card-text">
                                <div className="v-timeline v-timeline--vertical v-timeline--align-start v-timeline--justify-auto v-timeline--truncate-line-start v-timeline--truncate-line-end v-theme--dark v-timeline--density-compact v-timeline--side-end v-timeline-density-compact">
                                    <div className="v-timeline-item">
                                        <div className="v-timeline-item__body" style={{ width: "100%" }}>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="fw-bold me-3"> Client Meeting </h6>
                                                <span className="text-sm text-disabled">Today</span>
                                            </div>
                                            <p className="mb-1"> Project meeting with john @10:15am </p>
                                            <div className="d-flex align-items-center">
                                                <div className="v-avatar v-avatar--density-default v-avatar--size-default v-avatar--variant-flat me-3">
                                                    <div className="v-responsive v-img">
                                                        <div className="v-responsive__sizer"></div>
                                                        <img className="v-img__img v-img__img--contain" src="/avatar.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-weight-semibold mb-0"> Lester McCarthy (Client) </p>
                                                    <span>CEO of Infibeam</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-timeline-divider">
                                            <div className="v-timeline-divider__dot v-timeline-divider__dot--size-x-small">
                                                <div className="v-timeline-divider__inner-dot bg-primary"></div>
                                            </div>
                                            <div className="v-timeline-divider__after"></div>
                                        </div>
                                    </div>
                                    <div className="v-timeline-item" >
                                        <div className="v-timeline-item__body" style={{ width: "100%" }}>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="fw-bold me-3"> Create a new project for client </h6>
                                                <span className="text-sm text-disabled">2 Day ago</span>
                                            </div>
                                            <p className="mb-1"> Add files to new design folder </p>
                                        </div>
                                        <div className="v-timeline-divider">
                                            <div className="v-timeline-divider__before"></div>
                                            <div className="v-timeline-divider__dot v-timeline-divider__dot--size-x-small">
                                                <div className="v-timeline-divider__inner-dot bg-success"></div>
                                            </div>
                                            <div className="v-timeline-divider__after"></div>
                                        </div>
                                    </div>
                                    <div className="v-timeline-item">
                                        <div className="v-timeline-item__body" style={{ width: "100%" }}>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="fw-bold me-3"> Shared 2 New Project Files </h6>
                                                <span className="text-sm text-disabled">6 Day ago</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <p className="mb-1">
                                                    <span className="me-2">Sent by Mollie Dixon</span>
                                                </p>
                                                <div className="v-avatar v-avatar--density-default v-avatar--variant-flat" style={{ width: "20px", height: "20px" }}>
                                                    <div className="v-responsive v-img">
                                                        <div className="v-responsive__sizer"></div>
                                                        <img className="v-img__img v-img__img--contain" src="/avatar2.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center">
                                                <a href="#" className="d-flex align-items-center a-darkmode me-3">
                                                    <FontAwesomeIcon icon={faNoteSticky} style={{ color: "orange" }} /> &nbsp;
                                                    <span className="font-weight-semibold text-base">App Guidelines</span>
                                                </a>
                                                <a href="#" className="d-flex align-items-center a-darkmode">
                                                    <FontAwesomeIcon icon={faTableList} style={{ color: "green" }} /> &nbsp;
                                                    <span className="font-weight-semibold text-base">Testing Results</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="v-timeline-divider">
                                            <div className="v-timeline-divider__before"></div>
                                            <div className="v-timeline-divider__dot v-timeline-divider__dot--size-x-small">
                                                <div className="v-timeline-divider__inner-dot bg-danger"></div>
                                            </div>
                                            <div className="v-timeline-divider__after"></div>
                                        </div>
                                    </div>
                                    <div className="v-timeline-item" >
                                        <div className="v-timeline-item__body" style={{ width: "100%" }}>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="fw-bold me-3"> Project status updated </h6>
                                                <span className="text-sm text-disabled">10 Day ago</span>
                                            </div>
                                            <p className="mb-1"> Ecommerce iOS App Completed </p>
                                        </div>
                                        <div className="v-timeline-divider">
                                            <div className="v-timeline-divider__before"></div>
                                            <div className="v-timeline-divider__dot v-timeline-divider__dot--size-x-small">
                                                <div className="v-timeline-divider__inner-dot bg-info"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-12" style={{height: "200px"}}></div>
                </div>
            </div>
        </>
    );
}