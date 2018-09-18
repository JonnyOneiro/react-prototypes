import React from 'react';

export default (props) => {

    const tableRows = props.data.map((studentObj, index) => {
        return (
            <tr key={index}>
                <td>{studentObj.name}</td>
                <td>{studentObj.course}</td>
                <td>{studentObj.grade}</td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    ) 
}