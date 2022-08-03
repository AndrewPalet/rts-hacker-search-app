import React, { useState } from "react";
import RtsApiClient from "../clients/RtsApiClient";
import Story, { StoryProps } from "../components/Story";
import { Link } from "react-router-dom";
import { HISTORY_PAGE } from "./Paths";
import { HistoryProps } from "../App";

const Search = ({ history, setHistory }:HistoryProps) => {

  const [stories, setStories] = useState<StoryProps[]>([]);
  const [search, setSearch] = useState<string>("");
  
  const searchStories = (searchTerm: string) => {
    RtsApiClient.getStories(searchTerm)
      .then((response) => {
        //handle success
        setStories(
          response.hits.map((hit: any) => {
            return {
              created_at: hit.created_at,
              title: hit.title,
              url: hit.url,
              author: hit.author,
              points: hit.points,
              num_comments: hit.num_comments,
            };
          })
        );
      })
      .catch((error) => {
        //handle error
        console.log("error:", error);
      });
  };

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearch(event.target.value);
  };

  const onSubmitSearch = () => {
    searchStories(search);
    setHistory([...history, search]);
  };

  return (
    <div className="App">
      <h1>Hacker News Search App</h1>
      <input
        type="text"
        placeholder="Search stories by title, url or author"
        value={search}
        onChange={onSearchChange}
        size={50}
      />
      <input type="submit" value="Search" onClick={onSubmitSearch} />
      <button><Link to={HISTORY_PAGE}>History</Link></button>
      {stories.map((story, idx) => {
        return (
          <Story
            key={idx}
            created_at={story.created_at}
            title={story.title}
            url={story.url}
            author={story.author}
            points={story.points}
            num_comments={story.num_comments}
          />
        );
      })}
    </div>
  );
};

export default Search;
