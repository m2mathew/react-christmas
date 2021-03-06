import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Spinner from './Spinner';
import ArticleNavigation from './ArticleNavigation';
import Resources from './Resources';
import SpectrumCallout from './SpectrumCallout';
import * as breakpoints from './breakpoints';

const DateBadge = styled.div`
  align-items: center;
  background-color: #d00;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 32px;
  height: 75px;
  justify-content: center;
  margin: 50px auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 75px;
`;

const Title = styled.h1`
  font-size: 3em;
  hyphens: auto;
  margin-top: 0;

  ${breakpoints.mediumUp} {
    text-align: center;
  }
`;

const LeadParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 100;
  line-height: 1.6;
`;

const Markdown = styled.div`
  line-height: 1.6;

  pre {
    background-color: #333;
    color: #fff;
    overflow-x: scroll;
    padding: 12px;
  }

  a {
    color: #d00;
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 16px;
  }

  code {
    background-color: #eee;
    border-radius: 2px;
    display: inline-block;
    padding: 0 2px;
  }

  pre > code {
    background-color: transparent;
    padding: 0;
  }
`;

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: undefined,
      postNotFound: false,
    };
  }

  componentDidMount() {
    this.getPost(this.getPostId());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.date !== nextProps.match.params.date) {
      this.getPost(Number(nextProps.match.params.date));
    }
  }

  async getPost(postId) {
    try {
      const post = await import(`./posts/post-${postId}`);
      this.setState({ post: post.default, postNotFound: false });
    } catch (e) {
      this.setState({ post: undefined, postNotFound: true });
    }
  }

  getPostId() {
    return Number(this.props.match.params.date);
  }

  isValidPost() {
    const postId = this.getPostId();
    const now = new Date();
    return !isNaN(postId)
      && postId > 0
      && postId < 25
      && (postId <= now.getDate() || process.env.NODE_ENV !== 'production');
  }

  render() {
    const {
      post,
      postNotFound,
    } = this.state;

    if (!this.isValidPost() || postNotFound) {
      return <Redirect to="/" />;
    }

    if (!post) {
      return (
        <Spinner>Loading</Spinner>
      );
    }

    const postId = this.getPostId();
    const todaysDate = new Date().getDate();

    return (
      <article>
        <Helmet>
          <title>{post.title} - A React Christmas</title>
          <meta property="og:title" content={post.title} />
          <meta property="og:url" content={`https://react.christmas/${postId}`} />
          <meta property="og:description" content={post.lead} />
        </Helmet>
        <ArticleNavigation
          previousId={postId - 1}
          nextId={postId + 1}
          hasNextPost={postId < todaysDate}
        />
        <DateBadge>{postId}</DateBadge>
        <Title>{post.title}</Title>
        <LeadParagraph>{post.lead}</LeadParagraph>
        <Markdown dangerouslySetInnerHTML={{ __html: post.body }} />
        <Resources resources={post.resources} />
        <ArticleNavigation
          previousId={postId - 1}
          nextId={postId + 1}
          hasNextPost={postId < todaysDate}
        />
        <SpectrumCallout />
      </article>
    );
  }
}

export default ArticlePage;
