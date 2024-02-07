import React, { useEffect, useState, useRef } from "react";
import { styled } from "styled-components";
// import { UaeFlag } from "../../assets/flag";
// import axios from "axios";
// import { ListItem } from "@mui/material";
import { toCapitailize } from "../../general/functions";
// import OutsideClickDetector from "../../utils/OutsideClickDetector.js";
import countrieslist from "../../assets/json/country_new.json";
import { useSelector } from "react-redux";
// import al from '../../flags/ad.png'

export const PhoneInput = ({
  type = "number",
  placeholder = "",
  label,
  width = "48%",
  error = false,
  field,
  setPhoneCode,
  errorData,
  showError,
  same,
  setSame,
  ...prop
}) => {
  const [countries, setCountries] = useState([]);
  const [countrydrop, setCountrydrop] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "AE",
    dial_code: "+971",
  });
  const [search, setSearch] = useState("");
  const { phone, phone_code } = useSelector((state) => state.Login.login.data);
  // const countries = countrieslist.sort((a, b)=>a.name.common.localeCompare(b.name))
  useEffect(() => {
    // const sortedCountries = countrieslist.slice().sort((a, b) => {
    //   return a.name.common.localeCompare(b.name);
    // });

    // setCountries(sortedCountries);
    if (search) {
      setCountries(
        countrieslist.filter((item) =>
          item.name.includes(toCapitailize(search))
        )
      );
    } else {
      // const sortedCountries = countrieslist.slice().sort((a, b) => {
      //   return a.name.common.localeCompare(b.name);
      // });
      const sortedData = countrieslist.sort((a, b) =>
        a.name.localeCompare(b.name.common)
      );
      setCountries(sortedData);
    }
    // });
  }, [search]);
  // useEffect(()=)
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // setCountries((prev)=>prev.filter(item=>item.name.common.includes(e.target.value)))
  };
  const containerRef = useRef(null);

  useEffect(() => {
    if (phone_code && same && label === "Whatsapp No") {
      const country = countrieslist.filter(
        (item) => item.dial_code == phone_code
      )[0];
      setSelectedCountry(country);
    }
  }, [same, phone_code]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setCountrydrop(false);
      }
    }
    if (countrydrop) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [countrydrop]);

  return (
    <>
      <Cover width={width} className={error && !errorData ? "error" : null}>
        {/* {(label === "Whatsapp No" && phone) && (
          <ConnectBox>
            <input
              type="checkbox"
              name="same"
              checked={same}
              onChange={(e) => setSame((prev) => !prev)}
            />
            <label for="same">Same as login number</label>
          </ConnectBox>
        )} */}
        <Flag width={width} onClick={() => setCountrydrop((state) => !state)}>
          <img
            src={`https://ameronline.com/flag/${selectedCountry.code.toLowerCase()}.svg`}
            alt=""
          />
          {/* <img src={al} alt="" /> */}
          {/* {selectedCountry?.idd?.root + selectedCountry?.idd?.suffixes[0]} */}
          {/* <h3>{selectedCountry.flag}</h3> */}
          <h4>{selectedCountry.dial_code}</h4>
          <i class="ri-arrow-down-s-line"></i>
        </Flag>
        <input type={type} placeholder={placeholder} maxLength={1} {...prop} />
        <span>{label}</span>
        <p>{error && !errorData ? "this field is required" : null}</p>
        {/* <OutsideClickDetector onOutsideClick={()=>setCountrydrop(false)}> */}
        <CountryDrop countrydrop={countrydrop} ref={containerRef}>
          <SearchBox countrydrop={countrydrop}>
            <i class="ri-search-line"></i>
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              maxLength={12}
              minLength={6}
            />
          </SearchBox>
          <ul>
            {countries.map((item, index) => (
              <li
                onClick={() => {
                  setSelectedCountry(item);
                  setPhoneCode(item.dial_code);
                  setCountrydrop(false);
                }}
              >
                {/* <h3 style={{ fontSize: "24px" }}>{item.flag}</h3> */}
                <Flag2
                  width={width}
                  onClick={() => setCountrydrop((state) => !state)}
                >
                  <img
                    src={`https://ameronline.com/flag/${item.code.toLowerCase()}.svg`}
                    alt=""
                  />
                  {/* <img src={al} alt="" /> */}
                  {/* {selectedCountry?.idd?.root + selectedCountry?.idd?.suffixes[0]} */}
                  {/* <h3>{selectedCountry.flag}</h3> */}
                  {/* <h4>{selectedCountry.dial_code}</h4> */}
                  {/* <i class="ri-arrow-down-s-line"></i> */}
                </Flag2>
                <h5>{item.name}</h5>
              </li>
            ))}
          </ul>
        </CountryDrop>
        {/* </OutsideClickDetector> */}
        {showError}
      </Cover>
    </>
  );
};


