// import React, { useState } from "react";
// import { Button, Form, Header, Segment } from "semantic-ui-react";

// function Userdata() {
//   const intialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     ipAdderss: "",
//     address1: "",
//     city: "",

//     state: "",
//     postalCode: "",
//     dateOfBirth: "",
//     ssn: "",
//   };

//   const [values, setValues] = useState(intialValues);

//   function handelSubmit() {
//     console.log(values);
//   }

//   function handelInputChange(e) {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   }

//   return (
//     <div>
//       <Segment clearing>
//         <Form onSubmit={handelSubmit}>
//           <Header content="Create an event" />

//           <Form.Field>
//             <label> First Name</label>
//             <input
//               type="text"
//               placeholder="Fast Name"
//               name="firstName"
//               value={values.firstName}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>
//           <Form.Field>
//             <label> Last Name</label>
//             <input
//               type="text"
//               placeholder="lastName"
//               name="lastName"
//               value={values.lastName}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>
//           <Form.Field>
//             <label> Enter Email</label>
//             <input
//               type="email"
//               placeholder="email"
//               name="email"
//               value={values.email}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Form.Field>
//             <label> Enter Ip Address</label>
//             <input
//               type="text"
//               placeholder="ipAdderss"
//               name="ipAdderss"
//               value={values.ipAdderss}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Form.Field>
//             <label> Enter your address</label>
//             <input
//               type="text"
//               placeholder="address1"
//               name="address1"
//               value={values.address1}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Form.Field>
//             <label> City name</label>
//             <input
//               type="text"
//               placeholder="city"
//               name="city"
//               value={values.city}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Form.Field>
//             <label> Choose state</label>
//             <input
//               type="text"
//               placeholder="state"
//               name="state"
//               value={values.state}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Form.Field>
//             <label>Postal code</label>
//             <input
//               type="number"
//               placeholder="postalCode"
//               name="postalCode"
//               value={values.postalCode}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>
//           <Form.Field>
//             <label> Date of birth</label>
//             <input
//               type="date"
//               placeholder="dateOfBirth"
//               name="dateOfBirth"
//               value={values.dateOfBirth}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>
//           <Form.Field>
//             <label> Social security number</label>
//             <input
//               type="text"
//               placeholder="ssn"
//               name="ssn"
//               value={values.ssn}
//               onChange={(e) => handelInputChange(e)}
//             />
//           </Form.Field>

//           <Button type="submit" floated="right" positive content="Sumit" />
//         </Form>
//       </Segment>
//     </div>
//   );
// }

// export default Userdata;

import React from "react";
import { useForm } from "react-hook-form";

export default function App() {

  const { register, handleSubmit, errors } = useForm();


  const onSubmit = (data,e) => {
    console.log(data);
    e.target.reset();
  };


  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>first name</label>

      <input
        type="text"
        name="firstName"
        ref={register({
          required: "field not be empty",
          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.firstName && <p> {errors.firstName.message} </p>}

      <br />

      <label>last name </label>
      <input
        type="text"
        name="secondName"
        ref={register({
          required: "field not be empty",
          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.secondName && <p>{errors.secondName.message}</p>}

      <br />

      <label>Email </label>
      <input
        type="email"
        name="email"
        ref={register({
          required: "field not be empty",

          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            message: "Enter a valid e-mail address",
          },
          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <br />
      <label>type </label>
      <input
        type="text"
        name="type"
        ref={register({
          required: "field not be empty",
          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.type && <p>{errors.type.message}</p>}

      <br></br>

      <label>ip Address </label>
      <input
        type="text"
        name="ipAdderss"
        ref={register({
          required: "field not be empty",

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.ipAdderss && <p>{errors.ipAdderss.message}</p>}

      {/* <br />

      <label>city </label>
      <input
        type="text"
        name="city"
        ref={register({
          required: "field not be empty",

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.city && <p>{errors.city.message}</p>}

      <br />

      <label>state </label>
      <input
        type="text"
        name="state"
        ref={register({
          required: "field not be empty",

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.state && <p>{errors.state.message}</p>}

      <br />

      <br />
      <label>postal code </label>
      <input
        type="number"
        name="postalcode"
        ref={register({
          required: "field not be empty",

          pattern: {
            value: /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d$/i,
            message: "Enter a valid postcode ",
          },

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.postalcode && <p>{errors.postalcode.message}</p>}

      <br />
      <label>date of birth </label>
      <input
        type="date"
        name="dateofbirth"
        ref={register({
          required: "field not be empty",

          pattern: {
            value: /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i,
            message: "Enter a valid date of birth",
          },

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.dateofbirth && <p>{errors.dateofbirth.message}</p>}

      <br /> */}

      {/* <label>ssn </label>
      <input
        type="number"
        name="ssn"
        ref={register({
          required: "field not be empty",

          pattern: {
            value: /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/i,
            message: "Enter a valid ssn number",
          },

          minLength: { value: 3, message: "field not less than 3 letters" },
        })}
      />
      {errors.ssn && <p>{errors.ssn.message}</p>} */}

      <br />
      <br></br>
      <input type="submit" />
    </form>
  );
}

// firstName": "Toni",
// "lastName": "Esquivel",
// "email": "esquivel@nomail.net",
// "type": "personal",
// "ipAddress": "99.99.99.99",
// "address1": "99-99 33rd St",
// "city": "Some City",
// "state": "NY",
// "postalCode": "11101",
// "dateOfBirth": "1989-01-01",
// "ssn": "0736"
