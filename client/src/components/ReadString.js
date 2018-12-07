import React from "react";

export default class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    console.log(drizzle);
    console.log(drizzleState);
    const contract = drizzle.contracts.MyStringStore;
    const dataKey = contract.methods["myString"].cacheCall();
    this.setState({ dataKey });
  }

  render() {
    const { MyStringStore } = this.props.drizzleState.contracts;
    const myString = MyStringStore.myString[this.state.dataKey];
    return <div>My stored string: {myString && myString.value}</div>;
  }
}
