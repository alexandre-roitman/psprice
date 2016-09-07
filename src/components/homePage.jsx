import React from 'react';

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            searchResults: []
        };

        this.onQueryChange = this.onQueryChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.search = this.search.bind(this);
    }

    onQueryChange(e) {
        this.setState({query: e.target.value});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.search();
        }
    }

    search() {
        window.fetch(`/search?q=${this.state.query}`)
            .then(response => response.json())
            .then(searchResults => {
                this.setState({searchResults});
            });
    }

    render() {
        return (
            <div>
                <label>Search:</label>
                <div>
                    <input type="text" value={this.state.query} onChange={this.onQueryChange} onKeyPress={this.handleKeyPress}/>
                </div>
                <div>
                    <label>Results:</label>
                    <div>
                        {JSON.stringify(this.state.searchResults)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;