const mongoose = require("mongoose");
const BasePath = require("../../BasePath");
const {ServerApiVersion} = require("mongodb");

const DB_NAME = "project_akhir_spk";
// const DB_URL = `mongodb+srv://project-akhir-spk.cv9bwnw.mongodb.net/${DB_NAME}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`;
const DB_URL = "mongodb://127.0.0.1:27017/project_akhir_spk";
const DB_CREDENTIAL = `${BasePath}/X509-cert-2651877310189141672.pem`;

class DatabaseConfig {
    static async #connect() {
        return await mongoose.connect(DB_URL, {
            // sslKey: DB_CREDENTIAL,
            // sslCert: DB_CREDENTIAL,
            // serverApi: ServerApiVersion.v1
        }).then(() => {
            console.log(`Connected To Database at '${DB_URL}'`);
        });
    }
    
    static async connect() {
        return await this.#connect();
    }

    static close() {
        mongoose.connection.close()
        console.log("Closed Database Connection!");
    }
}

module.exports = DatabaseConfig;