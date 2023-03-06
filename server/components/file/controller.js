import axiosInstance from "../../axiosConfig.js";
import csv from "csvtojson";

// Filters:
// The isNaN() function is used to check if line.number is a valid number or not.
// The length property is used to check if hexString has exactly 32 characters.

export const filterData = (jsonData) => {
  const filteredData = [];
  for (const data of jsonData) {
    if (
      data.text &&
      data.number &&
      data.hex &&
      !isNaN(data.number) &&
      data.hex.length === 32
    ) {
      const { text, number, hex } = data;
      filteredData.push({ text, number, hex });
    }
  }
  return filteredData;
};

export const getFiles = async () => {
  const response = await axiosInstance.get("/files");
  return response.data.files;
};

export const getFileData = async (file) => {
  const response = await axiosInstance.get(`/file/${file}`);
  const jsonData = await csv().fromString(response.data);
  const filteredData = filterData(jsonData);

  return {
    file,
    lines: filteredData,
  };
};

export const listFiles = async (req, res) => {
  const response = await axiosInstance.get("/files");
  return response.data.files;
};
