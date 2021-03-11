const path = require("path");
const multer = require("multer");

// const uploadsPath = path.join(__dirname, "../uploads");

// const storage = multer.diskStorage({
// 	destination(req, file, cb) {
// 		cb(undefined, uploadsPath);
// 	},
// 	filename(req, file, cb) {
// 		console.log("FieldName", file);
// 		cb(
// 			undefined,
// 			`${file.originalname.split(".")[0]}-${Date.now()}${path.extname(
// 				file.originalname
// 			)}`
// 		);
// 	},
// });

// const upload = multer({
// 	storage,
// 	fileFilter(req, file, cb) {
// 		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
// 			return cb(new Error("Please upload image only"));
// 		}
// 		cb(undefined, true);
// 	},
// });

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024,
	},
});

module.exports = upload;
