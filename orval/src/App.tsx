import { getPetById } from "./api/petstore";

function App() {
  getPetById(9223372036854329000)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <h2>Generate types with tanstack</h2>
    </>
  );
}

export default App;
