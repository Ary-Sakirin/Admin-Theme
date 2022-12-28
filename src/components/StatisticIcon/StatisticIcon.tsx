import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import style from "./statisticIcon.module.scss";

type Props = {
	bgIconColor?: string;
	icon?: any;
	heading?: string;
	paragraph?: string;
};

export function StatisticIcon({ bgIconColor, icon, heading, paragraph }: Props) {
	return (
		<>

			{/* <div className="d-flex align-items-center card-icon">
                <div className={` ${style.statisticIconWrapper} ${bgIconColor}`}>
                    {icon}
                </div>
                <div className={style.statisticInfo}>
                    <h5>{heading}</h5>
                    <div className="text-secondary">{paragraph}</div>
                </div>
            </div> */}


			<div className="d-flex">
				<div className={`${style.iconContainer} ${bgIconColor}`}>
					<div className={`${style.circleIcon}`}>
						{icon}
					</div>
				</div>

				<div className="d-flex flex-column">
					<div className="text-h6 font-weight-medium">{heading}</div>
					<div className="text-caption">{paragraph}</div>
				</div>
			</div>

		</>
	);
}