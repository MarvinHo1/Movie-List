const movies = [
    {id:0, title: 'Mean Girls'},
    {id:1, title: 'Hackers'},
    {id:2, title: 'The Grey'},
    {id:3, title: 'Sunshine'},
    {id:4, title: 'Ex Machina'},
  ];

/* 
-add a search bar and button
-figure out input text field
-add someway to handle click events
-add functionality to handle search */

var Search = ()=> {
    return console.log('Marvin')
}


const App = () => <div>
    <h1>MovieList</h1>
    <input type="text" />
    <button onClick={Search}> Search </button>
        <ul>
          {movies.map(movie => <li key = {movie.id}> {movie.title} </li>) }
        </ul> 
</div>
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