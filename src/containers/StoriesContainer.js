import React, { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    console.log("count", count);
  }, [count]);

  return (
    <>
      <GlobalStyle />

      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hackers News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
