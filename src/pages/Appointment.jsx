import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Relateddoctor from '../components/Relateddoctor';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null); // Track selected slot
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getAvailableSlot = async () => {
    setDocSlot([]);
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure midnight start for comparison

    // Keep track of 7 days of time slots
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End at 9 PM

      let timeSlots = [];

      if (i === 0) {
        // Handle today’s slots if any are still available
        let currentTime = new Date();
        if (currentTime >= endTime) {
          // No slots available if the day is finished
          timeSlots.push({
            dateTime: currentDate,
            time: 'No slots available',
          });
        } else {
          currentDate.setMinutes(currentTime.getMinutes() + (30 - (currentTime.getMinutes() % 30))); // Next available 30 min slot

          // Add available time slots for today
          while (currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true, // AM/PM format
            });
            timeSlots.push({
              dateTime: new Date(currentDate),
              time: formattedTime,
            });
            currentDate.setMinutes(currentDate.getMinutes() + 30); // 30-minute intervals
          }
        }
      } else {
        // For future days, start at 10 AM and show available slots till 9 PM
        currentDate.setHours(10, 0, 0, 0); // Start at 10 AM
        while (currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, // AM/PM format
          });
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          });
          currentDate.setMinutes(currentDate.getMinutes() + 30); // 30-minute intervals
        }
      }

      allSlots.push(timeSlots);
    }

    setDocSlot(allSlots); // Set the available slots for the next 7 days
  };

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  useEffect(() => {
    const fetchDocInfo = async () => {
      try {
        const docInfo = doctors.find((doc) => doc._id === docId);
        if (docInfo) {
          setDocInfo(docInfo);
        } else {
          console.error('Doctor not found');
        }
      } catch (error) {
        console.error('Error fetching doctor info:', error);
      }
    };

    if (doctors?.length) fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return (
    <div className="container mx-auto px-4 py-8">
      {docInfo ? (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6 border border-gray-400">
          <div className="w-48 h-60 flex-shrink-0 bg-blue-100 flex items-center justify-center rounded-lg">
            <img
              src={docInfo.image}
              alt={`Dr. ${docInfo.name}`}
              className="w-40 h-56 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 m-3 p-3 rounded-lg">
            <h2 className="text-2xl font-semibold">{docInfo.name}</h2>
            <p className="text-gray-500 text-lg">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <p className="text-sm text-gray-500 mt-1">{docInfo.experience} Years</p>
            <p className="text-gray-600 mt-2">{docInfo.about}</p>
            <p className="mt-4 font-semibold text-gray-700">
              Appointment Fee: <span className="text-black">${docInfo.fees}</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading doctor information...</p>
      )}

      <div className="font-medium text-black m-3 p-3">
        <h1 className="text-2xl font-semibold">Booking Slots</h1>
        <div className="flex gap-3 items-center justify-center w-full overflow-x-scroll mt-4">
          {docSlot.length > 0 ? (
            docSlot.map((daySlots, index) => (
              <div
                key={index}
                className={`text-center p-3 min-w-16 m-2 rounded-full cursor-pointer border border-gray-600 ${
                  index === slotIndex ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                }`}
                onClick={() => setSlotIndex(index)}
              >
                <p className="font-semibold">
                  {daySlots[0] && daysOfWeek[daySlots[0].dateTime.getDay()]}
                </p>
                <p>{daySlots[0]?.dateTime.getDate()}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No available slots for booking</p>
          )}
        </div>

        <div className="mt-7 overflow-x-auto">
          {docSlot[slotIndex] && docSlot[slotIndex].length > 0 ? (
            <div className="flex gap-3 items-center justify-start">
              {docSlot[slotIndex].map((slot, idx) => (
                <div
                  key={idx}
                  className={`p-3 items-center rounded-full min-w-[110px] cursor-pointer border border-gray-600 ${
                    slot.time !== 'No slots available'
                      ? slot.time === selectedSlot
                        ? 'bg-primary text-white' // Selected slot
                        : 'bg-green-200'
                      : 'bg-red-300'
                  }`}
                  onClick={() => {
                    if (slot.time !== 'No slots available') {
                      setSelectedSlot(selectedSlot === slot.time ? null : slot.time); // Toggle selected slot
                      setSlotTime(slot.time);
                    }
                  }}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center p-3">No slots available for this day.</p>
          )}

          
        </div>
      </div>
      <div className="flex justify-center">
            <button
              disabled={!slotTime}
              className={`bg-blue-500 text-white font-semibold m-5 py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-opacity-75 ${
                !slotTime ? 'bg-gray-400 cursor-not-allowed' : ''
              }`}
            >
              Book Appointment
            </button>
          </div>
      {docInfo && (
      <Relateddoctor docId={docId} speciality={docInfo.speciality} />
)}
    </div>
  );
};

export default Appointment;
