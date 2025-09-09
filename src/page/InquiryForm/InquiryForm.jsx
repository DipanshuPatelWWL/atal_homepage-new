import React from 'react'

const InquiryForm = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 mb-10 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Inquiry Form</h2>
      <div class="p-6">
        <table class="table-auto border-collapse border border-gray-500 w-full text-center">
          <thead>
            <tr class="bg-gray-200">
              <th className='border-r border-gray-400 px-4 py-2'>SR. No.</th>
              <th className='border-r border-gray-400 px-4 py-2'>Inquiry Number</th>
              <th className='border-r border-gray-400 px-4 py-2'>Type</th>
              <th className='border-r border-gray-400 px-4 py-2'>Name</th>
              <th className='border-r border-gray-400 px-4 py-2'>Email</th>
              <th className='border-r border-gray-400 px-4 py-2'>Business/Registration No.</th>
              <th className='border-r border-gray-400 px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">1</td>
              <td className="border border-gray-500 px-4 py-2">123456</td>
              <td className="border border-gray-500 px-4 py-2">hdiid</td>
              <td className="border border-gray-500 px-4 py-2">john</td>
              <td className="border border-gray-500 px-4 py-2">john124563@gmail.com</td>
              <td className="border border-gray-500 px-4 py-2">1125486</td>
              <td className="border border-gray-500 px-4 py-2">
                <button className='text-white rounded w-full bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Send Response</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default InquiryForm