import React from 'react'
import axios from 'axios';
import _ from 'lodash';

import Card from '../card/Card';
import LoadingBar from '../loadingBar/LoadingBar';

import { SearchContext } from '../../App-context';

class CardList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            cardList: [],
        }

        
        this.initialized = false;
        this.name = undefined;
        this.keywords = "";
        this.nextPage = "";
    }

    render() {

        return(
            <div className="cardList">

                <LoadingBar loading={this.state.loading} />
                
                {this.state.cardList.map((card) => {
                    return(
                        <Card key={card.id} card={card} />
                    );
                })}
            </div>
        );
    }

    componentDidMount() {
        if (!this.initialized) {
            // Initialize the cardList
            axios.get('https://api.elderscrollslegends.io/v1/cards', {
                params: {
                    pageSize: 20
                }
            }).then(response => {
                console.log(response);
                this.initialized = true;
                this.nextPage = response.data._links.next;

                this.setState({
                    loading: false, 
                    cardList: response.data.cards, 
                });

                document.addEventListener('scroll', _.throttle(this.handleScroll, 200));
            }).catch(error => {
                console.log(error);
            });
        }
    }

    componentDidUpdate() {
        if (this.context.keywords !== this.keywords) {
            this.keywords = this.context.keywords;
            this.fetchCards(this.context.keywords);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', _.throttle(this.handleScroll, 200));
    }

    fetchCards(input) {
        // API calls (Includes next page calls, and new keyword searches)

        // Initialize fetch parameters
        let params = {
            params: {
                pageSize: 20,
                name: this.name,
            }   
        }

        if (typeof(input) !== "undefined") {
            params.params.name = input;
            this.name = input;
        }

        // Only query the api if there are results to grab
        // Ex: don't query if we've reached the end of the result set
        if (typeof(input) !== "undefined" || this.nextPage !== "") {

            // Use default URI if making a new query, otherwise use the saved nextPage URI
            let URI = (typeof(input) !== "undefined")
                ? 'https://api.elderscrollslegends.io/v1/cards'
                : this.nextPage;

            this.setState({loading: true});

            axios.get(URI, params)
            
            .then(response => {
                // If there isn't a next page, set it to an empty string
                this.nextPage = (response.data._links && response.data._links.next)
                    ? response.data._links.next
                    : "";

                // If a new query was made, replace cardList, otherwise add results to the end
                this.setState((prevState) => {
                    return (typeof(input) !== "undefined")
                    ? { cardList: [...response.data.cards] }
                    : { cardList: [...prevState.cardList, ...response.data.cards] }
                });

                this.setState({loading: false});

                document.addEventListener('scroll', _.throttle(this.handleScroll, 200));

            }).catch(error => {
                console.log(error);
            })
        }
    }

    // Listener function
    handleScroll = () => {
        const container = document.querySelector('.cardList');
        if (this.isBottom(container)) {
            document.removeEventListener('scroll', this.handleScroll);
            if (!this.state.isLoading) {
                this.fetchCards();
            }
        }
    }

    // Helper functions 
    isBottom = (element) => {
        let isBottom = Math.floor(element.getBoundingClientRect().bottom) <= window.innerHeight;
        
        // Only return true if we aren't already fetching the next page
        return isBottom && !this.state.loading;
    }
}

CardList.contextType = SearchContext;

export default CardList;