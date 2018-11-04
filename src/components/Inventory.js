import React from "react";
import PropTypes from "prop-types";
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from "./Login";
import base, { firebaseApp } from "../base";
import firebase from "firebase";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updatedFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

authHandler = async (authDate) => {
  const store = await base.fetch()


  console.log(authDate);
}
authenticate = (provider) => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
}

  render(){
    return <Login authenticate={this.authenticate}/>
    return(
    <div className="inventory">
      <h2>Inventory</h2>
      {Object.keys(this.props.fishes).map(key =>
        <EditFishForm
        key={key}
        index={key}
        fish={this.props.fishes[key]}
        updateFish={this.props.updateFish}
        deleteFish={this.props.deleteFish}
        />)}
      <AddFishForm addFish={this.props.addFish} />
      <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
    </div>
  );
  }
}

export default Inventory;
