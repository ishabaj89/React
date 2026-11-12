
import Profile from "./Components/Profile.jsx";
function App() {
  return(
    <>
    <Profile title="Isha" age = "36" isEmployed = {true}></Profile>
    <Profile  title="Aman" age = "40"> isEmployed = {true}</Profile>
    <Profile  title="David" age = "41"> isEmployed = {false}</Profile>
    

    </>
  )
}

    

export default App;
