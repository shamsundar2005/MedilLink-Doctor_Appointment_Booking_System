import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext); // Correct use of useContext
  const [relDoc, setRelDoc] = useState([]);
  
  useEffect(() => {
    if (doctors.length > 0 && speciality && docId) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId,
      );
      setRelDoc(filteredDoctors);
    }
  }, [doctors, speciality, docId]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900">
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/*  */}
      <div className="w-full grid grid-cols-auto gap-4 pt-4 gap-y-6 px-3 sm:px-0">
        {relDoc.length > 0 ? (
          relDoc.slice(0, 10).map((item) => (
            <div
              key={item._id}
              onClick={() => {navigate(`/appointment/${item._id}`);scroll(0,0)}}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all bg-slate-100"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-md">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No related doctors found.</p>
        )}
      </div>

      <button 
        onClick={() => {
          navigate('/doctors');
          scroll(0, 0);
        }} 
        className="bg-blue-100 text-gray-600 px-12 py-3 rounded-lg mt-10"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctor;
