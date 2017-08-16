import React, {Component} from 'react'


export default class BuildingPt1 extends Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		)
	}
}

const Header = () => 
	<div class="header">
		<h1 class="header-title">Building a Blog with React from Scratch Part 1</h1>
		<h3 class="header-subtitle">Alternative Title: <i>Slowly Learning Why Sane People Use a CMS aka It's Not too Late to Turn Back</i></h3>
		<h4>July 21, 2017</h4>
	</div>

class Body extends Component {
	render() {
		return (
			<div class="body">
				<div class="body-section">
					<p class="body-section-paragraph">
						I'm trying to write the first post to my blog that doesn't exist. Feels 
						kind of like this
					</p>
					<img src="http://www.michaelbransonsmith.net/blog/wp-content/uploads/2012/08/spare-track.gif" />
					<p>
						This post is going to read a little strangely, as I'll be somewhere between 
						a stream of consciousness and uhhhh something. I'll get back to this.
						In this first post I'd like to talk through a couple things.
					</p>
					<ul class="list">
						<li>My motivations for building a blog from scratch</li>
						<li>My overall goal for the content of this blog</li>
						<li>The blog's visual and structural design</li>
						<li>What I learned writing/building this first post</li>
					</ul>
					<p>
						Talking through these points will hopefully help me actually figure out the
						answers. Anyway, let's start with my motivations.
					</p>

					<h3 class="section-header">Motivations</h3>
					<p>
						Ok, so I'm going into this project pretty blind. I've mulled over the idea 
						of starting a blog for a while, mostly because I read a lot of tech and sports blogs 
						and really enjoy the content. But finding content is hard so I never
						(and still haven't at this time of writing) thought about how to design a blog. I finally
						pulled the triggers one night (tonight, duh) and googled "How to build a blog". 
						The results were disapointing for me, with a lot of results tailored for 
						people looking to easily share their content, not practice any web development. 
						So a few more google searches with keywords like "from scratch" and "React" yielded 
						nothing that I wanted to get involved with. Mostly because I would get it set up in 
						minutes and then have nothing to write about. So I decided to try to write one from 
						scratch and that would be the content. In addition to providing first post material, 
						it will allow me to continually work with web technology and solve what I think is 
						an interesting design problem.
					</p>

					<h3 class="section-header">Content Goal</h3>
					<p>
						Writing the previous paragraph has already given me some ideas for content. 
						My first post, (this one), will just be about these three points and will be 
						the only content on the blog section of my website. I'll probably put some joke 
						in at the end of this post saying "come back again and read about how I decided 
						to handle multiple posts and how I completely changed the format of this post 
						when I realized it would never scale and it would be so hard to map links to each 
						post and keep them as react components as well as many othe issues I still don't 
						know about". Yeah, I'll end with something like that, but I'll make it funny by 
						the time I get to the end of this post.
					</p>
					<p>
						Once I have the blog completed, I'll be forced to actually think up new content. 
						On one hand, it will be difficult to think up content, but on the other hand, if 
						I make this a 14 part series on building a blog from scratch, that means I really 
						messed up somewhere. So I'm hoping for the content route. Content wise, I'll 
						try to keep focused around my favorite things in tech, specifically web development 
						(I love React - give me a job Mark), Machine Learning (practice makes perfect), and 
						plain ole' math, ideally something that can be represented and explained visually so 
						I can maybe finally learn D3. I just don't get it why do you select something that's not 
						there this just can't be a thing that makes sense to anyone.
						<img src="looking 4 meme" />
						<caption>Spent 10 minutes looking for a meme. No dice.</caption>
						Besides those, I may make a personal section for myself if I find I enjoy writing 
						enough, as well as a section for trash talking non-Boston/New England sports teams 
						(PAUL PIERCE WILL RETIRE A CELTIC let's go). I'll filter these differently, not because 
						I don't think they will be as interesting pieces, but it sounds like an interesting 
						design problem for this blog. Oh great problems are already cropping up.
					</p>
					<h3 class="section-header">Design Goal</h3>
					<p>
						I saved this section for last because I knew writing the last two paragraphs 
						would start to give me some ideas of what kind of issues I'll run into and 
						how I want to structure the website. I'm going to start writing this paragraph and 
						I'm not even sure where it'll go. So I think I'll have a link to the blog on my main 
						site. This link will point either to the blog homepage, which will show the most recent 
						post, or directly to the first post. It'll take trying to implement both before I 
						decide on one. From there, there will likely be a link to a page with links to all 
						previous posts. This will be a good, functional enough, starting point. This is a pretty 
						typical workflow for me when designing website. If I have a list of something and I want 
						to display information about each, I'll just throw them in on a list as links on some page,
						and design the individual pages from there. Then I'll clean up the design once I get 
						a better idea of the usecases.
					</p>
					<h3 class="section-header">What I Learned Writing/Designing this Post</h3>
					<p>
						I learned a couple things already, but I know it will only get more 
						challenging. This will just be linked to the /blog path and will be 
						pasted right there, so I didn't have think about anything more complicated 
						than just writing some basic HTML (JSX ok). I may not even complete the css 
						by the time I post this. It's part of it, ok, trust the process.  
					</p>
					<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">Al Horford hits the three to give the <a href="https://twitter.com/hashtag/Celtics?src=hash">#Celtics</a> the one point lead. <a href="https://t.co/NuyTBVKGQR">pic.twitter.com/NuyTBVKGQR</a></p>&mdash; Jared Weiss (@JaredWeissNBA) <a href="https://twitter.com/JaredWeissNBA/status/817567675379552256">January 7, 2017</a></blockquote>
					<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
					<caption>#threeinchvertcornerthree. #trustthehorford</caption>
					<p>
						I also learned that writing from top to bottom is much more important 
						than creating React components.
						
					</p>
					<img src="lister" />
					<caption>Me attempting to use best practices</caption>
					<img src="lister2" />
					<caption>Me failing to use best practices</caption>
					<p>
						Also, I embedded a twitter video just to learn how. Worth it.
					</p>

					<h3 class="section-header">Conclusion</h3>
					<p>
						Thanks for reading along everyone (Hi Mom). Stay tuned for the next post. 
						I'll be focusing on all things I am currently doing wrong and dedicate at 
						least a paragraph to how näive I am.
					</p>
					<p class="signoff">
						Cheers, <br />
						Sam
					</p>


				</div>
			</div>
		)
	}
}





