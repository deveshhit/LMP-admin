import React from 'react'
import { CRow, CCol, CWidgetStatsC,CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell, CButton} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import NewLead from './NewLead'
import HotLead from './HotLead'
import ColdLead from './ColdLead'
import WarmLead from './WarmLead'
import ClosedBussiness from './ClosedBussiness'
import PendingPolicies from './PendingPolicies'
import LostDropped from './LostDropped'
// import { CRow, } from '@coreui/icons'
function salesDashboard() {
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
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Assigned Leads"
                value="1009"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'warning', value: 100 }}
                text="Widget helper text"
                title="Pending"
                value="43"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Lost"
                value="73"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'warning', value: 100 }}
                text="Widget helper text"
                title="Closed"
                value="46"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Top Agent"
                value="SA"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'warning', value: 100 }}
                text="Widget helper text"
                title="Ratio"
                value="100%"
              />
            </CCol>

            <CCol xs={3}>
              <CWidgetStatsC
                className="mb-3"
                progress={{ color: 'success', value: 100 }}
                text="Widget helper text"
                title="Premium Earned"
                value="5304.1375"
              />
            </CCol>
            <CCol xs={3}>
              <CWidgetStatsC
                width={36}
                className="mb-3"
                progress={{ color: 'warning', value: 100 }}
                text="Widget helper text"
                title="Income Earned"
                value="530.41375"
              />
            </CCol>
          </CRow>
        </div>
      </section>
      <NewLead/>
      <HotLead/>
      <ColdLead/>
      <WarmLead/>
     <ClosedBussiness/>
      <PendingPolicies/>
      <LostDropped/>

      <section>
      <div>
      <h4>LOST & DROPPED </h4>
      <hr />
      <CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell  scope="col">#</CTableHeaderCell >
      <CTableHeaderCell  scope="col">First</CTableHeaderCell >
      <CTableHeaderCell  scope="col">Last</CTableHeaderCell >
      <CTableHeaderCell  scope="col">Handle</CTableHeaderCell >
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHead scope="row">1</CTableHead>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHead scope="row">2</CTableHead>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHead scope="row">3</CTableHead>
      <CTableDataCell>Larry</CTableDataCell>
      <CTableDataCell>the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
      </div>
<CButton color="info">Save</CButton>

      </section>

     
    </>
  )
}
export default salesDashboard
