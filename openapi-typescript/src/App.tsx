import { PetService, UserService } from "./generated";

function App() {
  PetService.getPetById(9223372036854572000)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  PetService.findPetsByStatus(["pending", "sold"])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  UserService.loginUser("ibad", "1234")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <>dfgsdf</>;
}

export default App;
