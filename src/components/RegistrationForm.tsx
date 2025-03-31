import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { isValidPhoneNumber } from 'libphonenumber-js';

// TypeScript Interfaces
interface Participant {
  name: string;
  email: string;
  phone: string;
}

interface Event {
  id: string;
  name: string;
}

interface FormErrors {
  [key: string]: string;
}

// Firebase Configuration (IMPORTANT: Replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAaUkjeSXqpppIO4A0bd7bBiP8Wncv4juE",
  authDomain: "sympo-acd3c.firebaseapp.com",
  projectId: "sympo-acd3c",
  storageBucket: "sympo-acd3c.firebasestorage.app",
  messagingSenderId: "585418921196",
  appId: "1:585418921196:web:61f6c504a7b4691364c1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_zhp76nl',
  TEMPLATE_ID: 'template_ge1bl5a',
  PUBLIC_KEY: 'rmTViAJq1uQiY5YlG'
};

const RegistrationPage: React.FC = () => {
  // State declarations
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [teamName, setTeamName] = useState<string>('');
  const [participants, setParticipants] = useState<Participant[]>([
    { name: '', email: '', phone: '' },
    { name: '', email: '', phone: '' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Events data (Consistent with the data provided in the query)
  const EVENTS = {
    technical: [
      { id: 'Paper Presentation', name: 'Paper Presentation' },
      { id: 'Project expo/Hackathon', name: 'Project expo/Hackathon' },
      { id: 'Wired-WOnders', name: 'Wired-WOnders' },
      { id: 'Roll and dice', name: 'Roll and dice ' },
      { id: 'Robot Craze', name: 'Robot Craze ' },
    ],
    nonTechnical: [
      { id: 'Anime ', name: 'ANIME AND MANGA' },
      { id: 'Aural Bliss', name: 'AURAL BLISS' },
      { id: 'TreasureHunt', name: 'TREASURE HUNT' },
      { id: 'ElectroF', name: 'ELECTRO FIELD' },
      { id: 'SportsBz', name: 'SPORTS BUZZ' },
      { id: 'OjingeoGame', name: 'OJINGEO GAME' },
    ],
    workshop: [
      { id: 'DRONE ', name: 'DRONE WORKSHOP' },
    ],
    onlineevents: [
      { id: 'shortfilm ', name: 'SHORT FILM' },
      { id: 'esports ', name: 'E-sports(FreeFIre/BGMI🔥)' },
    ],
  };

  // Email sending function
  const sendConfirmationEmail = async (participant: Participant) => {
    try {
      const templateParams = {
        to_name: participant.name,
        to_email: participant.email,
        team_name: teamName,
        events: selectedEvents.join(', '),
        registration_number: participant.phone
      };
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      console.log('Email sent successfully', response);
    } catch (error) {
      console.error('Failed to send email', error);
      throw new Error('Email sending failed');
    }
  };

  // Event selection toggle
  const toggleEventSelection = (eventId: string) => {
    setSelectedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  // Add participant
  const addParticipant = () => {
    if (participants.length < 6) {
      setParticipants(prev => [...prev, { name: '', email: '', phone: '' }]);
    } else {
      alert('Maximum Limit: You can add up to 6 participants only.');
    }
  };

  // Remove participant
  const removeParticipant = (index: number) => {
    if (participants.length > 1) {
      setParticipants(prev => {
        const newParticipants = [...prev];
        newParticipants.splice(index, 1);
        return newParticipants;
      });
    } else {
      alert('Minimum Required: At least 1 participant is required.');
    }
  };

  // Update participant details
  const updateParticipant = (index: number, field: keyof Participant, value: string) => {
    setParticipants(prev => {
      const newParticipants = [...prev];
      newParticipants[index][field] = value;
      return newParticipants;
    });
  };

  // Handle next step
  const handleNextStep = () => {
    if (validateFirstStep()) {
      setCurrentStep(2);
    }
  };

  // Handle previous step
  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  // Form validation for first step
  const validateFirstStep = (): boolean => {
    let errors: FormErrors = {};
    if (teamName.trim() === '') {
      errors.teamName = 'Please enter a team name';
    }
    if (selectedEvents.length === 0) {
      errors.events = 'Please select at least one event';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form validation for second step
  const validateSecondStep = (): boolean => {
    let errors: FormErrors = {};
    participants.forEach((p, i) => {
      if (p.name.trim() === '') {
        errors[`participants[${i}].name`] = `Please enter name for Participant ${i + 1}`;
      }
      if (p.email.trim() === '') {
        errors[`participants[${i}].email`] = `Please enter email for Participant ${i + 1}`;
      }
      if (p.phone.trim() === '') {
        errors[`participants[${i}].phone`] = `Please enter phone for Participant ${i + 1}`;
      }
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (p.email && !emailRegex.test(p.email)) {
        errors[`participants[${i}].email`] = `Invalid email for Participant ${i + 1}`;
      }
      // Phone number validation
      if (p.phone && !isValidPhoneNumber(p.phone, 'IN')) {
        errors[`participants[${i}].phone`] = `Invalid phone number for Participant ${i + 1}`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle registration submission
  const handleRegistration = async () => {
    // Validate participant details
    if (!validateSecondStep()) return;
    setIsSubmitting(true);
    try {
      // Prepare registration data
      const registrationData = {
        registrationNumber: participants[0].phone,
        teamName,
        participants,
        events: selectedEvents,
        registrationDate: new Date(),
        attendanceMarked: false,
        marks: {}
      };
      // Store in Firestore
      const phoneNumber = participants[0].phone;
      const registrationsRef = collection(db, 'registrations');
      const docRef = doc(registrationsRef, phoneNumber);
      await setDoc(docRef, registrationData);
      // Send confirmation emails to each participant
      await Promise.all(participants.map(sendConfirmationEmail));
      // Set success message
      setSuccessMessage(`Registration Successful! Your registration number is: ${phoneNumber}`);
      // Reset form
      setTeamName('');
      setSelectedEvents([]);
      setParticipants([{ name: '', email: '', phone: '' }, { name: '', email: '', phone: '' }]);
      setFormErrors({});
      setCurrentStep(1);
      // Scroll to top
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Registration error:', error);
      setFormErrors({
        submission: 'Failed to submit registration. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Greek mythology themed CSS classes
  const greekStyles = {
    background: "bg-gray-900",
    container: "bg-gray-900 min-h-screen py-8",
    headerText: "text-amber-400 font-serif",
    subheaderText: "text-amber-300 font-serif",
    card: "bg-gray-800 border border-amber-500 shadow-lg rounded-lg p-6 mb-8",
    cardHeader: "text-xl font-bold text-amber-400 mb-4 border-b border-amber-500 pb-2 font-serif",
    cardSubheader: "font-medium text-lg mb-3 text-amber-300 font-serif",
    inputField: "w-full px-3 py-2 bg-gray-700 border-b-2 border-amber-500 text-gray-100 focus:outline-none focus:border-amber-300 rounded-md transition duration-300 placeholder-gray-400",
    checkbox: "form-checkbox h-5 w-5 text-amber-500 border-amber-500",
    label: "text-amber-200 mb-2 font-medium",
    btn: "px-6 py-2 bg-amber-600 text-gray-900 font-bold rounded-md hover:bg-amber-500 hover:shadow-md hover:shadow-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition-all duration-300",
    btnSecondary: "px-6 py-2 bg-gray-700 text-amber-400 font-bold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 transition-all duration-300",
    btnDanger: "text-red-400 hover:text-red-300 focus:outline-none font-medium",
    stepIndicator: {
      active: "rounded-full h-8 w-8 flex items-center justify-center bg-amber-600 text-gray-900 font-bold",
      inactive: "rounded-full h-8 w-8 flex items-center justify-center bg-gray-700 text-gray-400",
      lineActive: "h-1 w-12 bg-amber-600",
      lineInactive: "h-1 w-12 bg-gray-700"
    },
    errorText: "text-red-400 text-sm mt-1",
    noticeBox: "p-4 bg-gray-700 border border-amber-500 rounded-md text-gray-300",
    successBox: "bg-gray-800 border-2 border-amber-500 rounded-lg p-6 mb-8",
    successHeader: "text-xl font-bold mb-4 text-amber-400 font-serif",
    tableHeader: "p-2 border-b border-amber-500 text-left text-amber-400 font-serif"
  };

  // Render function for the first step
  const renderStep1 = () => (
    <>
      {/* Team Information */}
      <div className={greekStyles.card}>
        <h2 className={greekStyles.cardHeader}>Team Information</h2>
        <div className="mb-4">
          <label htmlFor="teamName" className={greekStyles.label}>
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            className={greekStyles.inputField}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
          />
          {formErrors.teamName && (
            <p className={greekStyles.errorText}>{formErrors.teamName}</p>
          )}
        </div>
      </div>

      {/* Event Selection */}
      <div className={greekStyles.card}>
        <h2 className={greekStyles.cardHeader}>Event Selection</h2>
        <p className={greekStyles.cardSubheader}>
          Select the events you want to participate in:
        </p>
        {/* Technical Events */}
        <div className="mb-6">
          <h3 className={greekStyles.subheaderText}>Technical Events</h3>
          {EVENTS.technical.map((event) => (
            <div key={event.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={event.id}
                className={greekStyles.checkbox}
                value={event.id}
                checked={selectedEvents.includes(event.id)}
                onChange={() => toggleEventSelection(event.id)}
              />
              <label
                htmlFor={event.id}
                className={greekStyles.label}
                style={{ marginLeft: '0.5rem' }}
              >
                {event.name}
              </label>
            </div>
          ))}
        </div>
        {/* Non-Technical Events */}
        <div className="mb-6">
          <h3 className={greekStyles.subheaderText}>Non-Technical Events</h3>
          {EVENTS.nonTechnical.map((event) => (
            <div key={event.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={event.id}
                className={greekStyles.checkbox}
                value={event.id}
                checked={selectedEvents.includes(event.id)}
                onChange={() => toggleEventSelection(event.id)}
              />
              <label
                htmlFor={event.id}
                className={greekStyles.label}
                style={{ marginLeft: '0.5rem' }}
              >
                {event.name}
              </label>
            </div>
          ))}
        </div>
        {/* Workshops */}
        <div className="mb-6">
          <h3 className={greekStyles.subheaderText}>Workshops</h3>
          {EVENTS.workshop.map((event) => (
            <div key={event.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={event.id}
                className={greekStyles.checkbox}
                value={event.id}
                checked={selectedEvents.includes(event.id)}
                onChange={() => toggleEventSelection(event.id)}
              />
              <label
                htmlFor={event.id}
                className={greekStyles.label}
                style={{ marginLeft: '0.5rem' }}
              >
                {event.name}
              </label>
            </div>
          ))}
        </div>
        {/* Online Events */}
        <div className="mb-6">
          <h3 className={greekStyles.subheaderText}>Online Events</h3>
          {EVENTS.onlineevents.map((event) => (
            <div key={event.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={event.id}
                className={greekStyles.checkbox}
                value={event.id}
                checked={selectedEvents.includes(event.id)}
                onChange={() => toggleEventSelection(event.id)}
              />
              <label
                htmlFor={event.id}
                className={greekStyles.label}
                style={{ marginLeft: '0.5rem' }}
              >
                {event.name}
              </label>
            </div>
          ))}
        </div>
        {formErrors.events && (
          <p className={greekStyles.errorText}>{formErrors.events}</p>
        )}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-end mt-6">
        <button
          className={greekStyles.btnSecondary}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </>
  );

  // Render function for the second step
  const renderStep2 = () => (
    <>
      {/* Participant Details */}
      <div className={greekStyles.card}>
        <h2 className={greekStyles.cardHeader}>Participant Details</h2>
        <p className={greekStyles.cardSubheader}>
          Enter the details of the participants:
        </p>
        {participants.map((participant, index) => (
          <div key={index} className="mb-6">
            <h4 className={greekStyles.subheaderText}>
              Participant {index + 1}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor={`name-${index}`}
                  className={greekStyles.label}
                >
                  Name
                </label>
                <input
                  type="text"
                  id={`name-${index}`}
                  className={greekStyles.inputField}
                  value={participant.name}
                  onChange={(e) =>
                    updateParticipant(index, 'name', e.target.value)
                  }
                  placeholder="Enter name"
                />
                {formErrors[`participants[${index}].name`] && (
                  <p className={greekStyles.errorText}>
                    {formErrors[`participants[${index}].name`]}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={`email-${index}`}
                  className={greekStyles.label}
                >
                  Email
                </label>
                <input
                  type="email"
                  id={`email-${index}`}
                  className={greekStyles.inputField}
                  value={participant.email}
                  onChange={(e) =>
                    updateParticipant(index, 'email', e.target.value)
                  }
                  placeholder="Enter email"
                />
                {formErrors[`participants[${index}].email`] && (
                  <p className={greekStyles.errorText}>
                    {formErrors[`participants[${index}].email`]}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor={`phone-${index}`}
                  className={greekStyles.label}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id={`phone-${index}`}
                  className={greekStyles.inputField}
                  value={participant.phone}
                  onChange={(e) =>
                    updateParticipant(index, 'phone', e.target.value)
                  }
                  placeholder="Enter phone number"
                />
                {formErrors[`participants[${index}].phone`] && (
                  <p className={greekStyles.errorText}>
                    {formErrors[`participants[${index}].phone`]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        {/* Add/Remove Participant Buttons */}
        <div className="flex justify-between mt-4">
          {participants.length < 6 && (
            <button
              type="button"
              className={greekStyles.btnSecondary}
              onClick={addParticipant}
            >
              Add Participant
            </button>
          )}
          {participants.length > 1 && (
            <button
              type="button"
              className={greekStyles.btnDanger}
              onClick={() => removeParticipant(participants.length - 1)}
            >
              Remove Participant
            </button>
          )}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className={greekStyles.btnSecondary}
          onClick={handlePreviousStep}
        >
          Previous
        </button>
        <button
          className={greekStyles.btn}
          onClick={handleRegistration}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </div>
    </>
  );

  return (
    <div className={greekStyles.container}>
      {/* Greek-themed header */}
      <header className="text-center mb-12">
        <h1 className={greekStyles.headerText}>PRANAV2k25</h1>
        <p className={greekStyles.subheaderText}>
          Unleash the Olympian Within
        </p>
      </header>

      {/* Registration Form */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {successMessage ? (
            /* Success Message Box */
            <div className={greekStyles.successBox}>
              <h2 className={greekStyles.successHeader}>
                {successMessage}
              </h2>
            </div>
          ) : (
            <>
              {/* Step Indicators */}
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center">
                  <div
                    className={
                      currentStep >= 1
                        ? greekStyles.stepIndicator.active
                        : greekStyles.stepIndicator.inactive
                    }
                  >
                    1
                  </div>
                  <div
                    className={
                      currentStep >= 2
                        ? greekStyles.stepIndicator.lineActive
                        : greekStyles.stepIndicator.lineInactive
                    }
                  ></div>
                  <div
                    className={
                      currentStep >= 2
                        ? greekStyles.stepIndicator.active
                        : greekStyles.stepIndicator.inactive
                    }
                  >
                    2
                  </div>
                </div>
                <div className="text-sm text-amber-400 font-serif mt-2">
                  {currentStep === 1 && 'Step 1: Team & Event Selection'}
                  {currentStep === 2 && 'Step 2: Participant Details'}
                </div>
              </div>

              {/* Form Steps */}
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
            </>
          )}

          {/* Greek-inspired footer */}
          <div className="flex justify-center mt-12 mb-6">
            <div className="w-full max-w-2xl border-t border-amber-500 pt-4 flex items-center justify-center">
              <p className="text-amber-300 text-sm font-serif">
                PRANAV2k25 Events • Inspired by the glory of Mount Olympus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;