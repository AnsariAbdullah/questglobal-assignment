import React from 'react';
import styled from 'styled-components';
import { colours } from '../styles/variables';

const CardWrapper = styled.div`
	background: ${colours.primaryBackground};
	color: ${colours.white};
	padding: 10px;
	.image-wrapper {
		width: 100%;
		img{
			width: 100%;
		}
	}
	@media (max-width: 425px) {
		flex-direction: column;
	}
`


const Card = ({ title, image }) => {
	return (
		<CardWrapper>
			<div className="image-wrapper">
				{image ? 
					<img src={image} alt={title} />
					: <p>No image</p>
				}
			</div>
		</CardWrapper>
	);
}
 
export default Card;