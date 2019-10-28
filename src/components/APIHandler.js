import React, { Component } from 'react';
import axios from 'axios';


const MoviesAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 1000
})

class APIHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                results: [],
                adult: false,
                backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
                belongs_to_collection: null,
                budget: 63000000,
                genres: [
                    {
                        id: 18,
                        name: 'Drama'
                    }
                ],
                homepage: '',
                id: 550,
                imdb_id: 'tt0137523',
                original_language: 'en',
                original_title: 'Fight Club',
                overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
                popularity: 0.5,
                poster_path: null,
                release_date: '1999-10-12',
                revenue: 100853753,
                runtime: 139,
                status: 'Released',
                tagline: 'How much can you know about yourself if you\'ve never been in a fight?',
                title: 'Fight Club',
                video: false,
                vote_average: 7.8,
                vote_count: 3439
            }
        }
    }
    async componentDidMount() {
        this.setState({
            loading: true
        });
        try {
            const { data } = await MoviesAPI.get(`movie/${this.props.category}?language=en-US&api_key=3d7fd0461ae8d0f2e808c37fb41950d7`);
            console.log(`Data from request to category ${this.props.category}: `, data)
            this.setState({ data });
        } catch (error) {
            console.log(error);
            this.setState({ error });
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        let data = this.state.data;
        return !this.state.loading ? (
            <>
                {this.props.render(data)}
            </>
        ) : <h1>Espere</h1>
    }
}

export default APIHandler;