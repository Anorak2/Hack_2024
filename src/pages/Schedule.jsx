import React, { useState, useEffect } from 'react';
import "../css/schedule.css"

const Schedule = () => {
  const [tableData, setTableData] = useState([]);

  const headers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const names = ['Alice', 'Bob', 'Charlie', 'steve']; // Add your employee names here

  const fetchData = async () => {
    // Fetch data from API or local source
    // Example: const data = await fetch('your-api-endpoint');
    // Update tableData state with fetched data
    // setTableData(data);
    const mockData = [
      ['Row 1 Data 1', 'Row 1 Data 2', 'Row 1 Data 3', 'Row 1 Data 4', 'Row 1 Data 5', 'Row 1 Data 6', 'Row 1 Data 7'],
      ['Row 2 Data 1', 'Row 2 Data 2', 'Row 2 Data 3', 'Row 2 Data 4', 'Row 2 Data 5', 'Row 2 Data 6', 'Row 2 Data 7'],
      ['Row 3 Data 1', 'Row 3 Data 2', 'Row 3 Data 3', 'Row 3 Data 4', 'Row 3 Data 5', 'Row 3 Data 6', 'Row 3 Data 7']
    ];
    setTableData(mockData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTableHeaders = () => {
    return (
      <tr>
        <th></th> {/* Empty cell for corner */}
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    return tableData.map((rowData, rowIndex) => (
      <tr key={rowIndex}>
        <td>{names[rowIndex]}</td> {/* Column for names */}
        {rowData.map((cellData, cellIndex) => (
          <td key={cellIndex}>
            <input type="checkbox" style={{padding:"0px", margin:"0px", height:"13px", width:"13px"}}/> {/* Checkbox input */}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <form>
        <table>
          <thead>{renderTableHeaders()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </form>
    </div>
  );
};

export default Schedule;
