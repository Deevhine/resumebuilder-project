import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


{/* <div className="sidebar"> 
<h2 className="logo">my<span>perfect</span>CV</h2>
<ol className="steps">
  <li className="active">CV heading</li>
  <li>Work history</li>
  <li>Education</li>
  <li>Skills</li>
  <li>Professional summary</li>
  <li>Finalise</li>
</ol>
<div className="legal-links">
  <a href="#">Terms & Conditions</a>
  <a href="#">Privacy Policy</a>
  <a href="#">Contact Us</a>
</div>
</div> */}

// <div className='generate-folder'>
//           <button type="submit">Generate PDF</button>
//           <button type='review'>Preview</button>
//           </div>

// const generatePDF = () => {
//   const doc = new jsPDF();
//   doc.text(`Name: ${formData.firstName} ${formData.surname}`, 10, 10);
//   doc.text(`Address: ${formData.street}, ${formData.city}, ${formData.county}, ${formData.postcode}`, 10, 20);
//   doc.text(`Phone: ${formData.phone}`, 10, 30);
//   doc.text(`Email: ${formData.email}`, 10, 40);
//   if (image) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       doc.addImage(event.target.result, 'JPEG', 150, 10, 40, 40);
//       doc.save('resume.pdf');
//       setLoading(false);
//     };
//     reader.readAsDataURL(image);
//   } else {
//     doc.save('resume.pdf');
//     setLoading(false);
//   }
// };


// const [loading, setLoading] = useState(false);
// const [formData, setFormData] = useState({
//   firstName: '',
//   surname: '',
//   street: '',
//   city: '',
//   county: '',
//   postcode: '',
//   phone: '',
//   email: '',
// });
// const [image, setImage] = useState(null);

// const handleInputChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleImageChange = (e) => {
//   setImage(e.target.files[0]);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setLoading(true);
//   generatePDF();
// };

// .sidebar {
//   width: 250px;
//   background-color: #0d2c6d;
//   color: white;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }

// .sidebar .logo {
//   font-size: 22px;
//   font-weight: bold;
//   margin-bottom: 30px;
// }

// .sidebar .logo span {
//   color: red;
// }

// .sidebar .steps {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .sidebar .steps li {
//   margin: 10px 0;
//   padding: 8px;
//   border-left: 4px solid transparent;
// }

// .sidebar .steps li.active {
//   background-color: #1a3b80;
//   border-left: 4px solid yellow;
//   font-weight: bold;
// }

// .sidebar .legal-links a {
//   color: #ccc;
//   font-size: 12px;
//   display: block;
//   margin: 5px 0;
//   text-decoration: none;
// }