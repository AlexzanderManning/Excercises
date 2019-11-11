class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props; //destrucuring

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(x => <li>{x}</li>)}
        </ul>
      </div>
    )
  }
}