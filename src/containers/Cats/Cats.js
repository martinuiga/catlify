import React, {Component} from 'react';
import './Cats.css';
import {connect} from 'react-redux';


class Cats extends Component {
	createCats = () => {
		let table = [];

		for (let i = 0; i < this.props.cats.length; i = i + 2) {
			let children = [];
			for (let j = i; j < i + 2; j++) {
				children
					.push(<div className='column' key={this.props.cats[j].id}>
						<div className='column-image'>
							<img src={this.props.cats[j].url} alt="cat"/>
						</div>
					</div>)
			}
			table.push(<div className='row' key={i}>{children}</div>)
		}
		return table
	};

	render() {
		return (
			<div>
				{this.createCats()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		cats: state.cats.cats
	}
};

export default connect(mapStateToProps)(Cats);
