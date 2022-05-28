import React from 'react';
import axios from 'axios'

class PostList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                List post data
                {
                    posts.length ? posts.map(obj => <div key={obj.id}>{ obj.title }</div>) : null
                }
            </div>
        )
    }
}

export default PostList;