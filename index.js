// Add your code here
const submitData = async (name,email) => {
    const configurationObject = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(name,email),
      };
      
      await fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          console.log(object);
        })
        .catch(function (error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
}