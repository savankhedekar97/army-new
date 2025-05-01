import React from 'react';
import './News.css';

const newsItems = [
  {
    title: 'YAI Youth National – 2025',
    description: 'The YAI Youth National Regatta is scheduled with participation from across the country...',
    date: 'May 1, 2025',
    image: '/assets/news/youth2025.jpg',
  },
  {
    title: 'International Sailing Week',
    description: 'An exciting week of global sailing competition featuring top sailors...',
    date: 'April 20, 2025',
    image: '/assets/news/international_week.jpg',
  },
  {
    title: 'Army Sailing Championship',
    description: 'Army units compete in this prestigious and thrilling sailing event...',
    date: 'March 18, 2025',
    image: '/assets/news/army_championship.jpg',
  },
];

function News() {
  return (
    <div className="news-container">
      <h1 className="news-heading">YAI YOUTH NATIONAL – 2025</h1>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="news-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
