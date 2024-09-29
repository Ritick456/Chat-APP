import React from "react";

const Gendercheck = ({onCheckboxchange,selectedGender}) => {
  return (
    <div>
      <div className="flex">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected": ""}`  }>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900" 
            checked = {selectedGender === "male"}
            onChange={()=> onCheckboxchange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointern${selectedGender==="male" ? "selected": ""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900"
              checked = {selectedGender === "female"}
              onChange={()=>onCheckboxchange("female")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Gendercheck;

