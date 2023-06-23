import React from "react";
import "./viewMoreDetails.css";
import { Button } from "@mui/material";
import InventoryDetails from "./InventoryDetails";

function ViewMoreDetails({ item }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "3px",
        }}
      >
        <div>
          <h3>Additional Information</h3>
        </div>
        <div>
          <Button
            variant="contained"
            style={{ background: "black", borderColor: "black" }}
          >
            Awaiting Quote
          </Button>
        </div>
      </div>
      {item.old_house_additional_info
        ? item.old_house_additional_info
        : "* not updated"}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "3px",
          }}
        >
          <div>
            <h3>House Details</h3>
          </div>
          <div>
            <Button
              variant="contained"
              style={{ background: "black", borderColor: "black" }}
            >
              Edit House Details
            </Button>
          </div>
        </div>
        <div>
          <h4 style={{ color: "#ec5541" }}> Existing House Details</h4>
        </div>
        <div className="container">
          <div>
            <h5>Floor Number.</h5>
            {item.old_floor_no}
          </div>
          <div>
            <h5>Elevater Available.</h5>
            {item.old_elevator_availability}
          </div>
          <div>
            <h5>Distance from Elevator/staricase to truck</h5>
            {item.old_parking_distance}
          </div>
        </div>
        <div>
          <h4 style={{ color: "#ec5541" }}> New House Details</h4>
        </div>
        <div className="container">
          <div>
            <h5>Floor Number.</h5>
            {item.new_floor_no}
          </div>
          <div>
            <h5>Elevater Available.</h5>
            {item.new_elevator_availability}
          </div>
          <div>
            <h5>Distance from Elevator/staricase to truck</h5>
            {item.new_parking_distance}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "3px",
          }}
        >
          <div>
            <h3>Inventory Details</h3>
          </div>
          <div>
            <Button
              variant="contained"
              style={{ background: "black", borderColor: "black" }}
            >
              Edit Inventory Details
            </Button>
          </div>
        </div>
        <InventoryDetails item={item} />
      </div>
    </div>
  );
}

export default ViewMoreDetails;
