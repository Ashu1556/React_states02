import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import { useState } from "React";

const Forum = () => {
  const [state, setState] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    Email: "",
    gender: "",
    TechDetails: [],
  });

  const handleonChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.vale });
  };

  const handleCheckBox = (e: any) => {
    if (e.target.checked) {
      setState({
        ...state,
        TechDetails: [...state.TechDetails, e.target.value],
      });
      6;
    } else {
      var filteredData = state.TechDetails.filter(
        (ele) => ele !== e.target.value
      );
    }
    setState({ ...state, TechDetails: filteredData });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 500,
        }}
      >
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",

              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Name"
                onChange={handleonChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleonChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Email</label>
              <input
                type="text"
                name="Email"
                placeholder="Email"
                onChange={handleonChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleonChange}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleonChange}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value={"others"}
                onChange={handleonChange}
              />{" "}
              Others
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Technology</label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="checkbox"
                  name="TechDetails"
                  onChange={handleCheckBox}
                />{" "}
                React
                <input
                  type="checkbox"
                  name="TechDetails"
                  onChange={handleCheckBox}
                />{" "}
                Html
                <input
                  type="checkbox"
                  name="TechDetails"
                  onChange={handleCheckBox}
                />{" "}
                CSS
                <input
                  type="checkbox"
                  name="TechDetails"
                  onChange={handleCheckBox}
                />{" "}
                JavaScript
                <input
                  type="checkbox"
                  name="TechDetails"
                  onChange={handleCheckBox}
                />{" "}
                Java
              </div>
            </div>

            <input type="submit" value="submit" />
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Forum;
