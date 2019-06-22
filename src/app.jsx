

/* 
-add a search bar and button
-figure out input text field
-add someway to handle click events
-setup "controlled component"
  -store the text value fo the input in React State
  -when new input is entered, first change it in the React State,
  -then render the component based off that react state
-add functionality to handle search */




var Search = ()=> {
    return console.log('Marvin')
}

var typing = (text) => {
    this.setState({inputTest: text})
    console.log('i got it going')
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={inputTest:''};
        this.handleChange = this.handleChange.bind(this);
    }

handleChange(event) {
    const inputText = event.target.value;
    this.setState({inputText})
console.log(event.target.value)
}


render(){
    return (
<div>
    <h1>MovieList</h1>
    <input value={this.state.inputTest} type="text" onChange= {this.handleChange}/>
    <button onClick={Search}> Search </button>
        <ul>
          {this.props.movies.map(movie => <li key = {movie.id}> {movie.title} </li>) }
        </ul> 
</div>
    )
  }
}

// this.state.inputTest = text


export default App



/* <h1>MovieList</h1>
        <ul>
            <li>Mean Girls</li>
            <li>Hackers</li>
            <li>The Grey</li>
            <li>Sunshine</li>
            <li>Ex Machina</li>
        </ul> 
        */