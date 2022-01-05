import React, {useState} from 'react';
import styled from 'styled-components';
import { colours } from '../styles/variables';

const NavBarWrapper = styled.div`
	padding: 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${colours.white};
	background: ${colours.primaryBackground};
	font-weight: 500;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	.logo{
		text-transform: uppercase;
	}
	.mobile-menu{
		display: none;
	}
	.navigation-menu{
		display: flex;
		align-items: center;
		.primary{
			margin-right: 55px;
			font-weight: 900;
		}
	}
	@media (max-width: 768px) {
		.mobile-menu{
			display: block;
		}
		.navigation-menu{
			display: none
		}
		&.show-menu{
			.mobile-menu{
				display: none !important;
			}
			.navigation-menu{
				display: flex !important;
			}
		}
	}
`

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => setShowMenu(!showMenu);

	return (
		<NavBarWrapper className={showMenu ? 'nav show-menu' : 'nav'} >
			<p className="logo">Moviepedia</p>
			<div className="mobile-menu" onClick={toggleMenu}>
				<svg id="Group_14699" data-name="Group 14699" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
					<g id="Ellipse_611" data-name="Ellipse 611" fill="none" stroke="#fff" strokeWidth="1.5">
						<circle cx="17.5" cy="17.5" r="17.5" stroke="none"/>
						<circle cx="17.5" cy="17.5" r="16.75" fill="none"/>
					</g>
					<g id="left-arrow_1_" data-name="left-arrow (1)" transform="translate(14.666 12)">
						<g id="Group_4392" data-name="Group 4392">
							<path id="Path_13023" data-name="Path 13023" d="M107.539,5.882,102.43.773a.452.452,0,1,1,.64-.64L108.5,5.562a.452.452,0,0,1,0,.64l-5.429,5.429a.452.452,0,0,1-.64-.64Z" transform="translate(-102.298 0)" fill="#fff" stroke="#fff" strokeWidth="1"/>
						</g>
					</g>
				</svg>
			</div>
			<div className="navigation-menu">
				<p className="links primary">All Movies</p>
				<p className="links">About</p>
			</div>
		</NavBarWrapper>
	);
}
 
export default NavBar;