import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "react-day-picker/dist/style.css";

const InquiryBox = ({ routeData }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [startingDate, setStartingDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleOpenDate = () => {
    setOpenDate(!openDate);
  };

  let message;
  routeData
    ? (message = `
  No. Of People: ${numOfPeople}
  Departure Date : ${date}
  Route Name : ${routeData.routeName}
  Price : ${routeData.price}
  Class: ${routeData.class},
  Departure Time: ${routeData.departureTime},
  Duration: ${routeData.duration},
  Arrival Time: ${routeData.arrivalTime},
  Boarding Point: ${routeData.boardingPoint},
  Arrival Point: ${routeData.arrivalPoint}
  `)
    : "";
  const handleDateChange = (selectedDate) => {
    setStartingDate([{ startDate: selectedDate }]);
    setOpenDate(false);
    setDate(selectedDate);
  };

  const validateForm = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!date) {
      setDateError("Date is required");
      valid = false;
    } else {
      setDateError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  };

  const disabledBeforeToday = (selectedDate) => {
    const today = new Date();
    return selectedDate < today;
  };

  const emailParams = {
    message: message,
    name: name,
    email: email,
    date: date,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage("Please fill in all required fields.");
      return;
    }

    emailjs
      .send(
        "service_orpkacs",
        "template_9gxfpbp",
        emailParams,
        "fexUNm0MRhObxUJmB"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            setModalContent("Email sent successfully!");
            setModalOpen(true);
            console.log(modalContent)
          } else {
            setModalContent("Failed to send email. Please try again later.");
            setModalOpen(true);
          }
        },
        (error) => {
          setModalContent("Failed to send email. Please try again later.");
          setModalOpen(true);
        }
      );
  };

  let footer = <p>Please pick a day.</p>;
  if (startingDate) {
    footer = <p>You picked {startingDate[0]?.startDate.toDateString()}.</p>;
  }

  return (
    <div className="mb-[18px] flex w-full flex-col items-center justify-between rounded-xl bg-gray-100 px-4 py-6 sm:px-11 sm:py-6">
      <div className="mb-4 flex w-full items-center justify-between">
        <p className="font-popins text-2xl font-semibold text-[#262630]">
          No. Of People
        </p>
        <div className="flex items-center justify-end gap-3">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#BDBDC2] border-opacity-20"
            onClick={() => setNumOfPeople(Math.max(1, numOfPeople - 1))}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-base"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <p className="font-montserrat mx-3 flex items-center justify-center rounded border border-[#FF8682] p-3 text-xs font-medium">
            {numOfPeople}
          </p>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#BDBDC2] border-opacity-20"
            onClick={() => setNumOfPeople(numOfPeople + 1)}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-base"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-4 flex w-full flex-col justify-between">
        <label className="ms:font-semibold text-base font-bold" htmlFor="Name">
          Name
        </label>
        <input
          className="w-full rounded border border-gray-300 py-2 pl-4"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          id="name"
          placeholder="Provide Your Name Here"
        />
        <div className="mb-2 text-red-500">{nameError}</div>
      </div>
      <div className="relative mb-4 flex w-full flex-col items-center">
        <label
          className="ms:font-semibold mr-auto text-base font-bold"
          htmlFor="Name"
        >
          Date
        </label>
        <span
          onClick={toggleOpenDate}
          className="bottom-1 flex w-full cursor-pointer items-center space-x-2 border bg-white p-2"
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="mr-2 text-slate-400"
          />
          DEPART{" "}
          {startingDate && (
            <small className="whitespace-nowrap lexs:whitespace-normal">
              - {startingDate[0]?.startDate.toDateString()}
            </small>
          )}
        </span>
        {openDate && (
          <DayPicker
            mode="single"
            selected={startingDate ? startingDate[0].startDate : null}
            onDayClick={handleDateChange}
            footer={footer}
            className="mr-2 rounded-md bg-white p-4 text-slate-900"
            disabled={disabledBeforeToday}
          />
        )}
        <div className="mb-2 text-red-500">{dateError}</div>
      </div>

      <div className="mb-4 flex w-full flex-col justify-between">
        <label
          className="ms:font-semibold mr-auto text-base font-bold"
          htmlFor="Name"
        >
          Email
        </label>
        <input
          className="w-full rounded border border-gray-300 py-2 pl-4"
          type="email"
          value={email}
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Provide Your Email Id"
        />
        <div className="mb-2 text-red-500">{emailError}</div>
      </div>
      {modalOpen && (
        <div
          className={
            modalContent.includes("successfully")
              ? "mb-4 text-green-500"
              : "mb-4 text-red-500"
          }
        >
          {modalContent}
        </div>
      )}
      <button
        className="w-full rounded bg-[#27273F] py-4 text-base font-medium text-white"
        onClick={sendEmail}
      >
        Send Enquiry
      </button>
    </div>
  );
};

export default InquiryBox;
