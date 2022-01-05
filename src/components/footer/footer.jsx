import React from 'react';
import styled from 'styled-components';
import { colours } from '../styles/variables';

const FooterWrapper = styled.footer`
	color: ${colours.white};
	background: ${colours.primaryBackground};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px;
	font-family: 'Roboto', sans-serif;
`

const Footer = () => {
	let d = new Date();
	return (
		<FooterWrapper className="footer">
			<p>Copyright {d.getFullYear()}</p>
			<p className="social">Follow us on Instagram</p>
		</FooterWrapper>
	);
}
 
export default Footer;