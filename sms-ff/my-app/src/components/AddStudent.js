// import React, { useState } from 'react';
// import axios from 'axios';
// // import { useHistory } from 'react-router-dom';

// const AddStudent = () => {
//     const [student, setStudent] = useState({ name: '', email: '', course: '' });
//     // const history = useHistory();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setStudent({ ...student, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5270/api/students', student)  
      

//             .then(response => {
//                 console.log(response.data);
//                 // history.push('/');
//             })
//             .catch(error => console.error(error));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" />
//             <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
//             <input type="text" name="course" value={student.course} onChange={handleChange} placeholder="Course" />
//             <button type="submit">Add Student</button>
//         </form>
//     );
// };

// export default AddStudent;
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-dom';

const AddStudent = () => {
    const [student, setStudent] = useState({ name: '', email: '', course: '' });
    // const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5270/api/students', student)
            .then(response => {
                console.log(response.data);
                // history.push('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="course">Course</label>
                <input
                    type="text"
                    className="form-control"
                    id="course"
                    name="course"
                    value={student.course}
                    onChange={handleChange}
                    placeholder="Course"
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Student</button>
        </form>
    );
};

export default AddStudent;
