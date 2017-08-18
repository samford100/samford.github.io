// import Post1 from '/posts/Post1/Post1.js';
// import Post2 from '/posts/Post1/Post2.js';
// import Post3 from '/posts/Post1/Post3.js';
// import Post4 from '/posts/Post1/Post4.js';

import React, {Component} from 'react';

export default posts = [
	{title: "Post 1", createdAt: Date.now(), content: Post1},
	{title: "Post 2", createdAt: Date.now(), content: Post1},
	{title: "Post 3", createdAt: Date.now(), content: Post1},
	{title: "Post 4", createdAt: Date.now(), content: Post1},
]

class Post1 extends Component {
	render() {
		return (
			<div className="blog-content">
				<p>Blog content wooo</p>
			</div>
		)
	}
}
