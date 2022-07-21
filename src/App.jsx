
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import { Formik } from "formik";

//axios.defaults.baseURL = `https://pixabay.com/27144211-7692123c331450892536fcf0f/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`;




class App extends Component {
  render() {
    return (
      <>
      <Searchbar onSubmit={(console.log)}/>
      </>
    );
  }
}



export default App;
