import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UserCardInfo({ items }: any) {

    return (
        <>
            {
                items.map((item: any, idx: number) => {
                    return (
                        <div key={idx} className="col-sm-6 col-lg-3 col-12">
                            <div className="card border-0 card-bg-shadow card-darkmode">
                                <div className="card-text d-flex align-items-center">
                                    <div className={`sourcevisite-edit-${idx + 1} me-3`} >
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-items-center gap-2" style={{ marginBottom: "-9px" }}>
                                            <h6 className="h5">{item.amount}</h6>
                                            <span className="text-success font-weight-medium">
                                                <FontAwesomeIcon icon={item.icon2} />
                                                {item.percentage}</span>
                                        </div>
                                        <span className="text-secondary">{item.desc}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    );
}