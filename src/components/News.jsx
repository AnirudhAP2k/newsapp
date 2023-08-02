import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defaultImg from "../defaultImg.jpeg";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=5b3e704b452f4c5294c3e538137b1913&pageSize=9";
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }

  handlenprevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5b3e704b452f4c5294c3e538137b1913&page=${
      this.state.page - 1 }&pageSize=9`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles });
    this.setState({
      page: this.state.page - 1,
    });
  };

  handlenextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 9)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5b3e704b452f4c5294c3e538137b1913&page=${
        this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({ articles: parsedata.articles });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <div className="container my-3 d-flex justify-content-between">
          <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlenprevClick}
            >
              &larr; Previous
          </button>
          <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 9)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handlenextClick}
            >
              Next &rarr;
          </button>
      </div>
        <h1 className="text-center">NewsCounter - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgUrl={element.urlToImage ? element.urlToImage : defaultImg}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlenprevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 9)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
