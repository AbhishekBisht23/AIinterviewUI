// require('dotenv').config();
import.meta.env
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import HomePage from './pages/HomePage.jsx'

import ResumeUploadPage from './pages/ResumeUploadPage.jsx'
import InterviewSelection from './pages/InterviewSelection.jsx'
import ResumeBasedInterview from './pages/ResumeBasedInterview.jsx'
import GithubRepoPage from './pages/githubrepopage.jsx'
import CodingBasedPage from './pages/Codingbasedpage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='interviewselection' element={<InterviewSelection/>}/>
      <Route path='resumeuploadpage' element={<ResumeUploadPage/>}/>
      <Route path='githubrepopage' element={<GithubRepoPage/>}/>
      <Route path='codingbasedpage' element={<CodingBasedPage/>}/>
      <Route path='resumebasedinterview' element={<ResumeBasedInterview/>}/>
      {/* <Route path='' element={<HomePage/>}/> */}
      <Route path='loginpage' element={<LoginPage/>} />
      <Route path='signuppage' element={<SignUpPage/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
