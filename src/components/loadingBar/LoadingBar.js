import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import './LoadingBar.scss';

class LoadingBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: this.props.loading
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.loading !== state.loading) {
            return {
                loading: props.loading
            };
        } else return null;
    }

    render() {
        return(
            <div className={this.state.loading ? 'loading' : 'loading invisible'}>
                <BeatLoader
                    color={"#1EAEDB"}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default LoadingBar;