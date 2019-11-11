class Machine extends React.Component{
  render() {
    return (
      <div>
        <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
        <p>{this.saySomething(this.props.s1, this.props.s2, this.props.s3)}</p>
      </div>
    )
  }

  saySomething(s1 , s2 , s3){
    if( (s1 === 'x') && (s2 === 'x') && (s3 === 'x')){
      return 'You Win!';
    }else{
      return 'You Lose!';
    }
  }
}