// async function getData(){  // async function can run in background
//     //simulate getting data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         },3500);

//     })
// }

//settle means resolve or reject
//resolve means promise has settle successfully
//reject means promise has not settle successfully

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //fetching the data
  let data = await x.json(); //parse to json x.text()
  // console.log(data)
  // return 455
  return data;
}

async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load data");

  let data = await getData(); // it will wait till getdata fuction will execute completely

  // data.then((v) => {
  //     console.log(data)

  //     console.log("Process data")

  //     console.log("task 2")

  // })

  console.log(data);

  console.log("Process data");

  console.log("task 2");
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded', // Another common type
    },

    body: JSON.stringify(data),
  });

  return await response.json();
}

const myData = {
  username: "exampleUser",
  email: "user@example.com",
};

postData("https://api.example.com/users", myData)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
main();
