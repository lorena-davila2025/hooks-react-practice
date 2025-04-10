import React, { useEffect } from 'react'
import CounterApp from './components/CounterApp.jsx'
import FormApp from './components/FormApp.jsx'
import FetchApp from './components/FetchApp.jsx'

const HooksApp = () => {

  useEffect(() => {
    const accordionBtnsList = document.querySelectorAll('.accordion-button')

    const handleAccordionClick = (event) => {
      // Find the accordion-collapse element within the same accordion-item
      const accordionCollapse = event.target.closest('.accordion-item').querySelector('.accordion-collapse')

      // Toggle the 'show' class for the clicked accordion-collapse
      accordionCollapse.classList.toggle('show')

      // Remove the 'show' class from all other accordion-collapse elements
      const allAccordionCollapse = document.querySelectorAll('.accordion-collapse')
      allAccordionCollapse.forEach(item => {
        if (item !== accordionCollapse) {
          item.classList.remove('show')
        }
      })
    }

    // Add event listeners to all accordion buttons
    accordionBtnsList.forEach(accordion => {
      accordion.addEventListener('click', handleAccordionClick)
    })

    // Cleanup function to remove event listeners
    return () => {
      accordionBtnsList.forEach(accordion => {
        accordion.removeEventListener('click', handleAccordionClick)
      })
    }
  }, [])

  return (
    <>
      <h1>Hooks practice</h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Counter hook
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <CounterApp />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Form hook
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <FormApp />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Fetch hook
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <FetchApp />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HooksApp
