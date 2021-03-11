const path = require("path");
const Cloud = require("@google-cloud/storage");
const serviceKey = path.join(__dirname, "./cloud-storage.json");

const { Storage } = Cloud;
const storage = new Storage({
	keyFilename: serviceKey,
	projectId: "gym-testing-303513",
});

module.exports = storage;
