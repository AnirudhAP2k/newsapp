import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defaultImg from "../defaultImg.jpg";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "General",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category} - NewsCounter`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-4">
        <strong>
          <h1 className="text-center" style={{ margin: "20px 0px" }}>
            {this.props.category} - Top Headlines
          </h1>
        </strong>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.state.totalResults}
          loader={this.state.articles.length < this.state.totalResults && <Spinner/>}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imgUrl={
                        element.urlToImage ? element.urlToImage : defaultImg
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      newsSource={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default News;
