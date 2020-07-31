import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
//import elements from '../Assets/allpictures.jpg';

const elements = [
	'IMG',
	'IMG-1',
	'IMG-2',
	'IMG-3',
	'IMG-4',
	'IMG-5',
	'IMG-6',
	'IMG-7',
	'IMG-8',
	'IMG-9',
	'IMG-10',
	'IMG-11',
	'IMG-12',
	'IMG-13',
	'IMG-14',
	'IMG-15',
	'IMG-16'
];

const Gallery = () => {
	return (
		<div>
			<ul>
				{elements.map((value, index) => {
					return (
						<img
							key={index}
							style={{ width: '30%', border: '2px solid orange', margin: '5px' }}
							src={`./assets/allpictures/${value}.jpg`}
						/>
					);
				})}
			</ul>
		</div>
	);
};
export default Gallery;
