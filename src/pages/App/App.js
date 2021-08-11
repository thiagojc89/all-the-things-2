import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import ManliestThings from '../ManliestThings/ManliestThings'
import JulianThings from '../JulianThings/JulianThings'
class App extends Component {
  state = { 
    davidsThings: [
      {
        name: "waffle",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",  
        attributes: ["fluffy", "happy", "sleepy", "dumb"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },
    ],
    thiagosThings: [
      {
        name: "guitars",
        image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk.jpg",
        attributes: ["musical", "come in many varieties", "strummable", "non-edible"],
      },
      {
        name: "movies",
        image: "https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80",
        attributes: ["enjoyable couch activity", "come in many varieties", "💙Pulp Fiction💙", "requires popcorn"],
      },
      {
        name: "beer",
        image: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2015/08/beerAllergy-1165339040-770x553-1.jpg",
        attributes: ["something fun to do in Chicago", "a great way to end a long day", "come in many varieties", "drinkable"],
      },
      {
        name: "dogs",
        image: "https://www.thesprucepets.com/thmb/pmCLFm6wMUFcCE1xeQMRfyhadxc=/1500x844/smart/filters:no_upscale()/GettyImages-175928868-120f47906f4849969fcdab28e2e4f494.jpg",
        attributes: ["come in many varieties", "man's best friend", "much better than cats", "should probably poop outside"],
      },
    ]
  } 
  render() {
    return (
      <>
        <Route exact path='/'>
          <>
            {/* All the <a> tags should live here */}
            <h1>All-The-Things</h1>
            <Link to="/the-functional-things">Shahzad's Things</Link><br/>
            <Link to="/the-well-styled-things">David's Things</Link><br/>
            <Link to="/the-manliest-things">Ben's Things</Link><br />
            <Link to="/the-best-things">Thiago's Things</Link>
          </>
        </Route>
        {/* All the <Route> components should live here */}
        <Route exact path='/the-functional-things'>
          <FunctionalThings things={this.state.shahzadsThings} />
        </Route>
        <Route exact path='/the-well-styled-things'>
          <StyledThings things={this.state.davidsThings} />
        </Route>
        <Route exact path='/the-manliest-things'>
          <ManliestThings things={this.state.bensThings} />
        </Route>
        <Route exact path='/the-best-things'>
          <JulianThings things={this.state.thiagosThings} />
        </Route>
      </>
      
    );
  }
}
 
export default App;

