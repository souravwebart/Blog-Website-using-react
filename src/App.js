import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './app/Components/Home';
import {useSelector} from 'react-redux';
import Navbar from './app/Components/navbar';
import MobileNavBar from './app/Components/Mobilenavbar';
import Blogs from './app/Components/Blog';
import { selectSignedIn } from './features/userSlice';
import SinglePost from './app/Components/SinglePost';

function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <MobileNavBar/>
    <Route path="/post/:id?" exact={true} component={SinglePost} />
    <Route path="/" exact={true} component={Home} />
   {isSignedIn &&  <Route path="/" exact={true} component={Blogs} />}

    </div>
    </BrowserRouter>
  ); 
}

export default App;
