import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctor = () => {
  const {speciality} =useParams()
  const navigate=useNavigate()
  const [filterDoc,setFilterDoc]=useState([])
  const {doctors}=useContext(AppContext)
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality==speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
    applyFilter()

  },[doctors,speciality])
  
  return (
    <div >
      <div className='text-black'>
      <p className='text-3xl font-medium m-3
      '>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-3'>
        <div className='flex flex-col gap-4 text-sm text-grey-600'>
          <p onClick={()=>speciality === 'General physician'? navigate('/doctors/'):navigate('/doctors/General physician')} className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3 p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all  ${speciality==="General physician"?"bg-white text-black":""}`}>General physician</p>
          <p onClick={()=>speciality === 'Gynecologist'? navigate('/doctors/'):navigate('/doctors/Gynecologist')}className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3 p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all ${speciality==="Gynecologist"?"bg-white text-black":""}`}>Gynecologist</p>
          <p onClick={()=>speciality === 'Dermatologist'? navigate('/doctors/'):navigate('/doctors/Dermatologist')}className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3 p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all ${speciality==="Dermatologist"?"bg-white text-black":""}` }> Dermatologist</p>
          <p onClick={()=>speciality === 'Pediatricians'? navigate('/doctors/'):navigate('/doctors/Pediatricians')}className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3 p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all ${speciality==="Pediatricians"?"bg-white text-black":""}` }>Pediatricians</p>
          <p onClick={()=>speciality === 'Neurologist'? navigate('/doctors/'):navigate('/doctors/Neurologist')}className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3  p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all ${speciality==="Neurologist"?"bg-white text-black":""}`} > Neurologist</p>
          <p onClick={()=>speciality === 'Gastroenterologist'? navigate('/doctors/'):navigate('/doctors/Gastroenterologist')}className={`w-[-94vw] pl--3 py-1.5pr-16 border  border-primary m-3  p-3 rounded-lg bg-gray-200 cursor-pointer hover:-translate-y-2 transition-all ${speciality==="Gastroenterologist"?"bg-white text-black":""}`}>Gastroenterologist</p>
        </div>
        
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all bg-slate-100"
    >
                <img src={item.image} alt={`${item.name}`} />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500 ">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-md">{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor