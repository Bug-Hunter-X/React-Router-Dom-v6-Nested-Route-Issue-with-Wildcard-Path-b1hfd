```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path="/contact/details" element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function ContactLayout(){
  return(
    <div>
      <h1>Contact Us</h1>
      <Outlet/>
    </div>
  );
}

function ContactDetails() { return <div>Contact Details</div> }

export default App;
```