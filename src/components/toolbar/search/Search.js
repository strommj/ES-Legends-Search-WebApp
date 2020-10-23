import React from 'react';

import { SearchContext } from '../../../App-context';

import searchIcon from './search-24px.svg';
import './Search.scss'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ""
        }
    }

    render() {
        return(
            <SearchContext.Consumer>
                {(context) => (
                    <form className="search-form" onSubmit={(event) => {
                        event.preventDefault();
                        context.updateCardList(this.state.keyword)
                    }}>
                        <input
                            name="search"
                            type="text"
                            placeholder="Search via card name"
                            value={this.state.keyword}
                            onChange={(element => this.setKeyword(element.target.value))} />
                        
                        <button type="submit">
                            <img src={searchIcon} alt="search icon"/>
                        </button>
                    </form>

                )}
            </SearchContext.Consumer>
        );
    }

    setKeyword = (value) => {
        this.setState({keyword: value})
    }
}

export default Search;