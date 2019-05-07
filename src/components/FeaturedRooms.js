import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    return (
      <div>
        <h1>from FeaturedRooms</h1>
      </div>
    );
  }
}
