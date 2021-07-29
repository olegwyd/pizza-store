import React, { useState } from 'react';

const Categories = React.memo(function ({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'active' : ''}
        >
          Все
        </li>
        {items &&
          items.map((category, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${category}_${index}`}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;

/*
export default class Categories extends React.Component {
	state = {
		activeItem: null
	};

	onSelectItem(index){
		this.setState({
			activeItem: index
		})
	}

	render(){
		return (
			<div className="categories">
				<ul>
					<li>Все</li>
						{this.props.items.map( (category, index) => (
						<li className={this.state.activeItem === index ? 'active' : ''}
								onClick={() => this.onSelectItem(index)} 
								key={`${category}_${index}`
						}>
						{category}
					</li>
				))}
				</ul>
			</div>
		)
	}
}

*/
