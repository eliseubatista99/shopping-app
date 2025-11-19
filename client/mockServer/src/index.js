/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const Configs = require("./configs");
const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");
const fs = require("fs");

// const envVar = dotenv.config();
const FileUtils = require("./utils/file");

const port = process.env.port || 5000;
const app = express();
const REQUEST_PREFIX = "/:file";

app.use(bodyParser({ limit: "30mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use(express.static("__html__"));

const DATA_PATH = "../__data__";

// eslint-disable-next-line sonarjs/cognitive-complexity
const handleApiCall = async (req, folderPath) => {
  const file = `${req.params.file}.json`;

  console.log(`\n\REQUEST [in]: \n`, {
    file,
    path: path.join(__dirname, DATA_PATH, folderPath),
  });

  try {
    let content = await FileUtils.getJsonContent(
      file,
      path.join(__dirname, DATA_PATH, folderPath)
    );

    let timeout = Configs.SERVICES_DELAY_IN_MILLISECONDS;

    if (file === "GetClientInfo.json") {
      timeout = Configs.GET_CLIENT_INFO_DELAY_IN_MILLISECONDS;
    }

    await sleep(timeout);

    console.log("\n\nREQUEST [out]: ", {
      file,
      content: content,
    });

    return {
      content: content,
      error: undefined,
    };
  } catch (error) {
    console.log("\n\nREQUEST [out]: ", {
      file,
      content: undefined,
      error: error,
    });

    return {
      content: undefined,
      error: "Something went wrong while calling service... " + error,
    };
  }
};

app.post(REQUEST_PREFIX, async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const result = await handleApiCall(req, "services/post");

  if (!result.error) {
    res.send(result.content);
  } else {
    res.status(500).send({
      message: result.error,
    });
  }
});

app.get(REQUEST_PREFIX, async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const result = await handleApiCall(req, "services/get");

  if (!result.error) {
    res.send(result.content);
  } else {
    res.status(500).send({
      message: result.error,
    });
  }
});

app.listen(port, function () {
  console.log(`listening on *:${port}`);
});

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

module.exports = {};
