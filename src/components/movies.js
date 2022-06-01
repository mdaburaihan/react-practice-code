import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Pagination from './pagination'
import { paginate } from '../utils/paginate'
import ListGroup from './listgroup'
import MoviesTable from './moviesTable'
import _ from 'lodash'

class Movies extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 4,
        genres: [],
        selectedGenre: {},
        sortColumn: { path: "title", sort: "asc" }
    }

    componentDidMount(){
        const genres = [{ _id: "", name: "All Genres"}, ...getGenres()]
        this.setState({
            movies: getMovies(),
            genres: genres
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(obj => obj._id !== movie._id)
        this.setState({ movies })
    }
    handelPageChange = (page) => {
        this.setState({ currentPage: page })
    }
    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }
    handleSort = (sortColumn) => {
        this.setState({sortColumn})
    }
    render() {
        if (this.state.movies.length === 0)
            return <p>No Movies Found</p>
        const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;

        const filteredMovies = selectedGenre && Object.keys(selectedGenre).length && selectedGenre._id ? allMovies.filter(obj => obj.genre._id === selectedGenre._id) : allMovies
        
        const sortedMovies = _.orderBy(filteredMovies, [this.state.sortColumn.path], [this.state.sortColumn.sort])
        const movies = paginate(sortedMovies, currentPage, pageSize)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            items={this.state.genres} 
                            onGenereSelect={this.handleGenreSelect}
                            selectedGenre={this.state.selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <MoviesTable 
                            movies={movies} 
                            onDelete={this.handleDelete} 
                            onSort={this.handleSort}
                            sortColumn={this.state.sortColumn}
                        />
                        <Pagination itemsCount={this.state.movies.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handelPageChange} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Movies