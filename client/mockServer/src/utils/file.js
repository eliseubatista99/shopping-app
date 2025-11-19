/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const fs = require('fs');

const getContent = async (filename, folderPath) => {
	const filePath = path.join(folderPath, filename);

	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

const getJsonContent = async (filename, folderPath) => {
	try {
		const result = await getContent(filename, folderPath);
		return JSON.parse(result);
	} catch (error) {
		return undefined;
	}
};

module.exports = {
	getContent,
	getJsonContent,
};
