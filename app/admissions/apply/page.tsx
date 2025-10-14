'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/ui/home/footer';
import Navbar from '@/app/ui/home/navbar';

interface Student {
  id: number;
  name: string;
  dateOfBirth: string;
}

export default function ApplyNow() {
  const [students, setStudents] = useState<Student[]>([{ id: 1, name: '', dateOfBirth: '' }]);
  
  const [formData, setFormData] = useState({
    parentName: '',
    entryDate: '',
    email: '',
    phone: '',
    notes: ''
  });

  const addStudent = () => {
    setStudents(prev => [...prev, { id: Date.now(), name: '', dateOfBirth: '' }]);
  };

  const removeStudent = (id: number) => {
    if (students.length > 1) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  const updateStudent = (id: number, field: string, value: string) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.parentName || !formData.email || !formData.phone) {
      alert('Please fill in all required parent/guardian fields');
      return;
    }

    // Validate student fields
    const hasEmptyStudentFields = students.some(student => !student.name || !student.dateOfBirth);
    if (hasEmptyStudentFields) {
      alert('Please fill in all student fields');
      return;
    }

    // Prepare email content
    const emailSubject = `New Admission Application - ${formData.parentName}`;
    const emailBody = `
Parent/Guardian Details:
Name: ${formData.parentName}
Preferred Entry Date: ${formData.entryDate}
Email: ${formData.email}
Phone: ${formData.phone}

Students:
${students.map((student, index) => `
Student ${index + 1}:
Name: ${student.name}
Date of Birth: ${student.dateOfBirth}
`).join('')}

Additional Notes:
${formData.notes}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:barakamtitoacademy@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
     <div className="sticky top-0 bg-gray-50 z-50 pl-55 pr-55 h-[3px] ">
                <Navbar />
                <div className='lg:pl-9 lg:pr-9 '> 
                  <div className="border-b-2 border-blue-600 "></div></div>
                
              </div>
    <div className="min-h-screen bg-gray-50 py-8 px-15">
      <div className="container mx-auto max-w-7xl">
        {/* Main Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-600 mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
                Admissions
              </Link>
              {' / '}
              Apply now
            </div>
            
            {/* Apply Now Title with Dark Blue Background */}
            <div className="bg-blue-800 text-white px-6 py-4 rounded-lg">
              <h1 className="text-2xl font-bold">Apply now</h1>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-3">
            {/* Description at the top right */}
            <div className="mb-8">
              <p className="text-gray-900 text-lg leading-relaxed">
                Use this form to start the process of applying for a place at Baraka School. 
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Card 1 - Parent/Guardian Details */}
              <div className="rounded-lg shadow-lg p-6 max-w-3xl" style={{ backgroundColor: '#e0f2fe' }}>
                <h2 className="text-xl font-bold mb-4" style={{ color: '#3d1f4c' }}>
                  Parent/Guardian details
                </h2>
                <p className="text-gray-600 mb-6">
                  Please provide your details so that we can contact you about your enquiry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg p-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 text-gray-900 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Entry Date */}
                  <div>
                    <label htmlFor="entryDate" className="block text-sm font-medium text-gray-900 mb-2 ">
                      Entry date
                    </label>
                    <input
                      type="date"
                      id="entryDate"
                      name="entryDate"
                      value={formData.entryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2 ">
                      Phone number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 - Students */}
              <div className="rounded-lg shadow-lg p-6 max-w-3xl" style={{ backgroundColor: '#e0f2fe' }}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold" style={{ color: '#3d1f4c' }}>
                    Students
                  </h2>
                  <button
                    type="button"
                    onClick={addStudent}
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Add Student
                  </button>
                </div>

                {students.map((student, index) => (
                  <div key={student.id} className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-900">Student {index + 1}</h3>
                      {students.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeStudent(student.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Student Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={student.name}
                          onChange={(e) => updateStudent(student.id, 'name', e.target.value)}
                          required
                          className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          placeholder="Student's full name"
                        />
                      </div>

                      {/* Student Date of Birth */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Date of birth *
                        </label>
                        <input
                          type="date"
                          value={student.dateOfBirth}
                          onChange={(e) => updateStudent(student.id, 'dateOfBirth', e.target.value)}
                          required
                          className="w-full px-4 py-2 border text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card 3 - Further Notes */}
              <div className="rounded-lg shadow-lg p-6 max-w-3xl" style={{ backgroundColor: '#e0f2fe' }}>
                <h2 className="text-xl font-bold mb-4 " style={{ color: '#3d1f4c' }}>
                  Further notes
                </h2>
                <p className="text-gray-900 mb-4">
                  Use the notes field below if you have particular preferences or other relevant considerations.
                </p>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2 ">
                    
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              {/* Submit Button - Aligned to right edge */}
              <div className="flex justify-end max-w-3xl">
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}