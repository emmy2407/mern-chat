import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  // axios.defaults.baseURL = 'http://localhost:4040/';
  axios.defaults.baseURL = 'https://mern-chat-app-api-1tnt.onrender.com';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
