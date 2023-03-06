import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FileSearch = ({ onSearch }) => {
  const [fileName, setFileName] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(fileName);
  };

  return (
    <div className="mt-3 mx-5 w-25 ">
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formFileName">
          <Form.Label className="h4">File Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter file name"
            value={fileName}
            onChange={(event) => setFileName(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default FileSearch;
