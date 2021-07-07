import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Link} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HRLetter from './component/HRLetter'
import InputHRLetter from './component/InputHRLetter'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import OfferLetter from './component/OfferLetters/OfferLetter';
import IncrementLetter from './component/IncrementLetter/IncrementLetter';
import DesignationLetter from './component/DesignationLetter/DesignationLetter';
import TrainingCommit from './component/TrainingCommit/TrainingCommit';
import DepuationLetter from './component/DepuationLetter/DepuationLetter';
import ConfirmationLetter from './component/ConfirmationLetter/ConfirmationLetter';
import RelivingLetter from './component/RelivingLetter/RelivingLetter';
import CertificateLetter from './component/CertificateLetter/CertificateLetter';

ReactDOM.render(<CertificateLetter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
