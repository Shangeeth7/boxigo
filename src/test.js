// // // import { Button } from "@mui/material";
// // // import React from "react";

// // // function InventoryDetails({ item }) {
// // //   let categoriesFurniture = [
// // //     "sofa",
// // //     "table",
// // //     "chair",
// // //     "cot",
// // //     "mattress",
// // //     "cupboard",
// // //     "misc",
// // //   ];
// // //   let quantities = categoriesFurniture.map((_, index) => {
// // //     let length = item.items.inventory[0].category[index].items.length;
// // //     let qty = 0;
// // //     for (let i = 0; i < length; i++) {
// // //       qty += item.items.inventory[0].category[index].items[i].qty;
// // //     }
// // //     return qty;
// // //   });
// // //   let categoriesElectronics = [
// // //     "tv",
// // //     "refrigerator",
// // //     "washingMachine",
// // //     "oven",
// // //     "ac",
// // //     "fans",
// // //     "misc",
// // //   ];

// // //   return (
// // //     <div>
// // //       {categoriesFurniture.map((category, index) => (
// // //         <p key={index}>
// // //           {category.charAt(0).toUpperCase() + category.slice(1)} Quantity:{" "}
// // //           {quantities[index]}
// // //         </p>
// // //       ))}
// // //       {categoriesElectronics.map((category, index) => (
// // //         <p key={index}>
// // //           {category.charAt(0).toUpperCase() + category.slice(1)} Quantity:{" "}
// // //           {quantities[index]}
// // //         </p>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default InventoryDetails;

// // import React from "react";

// // function InventoryDetails({ item }) {
// //   // Categories
// //   const inventoryCategories = [
// //     {
// //       name: "Furniture",
// //       items: ["sofa", "table", "chair", "cot", "mattress", "cupboard", "misc"],
// //     },
// //     {
// //       name: "Electronics",
// //       items: [
// //         "tv",
// //         "refrigerator",
// //         "washingMachine",
// //         "oven",
// //         "ac",
// //         "fans",
// //         "misc",
// //       ],
// //     },
// //     {
// //       name: "Vehicle",
// //       items: ["cycle", "bike", "car"],
// //     },
// //     {
// //       name: "Other Appliances",
// //       items: [
// //         "gym",
// //         "musicalInstruments",
// //         "fragile",
// //         "homeApplicance",
// //         "utility",
// //       ],
// //     },
// //     {
// //       name: "Boxes/Trolley",
// //       items: ["boxes/trolley"],
// //     },
// //   ];

// //   // Calculate quantity for given category
// //   // Calculate quantity for given category
// //   const calculateQuantity = (index, items) =>
// //     items.map((_, itemIndex) => {
// //       const categoryItems =
// //         item.items.inventory[index].category[itemIndex].items;
// //       let qty = 0;
// //       for (let i = 0; i < categoryItems.length; i++) {
// //         // Add the item quantity
// //         qty += categoryItems[i].qty;
// //         // Check if childItems exists and if it does, add those quantities
// //         if (categoryItems[i].childItems) {
// //           categoryItems[i].childItems.forEach((childItem) => {
// //             qty += childItem.qty;
// //           });
// //         }
// //       }
// //       return qty;
// //     });

// //   return (
// //     <div>
// //       {inventoryCategories.map((category, index) => (
// //         <div key={index}>
// //           <h3>{category.name}</h3>
// //           {calculateQuantity(index, category.items).map(
// //             (quantity, itemIndex) => (
// //               <p key={itemIndex}>
// //                 {category.items[itemIndex].charAt(0).toUpperCase() +
// //                   category.items[itemIndex].slice(1)}{" "}
// //                 Quantity: {quantity}
// //               </p>
// //             )
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default InventoryDetails;

// // // import { Button } from "@mui/material";
// // // import React from "react";

// // // function InventoryDetails({ item }) {
// // //   return (
// // //     <div>
// // //       {item.items.inventory.map((inventoryItem, index) => (
// // //         <div key={index}>
// // //           <Button
// // //             variant="contained"
// // //             style={{
// // //               background: "lightgrey",
// // //               borderColor: "grey",
// // //               color: "#ec5541",
// // //               minWidth: "100%",
// // //               marginBottom: "6px",
// // //             }}
// // //           >
// // //             {inventoryItem.displayName}
// // //           </Button>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default InventoryDetails;

// // import React from "react";

