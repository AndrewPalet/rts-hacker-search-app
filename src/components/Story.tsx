import React from 'react';
import './Story.css';

export interface StoryProps {
    created_at: string;
    title: string;
    url: string;
    author: string;
    points: number;
    num_comments: number;
}

const Story = (story:StoryProps) => {
    const { created_at, title, url, author, points, num_comments } = story;
    const date = new Date(created_at);
    
    return(
        <div className='Story'>
            <div className='Story-title'>
                <a href={url}>{title}</a>
                <a href={url}>({url})</a>
            </div>
            <div className='Story-contents'>
                <span>{points} points</span>
                <span> | </span>
                <span>{author}</span>
                <span> | </span>
                <span>{date.toDateString()}</span>
                <span> | </span>
                <span>{num_comments} comments</span>
            </div>
        </div>
    );
}

export default Story;