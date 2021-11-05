import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Pourya",
    email: "pourya.ak1996@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mahdiyar",
    email: "mahdiyar@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
