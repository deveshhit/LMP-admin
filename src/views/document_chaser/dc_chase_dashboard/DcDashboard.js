import React from 'react'
import { CRow, CCol, CWidgetStatsC,CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell, CButton} from '@coreui/react'
import ChasingDocument from './ChasingDocument'
import PendingVerification from './PendingVerification'

function DcDashboard() {
  return (
   <>
   <section>
      <CRow>
      <CCol className='' xs={6}>
        <div>
          <select className='form-control' name="policy" id="policy">
            <option value="all">All</option>
            <option value="medical">Medical (Individual)</option>
            <option value="motor">Motor</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        </CCol>
        <CCol xs={6}>
        <div className='mb-3'>
          <button className='btn btn-light'>Daily</button>
          <button className='btn btn-light'>Weekly</button>
          <button className='btn btn-light'>Monthly</button>
          <button className='btn btn-light'>Yearly</button>
          <button className='btn btn-light'>Customize</button>
        </div>
        </CCol>
        </CRow>
      </section>
      <section>
        <div>
          <CRow>
            <CCol xs={4}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Medical"
                value="26"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'warning', value: 100 }}
                text="Widget helper text"
                title="Motor"
                value="28"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Travel"
                value="13"
              />
            </CCol>
          </CRow>
        </div>
      </section>
      <ChasingDocument/>
      <PendingVerification/>
   </>
  )
}

export default DcDashboard