const Cover = styled.div`
  width: ${({ width }) => width};
  height: 50px;
  border: 1px solid #9a9a9a;
  border-radius: 8px;
  padding: 10px 6px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  &.error {
    border: 1px solid red;
    span {
      color: red;
    }
  }
  p {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    color: red;
    left: 16px;
  }
  @media only screen and (max-width: 640px) {
    width: 100%;
  }

  input {
    width: 65%;
    /* height: 100%; */
    border: none;
    outline: none;
    padding: 0px 5px;
    font-weight: bold;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  span {
    font-size: 12px;
    position: absolute;
    background: #fff;
    top: -9px;
    left: 10px;
    padding: 0px 5px;
    color: #838383;
    font-family: "poppins_regular";
    @media only screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;
const Flag2 = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 5px;
  gap: 5px;
  position: relative;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: #e6e6e6;
    top: 0px;
    right: 0;
  }
  @media only screen and (max-width: 480px) {
    width: 25%;
  }
  @media only screen and (max-width: 420px) {
    width: 30%;
  }
  img {
    width: 20px;
    object-fit: contain;
  }

  //   background:red;
`;
const Flag = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 5px;
  gap: 5px;
  position: relative;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: #e6e6e6;
    top: 0px;
    right: 0;
  }
  @media only screen and (max-width: 480px) {
    width: 25%;
  }
  @media only screen and (max-width: 420px) {
    width: 30%;
  }
  img {
    width: 20px;
    object-fit: contain;
  }

  //   background:red;
`;
const CountryDrop = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${({ countrydrop }) => (countrydrop ? "200px" : "0px")};
  overflow: hidden;
  background: #fff;
  border: ${({ countrydrop }) => (countrydrop ? "1px solid #9ec195" : null)};
  transition: 0.4s ease;
  z-index: 10;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    height: 80%;
    overflow: scroll;
    padding: 10px 0px;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      display: flex;
      align-items: center;
      padding: 10px 10px;
      gap: 10px;
      cursor: pointer;
      img {
        width: 30px;
        object-fit: contain;
      }
    }
  }
`;
const SearchBox = styled.div`
  width: 90%;
  height: 25px;
  border: 1px solid #000;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  align-items: center;
  display: ${({ countrydrop }) => (countrydrop ? "flex" : "none")};
  input {
    width: 90%;
  }
`;
const ConnectBox = styled.div`
  position: absolute;
  display: flex;
  top: -30px;
  align-items: center;
  text-wrap: nowrap;
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    position: relative;
    border: 1px solid #2dbf66;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    background: white;
    /* border:none */
  }
  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; /* Checkbox background color */
    border-radius: 2px;
    display: block;
  }
  input[type="checkbox"]:checked::before {
    content: "\u2713"; /* Unicode character for checkmark */
    color: #fff; /* Tick color */
    font-size: 14px;
    line-height: 1;
    text-align: center;
    display: block;
    background-color: #2dbf66; /* Checkbox checked background color */
    border-radius: 2px;
  }
  & label {
    font-size: 14px;
    color: #100a0a;
  }
`;
