import { Button } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

function InventoryDetails({ item }) {
  const [expandedState, setExpandedState] = useState(
    item.items.inventory.map(() => false)
  );

  const calculateQuantity = (inventoryItem) => {
    let qty = 0;
    inventoryItem.category.forEach((categoryItem) => {
      categoryItem.items.forEach((item) => {
        qty += item.qty;
        if (item.childItems) {
          item.childItems.forEach((childItem) => {
            qty += childItem.qty;
          });
        }
      });
    });
    return qty;
  };

  const calculateItemTotalQuantity = (item) => {
    let totalQty = item.qty;
    if (item.childItems) {
      item.childItems.forEach((childItem) => {
        totalQty += childItem.qty;
      });
    }
    return totalQty;
  };

  const toggleDetails = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedState(newExpandedState);
  };

  return (
    <div>
      {item.items.inventory.map((inventoryItem, index) => (
        <div key={index}>
          <Button
            variant="contained"
            style={{
              background: "lightgrey",
              borderColor: "grey",
              color: "#ec5541",
              minWidth: "100%",
              marginBottom: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleDetails(index)}
          >
            <div>
              {inventoryItem.displayName}
              <span
                style={{
                  background: "#ec5541",
                  borderRadius: "50%",
                  color: "white",
                  padding: "5px 10px",
                  fontSize: "0.8em",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                {calculateQuantity(inventoryItem)}
              </span>
            </div>
            <div>
              {expandedState[index] ? (
                <ExpandLessOutlinedIcon style={{ color: "black" }} />
              ) : (
                <ExpandMoreOutlinedIcon style={{ color: "black" }} />
              )}
            </div>
          </Button>
          {expandedState[index] && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {inventoryItem.category.map((categoryItem, categoryIndex) => {
                const validItems = categoryItem.items.filter(
                  (item) => calculateItemTotalQuantity(item) > 0
                );
                return (
                  validItems.length > 0 && (
                    <div key={categoryIndex}>
                      <h4>{categoryItem.displayName}</h4>
                      {validItems.map((item, itemIndex) => (
                        <p key={itemIndex}>
                          {item.displayName.charAt(0).toUpperCase() +
                            item.displayName.slice(1)}
                          : {calculateItemTotalQuantity(item)}
                        </p>
                      ))}
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InventoryDetails;
