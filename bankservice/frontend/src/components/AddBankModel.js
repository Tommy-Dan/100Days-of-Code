import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";


function AddbankModel({
  setIsModal,
  getBanks,
  isEditting,
  selectedBank,
  setSelectedBank,
}) {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [accountnumber, setAccountnumber] = useState("");

  const addBank = async (e) => {
    const user = localStorage.getItem("user");
    if (isEditting) {
      e.preventDefault();
      try {
        await axios.put(
          `http://localhost:3000/bank/${selectedBank._id}`,
          {
            name: name,
            branch: branch,
            location: location,
            phone: phone,
            address: address,
            accountNumber: accountnumber
          },
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );
        setName("");
        setBranch("");
        setLocation("");
        setPhone("");
        setAddress("");
        setAccountnumber("");
        setIsModal(false);
        setSelectedBank(null);
        getBanks();
      } catch (error) {
        console.log(error);
      }
    } else {
      e.preventDefault();
      try {
        await axios.post(
          "http://localhost:3000/banks",
          {
            name: name,
            branch: branch,
            location: location,
            phone: phone,
            address: address,
            accountNumber: accountnumber
          },
          {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          }
        );
        setName("");
        setBranch("");
        setLocation("");
        setAddress("");
        setPhone("");
        setAccountnumber("");
        setIsModal(false);
        setSelectedBank(null);
        getBanks();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (isEditting) {
      setName(selectedBank.name);
      setBranch(selectedBank.branch);
      setLocation(selectedBank.location);
      setPhone(selectedBank.phone);
      setAddress(selectedBank.address);
      setAccountnumber(selectedBank.accountNumber)
    }
    console.log(selectedBank);
  }, [isEditting, selectedBank]);
  console.log(branch);

  return (
    <section className="model">
      <div className="addBankModel">
        <span onClick={() => setIsModal(false)} className="closeBtn">
          <AiOutlineCloseCircle />
        </span>
        <form className="addBankForm">
          <h2>Create an account</h2>
          <label>Bank Name<span>*</span></label>
          <input
            type="name"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Bank Branch<span>*</span></label>
          <input
            type="text"
            placeholder=""
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Bank Location<span>*</span></label>
          <input
            type="location"
            autoComplete="section-blue shipping address-level2"
            placeholder=""
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label>Phone Number<span>*</span></label>
          <input
            type="tel"
            placeholder=""
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Bank Address<span>*</span></label>
          <input
            type="location"
            autoComplete="section-blue shipping street-address"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Account Number<span>*</span></label>
          <input
            type="number"
            placeholder=""
            value={accountnumber}
            onChange={(e) => setAccountnumber(e.target.value)}
          />
          <br/>
          <button type="submit" onClick={addBank} className='btnsubmit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddbankModel;
