
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const StudentList = () => {
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5270/api/students')
//             .then(response => setStudents(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:5270/api/students/${id}`)
//             .then(() => {
//                 setStudents(students.filter(student => student.id !== id));
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <div>
//             <h2>Student List</h2>
//             <Link to="/add">Add Student</Link>
//             <ul>
//                 {students.map(student => (
//                     <li key={student.id}>
//                         {student.name} - {student.email} - {student.course}
//                         <Link to={`/edit/${student.id}`}>Edit</Link>
//                         <button onClick={() => handleDelete(student.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default StudentList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5270/api/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5270/api/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Student List</h2>
            <Link to="/add" className="btn btn-primary mb-3">Add Student</Link>
            <ul className="list-group">
                {students.map(student => (
                    <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{student.name} - {student.email} - {student.course}</span>
                        <div>
                            <Link to={`/edit/${student.id}`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
                            <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
