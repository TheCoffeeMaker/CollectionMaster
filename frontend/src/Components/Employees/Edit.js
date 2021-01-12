import React, { useState } from "react";
import axios from "axios";

export function Edit(props) {
  const [employeeFirstName, setEmployeeFirstName] = useState(
    props.employee.first_name
  );
  const [employeeLastName, setEmployeeLastName] = useState(
    props.employee.last_name
  );
  const [employeeCompany, setEmployeeCompany] = useState(
    props.employee.company
  );
  const [employeeId] = useState(props.employee.id);

  function onChangeFirstName(event) {
    setEmployeeFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setEmployeeLastName(event.target.value);
  }

  function onChangeCompany(event) {
    setEmployeeCompany(event.target.value);
  }

  function save() {
    axios
      .put(`/employees/${employeeId}`, {
        changes: {
          first_name: employeeFirstName,
          last_name: employeeLastName,
          company: employeeCompany,
        },
      })
      .then((empl) => {
        console.log(empl.data);
      });
  }

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          placeholder="First Name"
          defaultValue={employeeFirstName}
          onChange={onChangeFirstName}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          placeholder="Last Name"
          defaultValue={employeeLastName}
          onChange={onChangeLastName}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Company</label>
        <input
          type="text"
          className="form-control"
          id="company"
          placeholder="Company"
          defaultValue={employeeCompany}
          onChange={onChangeCompany}
        />
      </div>
      <div className="mb-3">
        <button onClick={save} type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
