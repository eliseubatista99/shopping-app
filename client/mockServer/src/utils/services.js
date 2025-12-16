/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const successResponse = (result, messages) => {
	return JSON.stringify({
		status: {
			success: true,
			messages,
		},
		data: result,
	});
};

const errorResponse = (error) => {
	return JSON.stringify({
		status: {
			success: false,
			messages: {
				error,
			},
		},
	});
};

module.exports = {
	successResponse,
	errorResponse,
};
