import React, { useEffect } from 'react'
import Counter from '../components/Counter.jsx'
import Form from '../components/Form.jsx'
import DifferenceRefVsState from '../components/DifferenceRefVsState.jsx'
import Memo from '../components/Memo.jsx'
import Fetch from '../components/Fetch.jsx'
import Callback from '../components/Callback.jsx'
import Reducer from '../components/Reducer.jsx'
import Redux from '../components/Redux.jsx'

const HomeScreen = () => {

  useEffect(() => {
    const accordionBtnsList = document.querySelectorAll('.accordion-button')

    const handleAccordionClick = (event) => {
      // Find the accordion-collapse element within the same accordion-item
      const accordionItem = event.target.closest('.accordion-item')
      const accordionCollapse = accordionItem.querySelector('.accordion-collapse')

      accordionCollapse.classList.toggle('show')

      // Remove the 'show' class from all other accordion-collapse elements
      const allAccordionCollapse = document.querySelectorAll('.accordion-collapse')
      allAccordionCollapse.forEach(item => {
        if (item !== accordionCollapse) {
          item.classList.remove('show')
        }
      })
      window.scrollTo({
        top: accordionItem.offsetTop,
        behavior: 'smooth'
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
    <div className="container py-5 m-auto">
      <h1>Hooks practice</h1>

      <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Counter hook
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Counter />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Counter Hook: Exploring useRef Nuances
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <DifferenceRefVsState />
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
              <Form/>
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
              <Fetch />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              UseMemo hook
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Memo />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              UseCallback hook
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Callback />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              UseReducer hook
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Reducer />
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Redux
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Redux />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HomeScreen
