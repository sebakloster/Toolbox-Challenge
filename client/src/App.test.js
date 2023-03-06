import React from "react";
import { render, screen } from "@testing-library/react";
import FileTable from "./FileTable";
import axios from "axios";

jest.mock("axios");

describe("FileTable", () => {
  test("renders table with correct headers", async () => {
    render(<FileTable />);
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(4);
    expect(headers[0]).toHaveTextContent("File Name");
    expect(headers[1]).toHaveTextContent("Text");
    expect(headers[2]).toHaveTextContent("Number");
    expect(headers[3]).toHaveTextContent("Hex");
  });

  test("fetches data with correct API endpoint when fileName prop is provided", async () => {
    render(<FileTable fileName="file1.txt" />);
    await screen.findAllByRole("row");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/files/data?fileName=file1.txt"
    );
  });

  test("fetches data with correct API endpoint when fileName prop is not provided", async () => {
    render(<FileTable />);
    await screen.findAllByRole("row");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3001/files/data");
  });
});
