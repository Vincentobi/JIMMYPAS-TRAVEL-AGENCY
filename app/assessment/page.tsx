import React from 'react'
import AssesmentNav from '../Components/AssesmentNav/AssesmentNav'
import AssesmentForm from '../Components/AssesmentForm/AssesmentForm'
import Footer from '../Components/AssesmentFormFooter/Footer'

const AssessmentPage = () => {
    return (
        <div className='bg-background-light dark:bg-background-dark min-h-screen'>
            <AssesmentNav />
            <AssesmentForm />
            <Footer />
        </div>
    )
}

export default AssessmentPage
