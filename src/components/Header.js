import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

<FontAwesomeIcon icon={solid("user-secret")} />;

export default function Header() {
	return (
		<header className="header">
			<div className="menu-icon">
				<FontAwesomeIcon icon={solid("bars")} />
				<span className="header-text">Menu</span>
			</div>
			<div className="header-image">
				<img src="/images/header.png" alt="уролог йордан трифонов" />
			</div>
			<div className="header-nav">
				<ul>
					<li className="header-text">Локация</li>
					<li className="header-text">
						<a className="header-text" href="tel:+359888123456" title="Call +35988812456">
							0888123456
						</a>
					</li>
					<li className="header-text">Контакти</li>
				</ul>
			</div>
		</header>
	);
}
