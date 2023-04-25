import React from "react";

export default function ProjectForm({
  data,
  setInputProject,
  deleteInputProject,
  index,
  // error = null,
}) {
  return (
    <form className="mb-3 border p-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Masukkan title portofolio"
          value={data.title}
          onChange={(e) => setInputProject(e, index)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="jobType" className="form-label">
          Tipe aplikasi
        </label>
        <select
          className="form-select"
          id="jobType"
          value={data.jobType}
          onChange={(e) => setInputProject(e, index)}
        >
          <option value="Mobile">Mobile</option>
          <option value="Web">Web</option>
          <option value="Desktop">Desktop</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="repo" className="form-label">
          Repositori github
        </label>
        <input
          type="text"
          className="form-control"
          id="repo"
          placeholder="Masukkan repositori github"
          value={data.repo}
          onChange={(e) => setInputProject(e, index)}
        />
      </div>
      <div className="btn bg-purple text-white" onClick={() => deleteInputProject(index)}>
        Delete
      </div>
    </form>
  );
}