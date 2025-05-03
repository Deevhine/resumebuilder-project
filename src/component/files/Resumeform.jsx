
import React, { useState } from "react";
import jsPDF from "jspdf";
const ResumeForm = () => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    county: "",
    postcode: "",
    phone: "",
    email: "",
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    linkedIn: "",
    website: "",
    drivingLicence: "",
    nationality: "",
  });
  const [loading, setLoading] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo({ ...additionalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    generatePDF();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 10, 10);
    doc.text(`Address: ${formData.street}, ${formData.city}, ${formData.county}, ${formData.postcode}`, 10, 20);
    doc.text(`Phone: ${formData.phone}`, 10, 30);
    doc.text(`Email: ${formData.email}`, 10, 40);
    if (additionalInfo.linkedIn) {
      doc.text(`LinkedIn: ${additionalInfo.linkedIn}`, 10, 50);
    }
    if (additionalInfo.website) {
      doc.text(`Website: ${additionalInfo.website}`, 10, 60);
    }
    if (additionalInfo.drivingLicence) {
      doc.text(`Driving Licence: ${additionalInfo.drivingLicence}`, 10, 70);
    }
    if (additionalInfo.nationality) {
      doc.text(`Nationality: ${additionalInfo.nationality}`, 10, 80);
    }
    doc.save("resume.pdf");
    setLoading(false);
  };
  return (
    <div className="form-container">
      <h2>We suggest including an email and phone number</h2>
      <div className="form-layout">
        <div className="photo-section">
          {photo ? (
            <img src={photo} alt="Uploaded" className="photo-preview" />
          ) : (
            <div className="photo-placeholder" />
          )}
          <label className="upload-label">
            + Upload photo
            <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
          </label>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="e.g. John"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="half-width"
            />
            <input
              type="text"
              placeholder="e.g. Smith"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="half-width"
            />
          </div>
          <input
            type="text"
            placeholder="e.g. 42 Ashton Street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div className="form-group">
            <input
              type="text"
              placeholder="e.g. Oxford"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="e.g. Oxfordshire"
              name="county"
              value={formData.county}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="e.g. OX1 3EX"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="tel"
            placeholder="e.g. 0121 234 5678"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="e.g. john.smith@example.co.uk"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="optional-section">
            <p>Add additional information to your CV (optional)</p>
            <div className="buttons">
              <button type="button">LinkedIn</button>
              <button type="button">Website</button>
              <button type="button">Driving licence</button>
              <button type="button">Nationality</button>
            </div>
          </div>
          <button type="submit" value={generatePDF}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;

