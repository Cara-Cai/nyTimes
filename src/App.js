import React, {Component} from 'react';
import './App.css';

let posts=[{
  date: "Oct.14,2019",
  headline:"It's the first step.",
  content:"Trying to make it work.",
  img:"http://www.centerformindfullearning.org/wp-content/uploads/2015/05/slack-imgs.com_-300x300.jpeg",
 },
 { date:"Oct.14,2019",
 headline:"Now I'm doing the second headline.",
 content:"Seems everything is OK.",
 img:"https://img.pngio.com/keep-going-png-free-download-png-mart-keep-going-png-1080_1080.png",
},
  {date:"Oct.15,2019",
  headline:"Almost there!!!",
  content:"It works!!!  Almost 8 hours'work though!!! I made it!",
  img:"http://www.photos-public-domain.com/wp-content/uploads/2012/08/done.jpg",
  }
]


function News(props){
  return(
  <div className="News">
    <div className="date">{props.date}</div>
    <div className="News-content">
      <div className="headline">{props.headline}</div>
      <div className="content">{props.content}</div>
      <div className="writer">
        <p>By CARA CAI</p>
      </div>
    </div>
    <div className="image">
      <img src={props.img} alt="gogogo" />
    </div>
   </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <News date={posts[0].date} headline={posts[0].headline} content={posts[0].content} img={posts[0].img} />
        <News date={posts[1].date} headline={posts[1].headline} content={posts[1].content} img={posts[1].img} />
        <News date={posts[2].date} headline={posts[2].headline} content={posts[2].content} img={posts[2].img} />
      </div>
    );
  }
}



export default App;
