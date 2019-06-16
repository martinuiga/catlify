import React, {Component} from 'react';
import logo from '../../assets/images/logo.svg';
import './Layout.css';
import Cats from "../Cats/Cats";
import Categories from "../Categories/Categories";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {getCats} from "../../services/cats";

class Layout extends Component {

	addToLimit = () => {
		this.getMoreCats();
	};

	componentDidMount() {
		this.getMoreCats();
	}

	getMoreCats = () => {
		return getCats(this.props.category)
			.then((cats) => {
				this.props.onSetCats(cats);
			});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to CATLIFY!</h1>
				</header>
				<div className='container'>
					<div className='categories'>
						<Categories/>
					</div>
					<div className='picture-container'>
						<Cats/>
						<button className="loadButton" onClick={() => this.addToLimit()}>Load more</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		category: state.cats.category,
		cats: state.cats.cats
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSetCats: (cats) => dispatch(actions.setCats(cats))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
