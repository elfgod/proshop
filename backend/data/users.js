import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email:'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true
  },
  {
    name: 'ElfGod',
    email:'elf@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'ElfJosh',
    email:'josh@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users