import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./component/Home"
import About from "./component/About"
import Terms from "./component/Terms"

function App() {
  return (
    <div className="App">
      <head>
        <title>OurApp</title>
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300,400,400i,700,700i&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="main.css" />
      </head>
      <body>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about-us" element={<About/>}/>
            <Route path="terms" element={<Terms/>}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </body>
    </div>
  )
}

export default App
