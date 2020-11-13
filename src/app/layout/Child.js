import React from "react";
import Newtext from './newtext'

 const persons =["harshan","sujan","sunil"];
 const colors= true;
// const persons = [
//   {
//     id: 1,
//     name: "harshan",
//     city: "guntur",
//     age: 26,
//   },
//   {
//     id: 2,
//     name: "harshanarun",
//     city: "hyd",
//     age: 27,
//   },
//   {
//     id: 3,
//     name: "harshanra",
//     city: "indor",
//     age: 28,
//   },
// ];

const personList = persons.map((person,index) => {
  return <Newtext textcolor={colors} key={index} person={person} />;
});

function Child() {
  return <div>{personList}</div>;
}
export default Child;
