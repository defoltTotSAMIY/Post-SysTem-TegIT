import React from 'react';

function Table(props) {
    return (
        <div>
            <table className="table border">
                <thead>
                    <tr>
                        {
                            props.theadT.map((elem, index) => {
                                return (
                                    <th key={index}>{elem}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.tbodyT}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
