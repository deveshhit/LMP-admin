import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          LMP
        </a>
        <span className="ms-1">&copy; Company 2022. All Rights Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Design and Developed By</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Hands In Technology
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