// // function InventoryDetails({ item }) {
// //   // Categories
// //   const inventoryCategories = [
// //     {
// //       name: "Furniture",
// //       items: ["sofa", "table", "chair", "cot", "mattress", "cupboard", "misc"],
// //     },
// //     {
// //       name: "Electronics",
// //       items: [
// //         "tv",
// //         "refrigerator",
// //         "washingMachine",
// //         "oven",
// //         "ac",
// //         "fans",
// //         "misc",
// //       ],
// //     },
// //     {
// //       name: "Vehicle",
// //       items: ["cycle", "bike", "car"],
// //     },
// //     {
// //       name: "Other Appliances",
// //       items: [
// //         "gym",
// //         "musicalInstruments",
// //         "fragile",
// //         "homeApplicance",
// //         "utility",
// //       ],
// //     },
// //     {
// //       name: "Boxes/Trolley",
// //       items: ["boxes/trolley"],
// //     },
// //   ];

// //   // Calculate quantity for given category
// //   // Calculate quantity for given category
// //   const calculateQuantity = (index, items) =>
// //     items.map((_, itemIndex) => {
// //       const categoryItems =
// //         item.items.inventory[index].category[itemIndex].items;
// //       let qty = 0;
// //       for (let i = 0; i < categoryItems.length; i++) {
// //         // Add the item quantity
// //         qty += categoryItems[i].qty;
// //         // Check if childItems exists and if it does, add those quantities
// //         if (categoryItems[i].childItems) {
// //           categoryItems[i].childItems.forEach((childItem) => {
// //             qty += childItem.qty;
// //           });
// //         }
// //       }
// //       return qty;
// //     });

// //   return (
// //     <div>
// //       {inventoryCategories.map((category, index) => (
// //         <div key={index}>
// //           <h3>{category.name}</h3>
// //           {calculateQuantity(index, category.items).map(
// //             (quantity, itemIndex) => (
// //               <p key={itemIndex}>
// //                 {category.items[itemIndex].charAt(0).toUpperCase() +
// //                   category.items[itemIndex].slice(1)}{" "}
// //                 Quantity: {quantity}
// //               </p>
// //             )
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default InventoryDetails;

// // import { Button } from "@mui/material";
// // import React from "react";

// // function InventoryDetails({ item }) {
// //   return (
// //     <div>
// //       {item.items.inventory.map((inventoryItem, index) => (
// //         <div key={index}>
// //           <Button
// //             variant="contained"
// //             style={{
// //               background: "lightgrey",
// //               borderColor: "grey",
// //               color: "#ec5541",
// //               minWidth: "100%",
// //               marginBottom: "6px",
// //             }}
// //           >
// //             {inventoryItem.displayName}
// //           </Button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default InventoryDetails;

// import React from "react";

// function InventoryDetails({ item }) {
//   // Categories
//   const inventoryCategories = [
//     {
//       name: "Furniture",
//       items: ["sofa", "table", "chair", "cot", "mattress", "cupboard", "misc"],
//     },
//     {
//       name: "Electronics",
//       items: [
//         "tv",
//         "refrigerator",
//         "washingMachine",
//         "oven",
//         "ac",
//         "fans",
//         "misc",
//       ],
//     },
//     {
//       name: "Vehicle",
//       items: ["cycle", "bike", "car"],
//     },
//     {
//       name: "Other Appliances",
//       items: [
//         "gym",
//         "musicalInstruments",
//         "fragile",
//         "homeApplicance",
//         "utility",
//       ],
//     },
//     {
//       name: "Boxes/Trolley",
//       items: ["boxes/trolley"],
//     },
//   ];

//   // Calculate quantity for given category
//   // Calculate quantity for given category
//   const calculateQuantity = (index, items) =>
//     items.map((_, itemIndex) => {
//       const categoryItems =
//         item.items.inventory[index].category[itemIndex].items;
//       let qty = 0;
//       for (let i = 0; i < categoryItems.length; i++) {
//         // Add the item quantity
//         qty += categoryItems[i].qty;
//         // Check if childItems exists and if it does, add those quantities
//         if (categoryItems[i].childItems) {
//           categoryItems[i].childItems.forEach((childItem) => {
//             qty += childItem.qty;
//           });
//         }
//       }
//       return qty;
//     });

//   return (
//     <div>
//       {inventoryCategories.map((category, index) => (
//         <div key={index}>
//           <h3>{category.name}</h3>
//           {calculateQuantity(index, category.items).map(
//             (quantity, itemIndex) => (
//               <p key={itemIndex}>
//                 {category.items[itemIndex].charAt(0).toUpperCase() +
//                   category.items[itemIndex].slice(1)}{" "}
//                 Quantity: {quantity}
//               </p>
//             )
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default InventoryDetails;
