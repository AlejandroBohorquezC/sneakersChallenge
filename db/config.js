const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_CNN);

const conectarBaseDeDatos = async () => {
    try {
        await client.connect();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

module.exports = {
    conectarBaseDeDatos,
    client,
}