import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const FileTable = ({ fileName }) => {
  const [data, setData] = useState([]);
  // Url's should be located in a .env file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = fileName
          ? `http://localhost:3001/files/data?fileName=${fileName}`
          : "http://localhost:3001/files/data";

        const response = await axios.get(apiUrl);
        setData(response.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [fileName]);

  return (
    <div className="mt-3 mx-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="tableHead">
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file) =>
            file.lines.map((line) => (
              <tr key={line.text}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FileTable;
