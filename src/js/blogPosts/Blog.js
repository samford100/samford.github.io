import React, {Component} from 'react'
import posts from '/posts.js'

export default class Blog extends Component {
	render() {
		return (
			<div className="blog">
				<h1 className="blog-header">Sam Ford's Blog</h1>
				<PostList />
				<Post post={posts[0]} />
			</div>
		)
	}
}

class PostList extends Component {
	render() {
		const mappedPostLinks = postTitles.map((post) => 
			<li className="post-item"><Link to={`/blog/${post.title}`} ></Link></li>

		return (
			<ul className="post-list">
				{mappedPostLinks}
			</ul>
		)
	}
}

class Post extends Component {
	render() {
		return (
			<div className="post">
				<h1 className="post-header">{this.props.post.title}</h1>
				<h5>{this.props.createdAt}</h5>
				<div>
					{this.props.post.content}
				</div>
			</div>
		)
	}
}