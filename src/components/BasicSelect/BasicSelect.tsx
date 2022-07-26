import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BasicSelect.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";
import { RootState } from "../../redux/reducers/rootReducer";
import { fetchPostSort } from "../../redux/actions/postsActions/postsActions";
import { IPost } from "../../models/IPost";

function BasicSelect() {
  const [SortValue, setSortValue] = React.useState("");

  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const {
    posts: { pending, posts, error },
  } = useSelector((state: RootState) => state);
  const Julia = (event: any) => {
    setSortValue(event.target.value);
    const iSIncrease = event.target.value === "increase";
    let sortArray = [];
    if (iSIncrease) {
      sortArray = posts.sort((a: IPost, b: IPost) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    } else {
      sortArray = posts.sort((a: IPost, b: IPost) =>
        b.title > a.title ? 1 : a.title > b.title ? -1 : 0
      );
    }
    dispatch(fetchPostSort(sortArray));
  };

  return (
    <Box sx={{ minWidth: 256 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          className={classnames({
            ["BasicSelectLight"]: isLightTheme,
            ["BasicSelectDark"]: !isLightTheme,
          })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SortValue}
          label="Age"
          onChange={(e: any) => Julia(e)}
        >
          <MenuItem value="increase">Title (A-Z)</MenuItem>
          <MenuItem value="decrease">Title (Z-A)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default BasicSelect;
function fetchPostSortSaga(): any {
  throw new Error("Function not implemented.");
}
