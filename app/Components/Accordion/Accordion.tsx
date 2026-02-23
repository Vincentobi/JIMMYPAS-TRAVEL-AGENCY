'use client'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const AccordionComponent = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="lg:col-span-2 space-y-4">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon className={expanded === 'panel1' ? 'text-primary' : ''} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        className={`w-full flex items-center justify-between px-6 py-5 text-left font-bold transition-colors ${expanded === 'panel1' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}
                        component="span"
                    >
                        How do I start my application for a Study Visa?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div">
                        <div className="accordion-content border-t border-slate-50">
                            <div className="px-6 py-5 text-text-muted leading-relaxed text-left">
                                <p className="mb-3">To begin your Study Visa application, follow these simple steps:</p>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Schedule a free initial assessment with our consultants.</li>
                                    <li>Collect all required documents (Academic transcripts, passport, and proof of funds).</li>
                                    <li>Our team will help you select the right institution and program.</li>
                                    <li>We handle the application submission and track your status until approval.</li>
                                </ul>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon className={expanded === 'panel2' ? 'text-primary' : ''} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography
                        className={`w-full px-6 py-5 text-left font-bold transition-colors ${expanded === 'panel2' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}
                        component="span"
                    >
                        What are the accepted payment methods?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div">
                        <div className="accordion-content border-t border-slate-50">
                            <div className="px-6 py-5 text-text-muted text-left">
                                We accept various payment methods including Credit/Debit cards (Visa, MasterCard), Bank Transfers, PayPal, and regional mobile money options. All payments are securely processed through our encrypted gateway.
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon className={expanded === 'panel3' ? 'text-primary' : ''} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography
                        className={`w-full px-6 py-5 text-left font-bold transition-colors ${expanded === 'panel3' ? 'text-primary' : 'text-gray-900 dark:text-white'}`}
                        component="span"
                    >
                        Do you offer job placement services after graduation?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component="div">
                        <div className="accordion-content border-t border-slate-50">
                            <div className="px-6 py-5 text-text-muted text-left">
                                Yes, JIMMYPAS offers post-graduation career consultancy. We assist with CV optimization, interview preparation, and connecting you with partner employers in your field of study.
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccordionComponent