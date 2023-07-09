const express = require("express");
const mongoose = require("mongoose");

const DB_HOST = "127.0.0.1";
const DB_PORT = "27017";
const DB_NAME = "project_akhir_spk";
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
let connection;

try {
    connection = connect();
} catch (error) {
    console.log(error);
}

async function connect() {
    return await mongoose.connect(DB_URL)
        .then(() => {
            console.log(`Connected To Database '${DB_NAME}' On Host '${DB_HOST}' Port '${DB_PORT}'`);
        });
}

module.exports = connection;