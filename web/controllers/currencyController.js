import { db } from "../models/index.js";

const Currency = db.currency;


//Get Shipping
export const getCurrency = async (req, res) => {
  try {
    const currencyGet = await Currency.findAll({});
    if (currencyGet) {
      return res.status(200).json({
        success: 1,
        error: 0,
        message: "Get Successfully ..",
        DemoData: currencyGet,
      });
    } else {
      return res.status(200).json({
        success: 0,
        error: 1,
        message: "Error in getting data.",
        DemoData: [],
      });
    }
  } catch {
    return res.status(200).json({
      success: 0,
      message: "Error in getting data...........",
      error: 1,
      DemoData: [],
    });
  }
};


//Get one Shipping
// export const getOneShipping = async (req, res) => {
//   try {
//     const shipping = await Shipping.findOne({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (shipping) {
//       return res.status(200).json({
//         success: 1,
//         error: 0,
//         message: "Record found successfully.",
//         data: shipping,
//       });
//     } else {
//       return res.status(404).json({
//         success: 0,
//         error: 1,
//         message: "Record not found.",
//         data: [],
//       });
//     }
//   } catch {
//     return res.status(400).json({
//       success: 0,
//       message: "Error in getting data.",
//       error: 1,
//       data: [],
//     });
//   }
// };
