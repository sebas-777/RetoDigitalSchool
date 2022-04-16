import{Sequelize} from 'sequelize'

const db = new Sequelize('parqueadero','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db