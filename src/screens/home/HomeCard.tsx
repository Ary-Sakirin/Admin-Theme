import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatisticIcon } from "../../components/StatisticIcon/StatisticIcon";


export default function HomeCard() {

    return (

        <>
            <div className="container">
                <div className="row card-row">
                    <div className="col-md-5 col-lg-4">
                        <div className="card border-0 card-bg-shadow card-darkmode">
                            <div className="row">
                                <div className="col-8">
                                    <div className="card-text card-body ">
                                        <h6 className="text-no-wrap font-weight-semibold">Congratulations John!🎉</h6>
                                        <p className="mb-2"> Best seller of the month </p>
                                        <h5 className="text-h5 font-weight-semibold text-primary mb-2"> $48.9k </h5>
                                        <button type="button" className="btn bg-primary text-white">VIEW SALES</button>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card-text pb-0 px-0 position-relative h-100">
                                        <div className="responsive img w-100 position-absolute image-size">
                                            <img src="/people.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8 col-12">
                        <div className="card  border-0 card-bg-shadow h-100 card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title h6">Statistics</div>
                                </div>
                                <div className="card-item__append">
                                    <span className="text-body-2">Updated 1 month ago</span>
                                </div>
                            </div>
                            <div className="card-text pt-6 ">
                                <div className="row">
                                    <div className="col-md-3 col-6">
                                        <div className="d-flex">
                                            <div className="bg-avatar avatar--variant-tonal me-3">
                                                <FontAwesomeIcon icon={faUsers} />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="text-h6 font-weight-medium">230k</span>
                                                <span className="text-caption">Sales</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="d-flex">
                                            <div className="bg-avatar avatar--variant-tonal me-3">
                                                <FontAwesomeIcon icon={faUsers} />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="text-h6 font-weight-medium">8.549k</span>
                                                <span className="text-caption">Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="d-flex">
                                            <div className="bg-avatar avatar--variant-tonal me-3">
                                                <FontAwesomeIcon icon={faUsers} />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="text-h6 font-weight-medium">1.423k</span>
                                                <span className="text-caption">Products</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        <div className="d-flex">
                                            <div className="bg-avatar avatar--variant-tonal me-3">
                                                <FontAwesomeIcon icon={faUsers} />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span className="text-h6 font-weight-medium">$9745</span>
                                                <span className="text-caption">Revenue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row card-row">
                            <div className="col-sm-6 col-md-3 col-lg-6 col-12">
                                <div className="card  border-0 card-bg-shadow card-darkmode">
                                    <div className="card-text position-relative">
                                        <div>
                                            <h6 style={{
                                                fontSize: "20px",
                                                lineHeight: "2px !important"
                                            }}>82.5k</h6>
                                            <span className="text-disabled text-sm">Expenses</span>
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                        <div className="text-sm text-center text-disabled "> $21k Expenses more than last month </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-6 col-12">
                                <div className="card  border-0 card-bg-shadow card-darkmode">
                                    <div className="card-text position-relative">
                                        <div>
                                            <h6 style={{
                                                fontSize: "20px",
                                                lineHeight: "2px !important"
                                            }}>Profit</h6>
                                            <span className="text-disabled text-sm">Last Monthses</span>
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                        <div className="d-flex align-content-center justify-content-between mt-6">
                                            <h6 className="text-h6 text-center font-weight-semibold"> 624k </h6>
                                            <span className="text-sm text-success"> +8.24% </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12 col-12 mt-3">
                                <div className="card  border-0 card-bg-shadow  card-darkmode">
                                    <div className="card-text d-flex justify-space-between">
                                        <div className="d-flex flex-column">
                                            <div className="mb-4">
                                                <h6 style={{
                                                    fontSize: "20px",
                                                    lineHeight: "2px !important"
                                                }}>Generated Leads</h6>
                                                <span className="text-disabled text-sm">Monthly Report</span>
                                            </div>
                                            <div>
                                                <h5 className="text-h5 mb-1"> 4,350 </h5>
                                                <div className="text-sm">
                                                    <span className="text-success font-weight-medium">15.8% </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="card card-row  border-0 card-bg-shadow card-darkmode" style={{ height: "388px" }}>
                            <div className="v-row v-row--no-gutters">
                                <div className="col-sm-8 col-lg-8 col-12 big-card">
                                    <div className="card-text pe-2">
                                        <h6 className="text-h6 mb-6"> Revenue Report </h6>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-12">
                                    <div className="card-text d-flex flex-column justify-content-center align-items-center" style={{ height: "388px" }}>
                                        <button type="button" className="btn border-primary text-primary" style={{ width: "100px" }}>2021&nbsp;<FontAwesomeIcon icon={faCaretDown} /></button>
                                        <div>
                                            <br /><br /><br /><br /><br />
                                        </div>
                                        <div className="d-flex flex-column align-items-center mt-3">
                                            <h5 className="font-weight-semibold text-h5"> $25,825 </h5>
                                            <p>
                                                <span className="text-high-emphasis font-weight-semibold me-1">Budget:</span>
                                                <span>56,800</span>
                                            </p>
                                        </div>
                                        <button type="button" className="btn btn-primary">INCREASE BUDGET</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}