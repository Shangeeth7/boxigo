import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import RouteIcon from "@mui/icons-material/Route";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import ViewMoreDetails from "./ViewMoreDetails";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://test.api.boxigo.in/sample-data/"
        );
        setData(response.data.Customer_Estimate_Flow);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDateTime = (dateTime) => {
    const dateObj = new Date(dateTime);
    const formattedDate = dateObj.toLocaleDateString();
    const formattedTime = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const amPm = dateObj.getHours() < 12 ? "AM" : "PM";
    return `${formattedDate} ${formattedTime} ${amPm}`;
  };

  const toggleViewDetails = (item) => {
    if (activeItem === item) {
      setActiveItem(null);
      setViewDetails(false);
    } else {
      setActiveItem(item);
      setViewDetails(true);
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <h2>My Moves</h2>
          {data.map((item, index) => (
            <div key={index}>
              <div className="container">
                <div>
                  <h5>From</h5>
                  {item.moving_from}
                </div>
                <div className="circle-container">
                  <div className="circle">
                    <ArrowRightAltSharpIcon style={{ color: "#ec5541" }} />
                  </div>
                </div>
                <div>
                  <h5>To</h5>
                  {item.moving_to}
                </div>
                <div>
                  <h5>Request#</h5>
                  <span style={{ color: "#ec5541" }}>{item.estimate_id}</span>
                </div>
              </div>
              <div className="container">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <HomeSharpIcon style={{ color: "#ec5541" }} />
                  {item.property_size}
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <WidgetsSharpIcon style={{ color: "#ec5541" }} />
                  {item.total_items}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RouteIcon style={{ color: "#ec5541" }} />
                  {item.distance}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon style={{ color: "#ec5541" }} />
                  {formatDateTime(item.moving_on)}
                  <ModeEditOutlineOutlinedIcon style={{ color: "#ec5541" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckBoxIcon style={{ color: "#ec5541" }} />
                  is flexible
                </div>
                <div>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="outlined"
                      style={{
                        color: "#ec5541",
                        borderColor: "#ec5541",
                        minWidth: "120px",
                        marginRight: "3px",
                      }}
                      onClick={() => toggleViewDetails(item)}
                    >
                      {viewDetails && activeItem === item
                        ? "Hide Move Details"
                        : "View Move Details"}
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        background: "#ec5541",
                        borderColor: "#ec5541",
                        minWidth: "120px",
                        marginRight: "3px",
                      }}
                    >
                      Awaiting Quote
                    </Button>
                  </Stack>
                </div>
              </div>
              <p style={{ display: "flex", alignItems: "center" }}>
                <WarningOutlinedIcon style={{ color: "#ec5541" }} />
                <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
                  Disclaimer:
                </span>
                Please Update your Move data before two days of shifting
              </p>

              {viewDetails && activeItem === item && (
                <ViewMoreDetails item={item} />
              )}
              <Divider variant="middle" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>
            <Skeleton variant="text" width="20%" />
          </h2>
          <div style={{ marginTop: "20px" }}>
            {[...Array(5)].map((_, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <Skeleton variant="text" width="90%" height={40} />
                <Skeleton variant="rectangular" height={200} />
                <Skeleton variant="text" width="60%" height={40} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
