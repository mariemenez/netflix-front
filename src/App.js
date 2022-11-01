import "./App.css";

import data from "./data.json";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <header>
        <img
          src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png"
          alt="logo-netflix"
        />
      </header>
      <main>
        {data.map((elem) => {
          return <Section category={elem.category} images={elem.images} />;
        })}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
