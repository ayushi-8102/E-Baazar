require("dotenv").config();
const { AvailRequest, Product, User } = require("../models");

class Avail {
  static createAvail = async (data) => {
    const vendor = await User.findOne({ _id: data.vendor });
    const avail = await AvailRequest.create({
      ...data,
    });

    let vendorMail = {
      email: vendor.email,
      subject: "Avail Request",
      message: `Avail warranty has been requested for product ${data.warrantyName} by ${data.buyerName}. You can reach out to him ${data.phone} and email ${data.email}`,
    };
    return { status : true,avail, vendorMail };
  };

  
  static getAvailStatus = async (token) => {
    const avail = await AvailRequest.findOne({ token:token,$and: [{ status: "Pending" }] });
    return avail;
  };


  static updateAvailStatus = async (id, status) => {
    const avail = await AvailRequest.findByIdAndUpdate(id, { status });
    return avail;
  };

  static getAvailRequests = async (id) => {
    const avail = await AvailRequest.find({
      vendor: id,
      $and: [{ status: "Pending" }],
    });
    return avail;
  };
}

module.exports = Avail;
