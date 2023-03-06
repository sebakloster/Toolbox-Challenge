import express from "express";
import { getFiles, getFileData, listFiles } from "./controller.js";
import { success, error } from "../../network/response.js";

const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    const files = await getFiles();
    const fileData = [];

    const fileName = req.query.fileName;

    if (fileName) {
      const fileResponse = await getFileData(fileName);
      fileData.push(fileResponse);
      return success(req, res, fileData, 200);
    }

    for (const file of files) {
      try {
        const fileResponse = await getFileData(file);
        fileData.push(fileResponse);
      } catch (err) {
        console.error(`Error downloading file ${file}: ${err.message}`);
      }
    }

    success(req, res, fileData, 200);
  } catch (err) {
    console.error(`Error fetching file list: ${error.message}`);
  }
});

router.get("/list", async (req, res) => {
  try {
    const files = await listFiles();

    success(req, res, files, 200);
  } catch (err) {
    console.error(`Error fetching file list: ${error.message}`);
  }
});

export default router;
