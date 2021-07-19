import React from 'react'

function Categories({ items, onClick }) {
	return (
		<div className="categories">
			<ul>
				<li className="active">Все</li>
				{items.map( (category, index) => (
					<li onClick={() => onClick(category)} 
							key={`${category}_${index}`
					}>
							{category}
					</li>
				))}
			</ul>
		</div>
	)
};

export default Categories;
