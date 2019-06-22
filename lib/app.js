/* 
-add a search bar and button
-figure out input text field
-add someway to handle click events
-setup "controlled component"
  -store the text value fo the input in React State
  -when new input is entered, first change it in the React State,
  -then render the component based off that react state
-add functionality to handle search */
var Search = () => {
  return console.log('Marvin');
};

var typing = text => {
  this.setState({
    inputTest: text
  });
  console.log('i got it going');
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTest: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({
      inputText
    });
    console.log(event.target.value);
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "MovieList"), React.createElement("input", {
      value: this.state.inputTest,
      type: "text",
      onChange: this.handleChange
    }), React.createElement("button", {
      onClick: Search
    }, " Search "), React.createElement("ul", null, this.props.movies.map(movie => React.createElement("li", {
      key: movie.id
    }, " ", movie.title, " "))));
  }

} // this.state.inputTest = text


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBpbmciLCJ0ZXh0Iiwic2V0U3RhdGUiLCJpbnB1dFRlc3QiLCJBcHAiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsImlucHV0VGV4dCIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7O0FBYUEsSUFBSUEsTUFBTSxHQUFHLE1BQUs7QUFDZCxTQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLENBQVA7QUFDSCxDQUZEOztBQUlBLElBQUlDLE1BQU0sR0FBSUMsSUFBRCxJQUFVO0FBQ25CLE9BQUtDLFFBQUwsQ0FBYztBQUFDQyxJQUFBQSxTQUFTLEVBQUVGO0FBQVosR0FBZDtBQUNBSCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNILENBSEQ7O0FBS0EsTUFBTUssR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFpQztBQUM3QkMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFZO0FBQUNOLE1BQUFBLFNBQVMsRUFBQztBQUFYLEtBQVo7QUFDQSxTQUFLTyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0g7O0FBRUxELEVBQUFBLFlBQVksQ0FBQ0UsS0FBRCxFQUFRO0FBQ2hCLFVBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQS9CO0FBQ0EsU0FBS2IsUUFBTCxDQUFjO0FBQUNXLE1BQUFBO0FBQUQsS0FBZDtBQUNKZixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQXpCO0FBQ0M7O0FBR0RDLEVBQUFBLE1BQU0sR0FBRTtBQUNKLFdBQ0osaUNBQ0ksNENBREosRUFFSTtBQUFPLE1BQUEsS0FBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV04sU0FBekI7QUFBb0MsTUFBQSxJQUFJLEVBQUMsTUFBekM7QUFBZ0QsTUFBQSxRQUFRLEVBQUcsS0FBS087QUFBaEUsTUFGSixFQUdJO0FBQVEsTUFBQSxPQUFPLEVBQUViO0FBQWpCLGtCQUhKLEVBSVEsZ0NBQ0csS0FBS1csS0FBTCxDQUFXUyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQkMsS0FBSyxJQUFJO0FBQUksTUFBQSxHQUFHLEVBQUlBLEtBQUssQ0FBQ0M7QUFBakIsWUFBdUJELEtBQUssQ0FBQ0UsS0FBN0IsTUFBL0IsQ0FESCxDQUpSLENBREk7QUFVRDs7QUF6QjhCLEMsQ0E0QmpDOzs7QUFHQSxlQUFlakIsR0FBZjtBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIFxuLWFkZCBhIHNlYXJjaCBiYXIgYW5kIGJ1dHRvblxuLWZpZ3VyZSBvdXQgaW5wdXQgdGV4dCBmaWVsZFxuLWFkZCBzb21ld2F5IHRvIGhhbmRsZSBjbGljayBldmVudHNcbi1zZXR1cCBcImNvbnRyb2xsZWQgY29tcG9uZW50XCJcbiAgLXN0b3JlIHRoZSB0ZXh0IHZhbHVlIGZvIHRoZSBpbnB1dCBpbiBSZWFjdCBTdGF0ZVxuICAtd2hlbiBuZXcgaW5wdXQgaXMgZW50ZXJlZCwgZmlyc3QgY2hhbmdlIGl0IGluIHRoZSBSZWFjdCBTdGF0ZSxcbiAgLXRoZW4gcmVuZGVyIHRoZSBjb21wb25lbnQgYmFzZWQgb2ZmIHRoYXQgcmVhY3Qgc3RhdGVcbi1hZGQgZnVuY3Rpb25hbGl0eSB0byBoYW5kbGUgc2VhcmNoICovXG5cblxuXG5cbnZhciBTZWFyY2ggPSAoKT0+IHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coJ01hcnZpbicpXG59XG5cbnZhciB0eXBpbmcgPSAodGV4dCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0VGVzdDogdGV4dH0pXG4gICAgY29uc29sZS5sb2coJ2kgZ290IGl0IGdvaW5nJylcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPXtpbnB1dFRlc3Q6Jyd9O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG5oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW5wdXRUZXh0fSlcbmNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbn1cblxuXG5yZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuPGRpdj5cbiAgICA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRUZXN0fSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPSB7dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e1NlYXJjaH0+IFNlYXJjaCA8L2J1dHRvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1vdmllcy5tYXAobW92aWUgPT4gPGxpIGtleSA9IHttb3ZpZS5pZH0+IHttb3ZpZS50aXRsZX0gPC9saT4pIH1cbiAgICAgICAgPC91bD4gXG48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gdGhpcy5zdGF0ZS5pbnB1dFRlc3QgPSB0ZXh0XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiA8aDE+TW92aWVMaXN0PC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPk1lYW4gR2lybHM8L2xpPlxuICAgICAgICAgICAgPGxpPkhhY2tlcnM8L2xpPlxuICAgICAgICAgICAgPGxpPlRoZSBHcmV5PC9saT5cbiAgICAgICAgICAgIDxsaT5TdW5zaGluZTwvbGk+XG4gICAgICAgICAgICA8bGk+RXggTWFjaGluYTwvbGk+XG4gICAgICAgIDwvdWw+IFxuICAgICAgICAqLyJdfQ==