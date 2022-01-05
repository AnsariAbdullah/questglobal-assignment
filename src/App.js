import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components'
import Card from './components/card';
import Footer from './components/footer';
import NavBar from './components/navBar';

const AppWrapper = styled.div`
	.container{
		width: 1024px;
		padding: 0 50px;
		margin: 0 auto;
		.slider{
			margin-top: 30px;
		}
	}
	@media (max-width: 768px) {
		.container{
			width: 100%;
			padding: 0 20px;
		}
	}
	@media (max-width: 425px) {
		.container{
		}
	}
`

const Grid = styled.div`
	margin: 50px auto 70px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 10px;
	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 425px) {
		grid-template-columns: 1fr;
	}
`


const App = () => {

	const [data, seData] = useState([]);

	useEffect(()=>{
		fetch(`https://tvapiv2.voot.com/wsv_1_0/episode/list.json?tvSeriesId=361251&from=1&to=20&sortId=mostPopular`)
		.then(res => res.json())
		.then(data => seData(data.assets))
		.catch(err => console.log('There was a problem ', err))
	}, [])

	return (
		<AppWrapper>
			<NavBar />

			{/* <div>
				
			</div> */}

			<div className="container">
				<Carousel className="slider">
					{data && data.map(item =>
						<Carousel.Item key={item.mId}>
							<img
								className="d-block w-100"
								src={item.imgURL}
								alt={item.mediaName}
							/>
							<Carousel.Caption>
								<h3>{item.mediaName}</h3>
								<p>{item.desc}</p>
							</Carousel.Caption>
						</Carousel.Item>
					)}
				</Carousel>
				<Grid>
					{data && data.map(item => 
						<Card
							key={item.mId}
							image={item.imgURL2x3}
							title={item.mediaName}
						/>
					)}
				</Grid>
			</div>

			<Footer />
		</AppWrapper>
	);
}

export default App;
