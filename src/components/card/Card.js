import React from 'react'
import './Card.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: props.card.imageUrl,
            name: props.card.name,
            rarity: props.card.rarity,
            setName: props.card.set.name,
            rarity: props.card.rarity,
            type: props.card.type,
            text: props.card.text,
        }
    }

    render() {
        return(
            <div className="card">
                <img src={this.state.imageUrl} alt="card"/>
                
                <div className="card-content">
                    <h2>{this.state.name}</h2>
                    <p><strong>Set Name: </strong>{this.state.setName}</p>
                    <p><strong>Rarity: </strong> {this.state.rarity}</p>
                    <p><strong>Type:</strong> {this.state.type}</p>
                    <p className="text"><strong>Text:</strong> {this.state.text}</p>
                </div>

            </div>
        );
    }
}

export default Card;