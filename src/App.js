import React from 'react';

import CardList from './components/cardList/CardList';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';

import { SearchContext } from './App-context';

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.updateCardList = (keywords) => {
      this.setState({
        keywords: keywords
      });
    }

    this.state = {
      keywords: "",
      updateCardList: this.updateCardList
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
  
        <SearchContext.Provider value={this.state}>

          <Toolbar />

          <CardList />

        </SearchContext.Provider>
        
      </div>
    );
  }
}

export default App;
