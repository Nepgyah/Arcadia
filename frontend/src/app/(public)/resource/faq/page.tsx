import { Account, General, QA } from "@/data/faq";
import "@/styles/public/pages/resources/faq.scss";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'

export default function PageFAQ() {
    return (
        <div id="page-resource-faq" className="bg--pink-gradient">
            
            <section id="studies" className="section">
                <div className="section__wrapper">
                    <h1>Frequently Asked Questions</h1>
                    <div className="section-content">
                        <div className="questions">
                            <div className="question-group">
                                <h3>General</h3>
                                {
                                    General.map((qa: QA, index: any) => (
                                        <FAQAccordion key={index} question={qa.question} answer={qa.answer} />
                                    ))
                                }
                            </div>
                            <div className="question-group">
                                <h3>Account</h3>
                                {
                                    Account.map((qa: QA, index: any) => (
                                        <FAQAccordion key={index} question={qa.question} answer={qa.answer} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function FAQAccordion(faq: QA) {
    return (
        <Accordion className="arc-accordion" key={faq.key}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="-content"
            id="-header"
          >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
    )
}