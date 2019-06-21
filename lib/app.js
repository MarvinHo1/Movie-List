const movies = [{
  id: 0,
  title: 'Mean Girls'
}, {
  id: 1,
  title: 'Hackers'
}, {
  id: 2,
  title: 'The Grey'
}, {
  id: 3,
  title: 'Sunshine'
}, {
  id: 4,
  title: 'Ex Machina'
}];
/* 
-add a search bar and button
-figure out input text field
-add someway to handle click events
-add functionality to handle search */

var Search = () => {
  return console.log('Marvin');
};

const App = () => React.createElement("div", null, React.createElement("h1", null, "MovieList"), React.createElement("input", {
  type: "text"
}), React.createElement("button", {
  onClick: Search
}, " Search "), React.createElement("ul", null, movies.map(movie => React.createElement("li", {
  key: movie.id
}, " ", movie.title, " "))));

export default App;
/* <h1>MovieList</h1>
        <ul>
            <li>Mean Girls</li>
            <li>Hackers</li>
            <li>The Grey</li>
            <li>Sunshine</li>
            <li>Ex Machina</li>
        </ul> 
        */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIm1vdmllcyIsImlkIiwidGl0bGUiLCJTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiQXBwIiwibWFwIiwibW92aWUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBRyxDQUNYO0FBQUNDLEVBQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU9DLEVBQUFBLEtBQUssRUFBRTtBQUFkLENBRFcsRUFFWDtBQUFDRCxFQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFPQyxFQUFBQSxLQUFLLEVBQUU7QUFBZCxDQUZXLEVBR1g7QUFBQ0QsRUFBQUEsRUFBRSxFQUFDLENBQUo7QUFBT0MsRUFBQUEsS0FBSyxFQUFFO0FBQWQsQ0FIVyxFQUlYO0FBQUNELEVBQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU9DLEVBQUFBLEtBQUssRUFBRTtBQUFkLENBSlcsRUFLWDtBQUFDRCxFQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFPQyxFQUFBQSxLQUFLLEVBQUU7QUFBZCxDQUxXLENBQWY7QUFRQTs7Ozs7O0FBTUEsSUFBSUMsTUFBTSxHQUFHLE1BQUs7QUFDZCxTQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLENBQVA7QUFDSCxDQUZEOztBQUtBLE1BQU1DLEdBQUcsR0FBRyxNQUFNLGlDQUNkLDRDQURjLEVBRWQ7QUFBTyxFQUFBLElBQUksRUFBQztBQUFaLEVBRmMsRUFHZDtBQUFRLEVBQUEsT0FBTyxFQUFFSDtBQUFqQixjQUhjLEVBSVYsZ0NBQ0dILE1BQU0sQ0FBQ08sR0FBUCxDQUFXQyxLQUFLLElBQUk7QUFBSSxFQUFBLEdBQUcsRUFBSUEsS0FBSyxDQUFDUDtBQUFqQixRQUF1Qk8sS0FBSyxDQUFDTixLQUE3QixNQUFwQixDQURILENBSlUsQ0FBbEI7O0FBUUEsZUFBZUksR0FBZjtBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW92aWVzID0gW1xuICAgIHtpZDowLCB0aXRsZTogJ01lYW4gR2lybHMnfSxcbiAgICB7aWQ6MSwgdGl0bGU6ICdIYWNrZXJzJ30sXG4gICAge2lkOjIsIHRpdGxlOiAnVGhlIEdyZXknfSxcbiAgICB7aWQ6MywgdGl0bGU6ICdTdW5zaGluZSd9LFxuICAgIHtpZDo0LCB0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbiAgXTtcblxuLyogXG4tYWRkIGEgc2VhcmNoIGJhciBhbmQgYnV0dG9uXG4tZmlndXJlIG91dCBpbnB1dCB0ZXh0IGZpZWxkXG4tYWRkIHNvbWV3YXkgdG8gaGFuZGxlIGNsaWNrIGV2ZW50c1xuLWFkZCBmdW5jdGlvbmFsaXR5IHRvIGhhbmRsZSBzZWFyY2ggKi9cblxudmFyIFNlYXJjaCA9ICgpPT4ge1xuICAgIHJldHVybiBjb25zb2xlLmxvZygnTWFydmluJylcbn1cblxuXG5jb25zdCBBcHAgPSAoKSA9PiA8ZGl2PlxuICAgIDxoMT5Nb3ZpZUxpc3Q8L2gxPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtTZWFyY2h9PiBTZWFyY2ggPC9idXR0b24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bW92aWVzLm1hcChtb3ZpZSA9PiA8bGkga2V5ID0ge21vdmllLmlkfT4ge21vdmllLnRpdGxlfSA8L2xpPikgfVxuICAgICAgICA8L3VsPiBcbjwvZGl2PlxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPk1lYW4gR2lybHM8L2xpPlxuICAgICAgICAgICAgPGxpPkhhY2tlcnM8L2xpPlxuICAgICAgICAgICAgPGxpPlRoZSBHcmV5PC9saT5cbiAgICAgICAgICAgIDxsaT5TdW5zaGluZTwvbGk+XG4gICAgICAgICAgICA8bGk+RXggTWFjaGluYTwvbGk+XG4gICAgICAgIDwvdWw+IFxuICAgICAgICAqLyJdfQ==