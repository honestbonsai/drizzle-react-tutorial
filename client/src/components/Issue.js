import React from "react";
import PropTypes from "prop-types";
import { ContractData } from "drizzle-react-components";
import SetString from "./SetString";

export default class Issue extends React.Component {
  constructor(props, context) {
    super(props);
    this.context = context;
    console.log("ISSUE", this.context, this.props.drizzleState);
  }

  render() {
    console.log("ISSUE render", this.context, this.props.drizzleState);
    return (
      <div>
        <ContractData contract="MyStringStore" method="myString" />
        <SetString
          drizzle={this.context.drizzle}
          drizzleState={this.props.drizzleState}
        />
      </div>
    );
  }
}

Issue.contextTypes = {
  drizzle: PropTypes.object
};
