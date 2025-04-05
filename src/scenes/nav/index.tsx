import { FlexBetween } from "@/contents/FlexBetween";
import {
  BatchPrediction,
  CurrencyLira,
  Dashboard,
  Money,
  Pallet,
} from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");
  const { palette } = useTheme();
  return (
    <FlexBetween gap="2rem">
      <FlexBetween gap="1rem">
        <img />
        <Money />
        <Box color="white">Financers</Box>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <FlexBetween>
          <Link to="/">
            <Dashboard />
          </Link>
        </FlexBetween>
        <FlexBetween>
          <Link to="/prediction">
            <BatchPrediction />
          </Link>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Nav;
