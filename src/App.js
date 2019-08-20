import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';


// flicker apiKey
import apiKey  from './config.js';

// React Components
import Gallery from './Components/Gallery';
import Header from './Components/Header';

class App extends Component {
    state = {
        images: [],
        loading: true
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (tag) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
                this.setState({
                images: response.data.photos.photo,
                loading: false,
            })
        })
        .catch(error => {
        console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return (
            <BrowserRouter>
            <div className="container">
                <Header onSearch={this.performSearch} />

                {
                    (this.state.loading)
                    ? <p>Loading...</p>
                    :
                    <Switch>
                    <Route exact path='/' render={() =>
                    <Gallery title="cats" data={this.state.images} /> } />
                    <Route path='/cats' render={() =>
                    <Gallery title="cats" data={this.state.images} /> } />
                    <Route path='/dogs' render={() =>
                    <Gallery title="dogs" data={this.state.images} /> } />
                    <Route path='/fish' render={() =>
                    <Gallery title="fish" data={this.state.images} /> } />
                    <Route path='/:tag' render={({match}) =>
                    <Gallery title={match.params.tag} data={this.state.images} /> } />
                    </Switch>
                }
            </div>
            </BrowserRouter>
            )
        }
    }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
export default App;
