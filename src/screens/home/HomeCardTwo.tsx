import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";


export default function HomeCradTwo() {
    return (
        <>
            <div className="container">
                <div className="row card-row">
                    <div className="col-sm-6 col-lg-4 col-12">
                        <div className="card border-0 card-bg-shadow card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Sales by Countries</div>
                                    <div className="card-subtitle text-disabled">Monthly Sales Overview</div>
                                </div>

                                <div className="card-item__append">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                            <div className="card-items">
                                <div className="v-list v-theme--light v-list--density-default v-list--one-line card-list">
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/usa.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$8,567k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">United states</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-success">
                                                <FontAwesomeIcon icon={faChevronUp} />&nbsp;
                                                <span className="font-weight-medium">25.8%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/brazil.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$2,415k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Brazil</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-danger">
                                                <FontAwesomeIcon icon={faChevronDown} />&nbsp;
                                                <span className="font-weight-medium">6.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/India.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$865k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">India</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-success">
                                                <FontAwesomeIcon icon={faChevronUp} />&nbsp;
                                                <span className="font-weight-medium">25.8%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/Australia.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$745k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Australia</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-danger">
                                                <FontAwesomeIcon icon={faChevronDown} />&nbsp;
                                                <span className="font-weight-medium">11.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/France.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$45k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">France</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-success">
                                                <FontAwesomeIcon icon={faChevronUp} />&nbsp;
                                                <span className="font-weight-medium">16.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-2">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal" style={{ width: "34px", height: "34px" }}>
                                                <div className="v-responsive v-img">
                                                    <img src="/China.png" alt="" className="v-img__img v-img__img--contain" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">$12k</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">China</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold text-success">
                                                <FontAwesomeIcon icon={faChevronUp} />&nbsp;
                                                <span className="font-weight-medium">14.8%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-12">
                        <div className="card border-0 card-bg-shadow card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Source Visits</div>
                                    <div className="card-subtitle text-disabled">38.4k Visitors</div>
                                </div>

                                <div className="card-item__append">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                            <div className="card-items">
                                <div className="v-list v-theme--light v-list--density-default v-list--one-line card-list">
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Direct Source</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Direct link click</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">1.2k</span>
                                                <span className="badge bg-success">+ 4.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Direct Source</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Direct link click</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">1.2k</span>
                                                <span className="badge bg-success">+ 4.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Social Network</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Social Channels</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">31.5k</span>
                                                <span className="badge bg-success">+ 8.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Referrals</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Impact Radius Visits</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">342</span>
                                                <span className="badge bg-danger">-0.4%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faPercent} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">ADVT</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Google ADVT</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">2.15k</span>
                                                <span className="badge bg-success">+ 9.1%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-2">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Other</div>
                                            <div className="v-list-item-subtitle opacity-100 text-disabled">Many Sources</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="me-2" data-v-be2475e6="">12.5k</span>
                                                <span className="badge bg-success">+ 6.2%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-12">
                        <div className="card border-0 card-bg-shadow card-darkmode">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Monthly Campaign State</div>
                                    <div className="card-subtitle text-disabled">8.52k Social Visiters</div>
                                </div>

                                <div className="card-item__append">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                            <div className="card-items">
                                <div className="v-list v-theme--light v-list--density-default v-list--one-line card-list">
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-1 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="v-list-item v-theme--light v-list-item--density-default v-list-item--one-line v-list-item--variant-text mb-2 item-edit">
                                        <span className="v-list-item__underlay"></span>
                                        <div className="v-list-item__prepend me-3">
                                            <div className="v-avatar text-secondary v-avatar--density-default v-avatar--variant-tonal sourcevisite-edit" >
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </div>
                                        </div>
                                        <div className="v-list-item__content">
                                            <div className="v-list-item-title font-weight-medium">Emails</div>
                                        </div>
                                        <div className="v-list-item__append">
                                            <div className="d-flex align-items-center justify-items-center font-weight-semibold">
                                                <span className="font-weight-medium me-2">12,346</span>
                                                <span className="text-success font-weight-medium">0.3%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 col-lg-12 col-12">
                        <div className="card border-0 card-bg-shadow mt-3">
                            <div className="card-item">
                                <div className="card-item__content">
                                    <div className="card-title">Sales by Countries</div>
                                    <div className="card-subtitle text-disabled">Monthly Sales Overview</div>
                                </div>

                                <div className="card-item__append">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}