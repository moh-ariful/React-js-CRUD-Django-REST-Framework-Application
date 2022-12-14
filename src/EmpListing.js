import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
}

const LoadEdit = (id) => {
  navigate("/employee/edit/" + id);
}

const Removefunction = (id) => {
  if (window.confirm('Are you sure to delete it?')) {
    fetch("http://localhost:8000/api/"), {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 0e362d78cde154b5538a13176a5b83760953247f'
        }
    };)
      }).then((res) => {
          alert('Deleted successfully.')
          window.location.reload();
      }).catch((err) => {
          console.log(err.message)
      })
  }
}

  useEffect(() => {
    fetch("http://localhost:8000/api/"), {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 0e362d78cde154b5538a13176a5b83760953247f'
        }
    });
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-warning">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-primary text-warning">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                      <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                      <a onClick={() => { LoadDetail(item.id) }} className="btn btn-info">Details</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
