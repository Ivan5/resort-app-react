import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    return (
      <div>
        <h1>from FeaturedRooms</h1>
      </div>
    );
  }
}
