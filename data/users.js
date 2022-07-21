import bcrypt from 'bcryptjs'; 

const users = [
    {
        name: 'admin',
        email: 'admin@correo.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'moiso',
        email: 'moiso@correo.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'david',
        email: 'david@correo.com',
        password: bcrypt.hashSync('123456', 10), //bcrypt se encarga de encriptar la contraseña y lo guarda en la base de datos
        
    }

]

export default users;