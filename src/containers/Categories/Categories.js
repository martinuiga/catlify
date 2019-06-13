import React, {Component} from 'react';
import './Categories.css';
import {getCategories} from "../../services/categories";
import {connect} from 'react-redux';

import * as actions from '../../store/actions/index';
import {getCats} from "../../services/cats";


class Categories extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}

	componentWillMount() {
		return getCategories()
			.then((categories) => {
				this.setState({categories});
			});
	}

	changeCategory = (id) => {
		this.props.onSetCategory(id);
		this.props.onSetNewCatCategory();
		this.getMoreCats(id);
	};

	getMoreCats = (id) => {
		return getCats(id)
			.then((cats) => {
				this.props.onSetCats(cats);
			});
	};

	render() {
		return (
			<div>
				{this.state.categories.map((value) => {
					return (<div className="panel" key={value.id} onClick={() => this.changeCategory(value.id)}>
						<div className="example-block">{value.name}</div>
					</div>)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		category: state.cats.category,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSetCategory: (category) => dispatch(actions.setCategory(category)),
		onSetNewCatCategory: () => dispatch(actions.setCatsToNull()),
		onSetCats: (cats) => dispatch(actions.setCats(cats))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
