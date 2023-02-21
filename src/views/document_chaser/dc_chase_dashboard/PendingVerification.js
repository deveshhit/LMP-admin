import React from 'react'
import { CRow, CCol, CWidgetStatsC,CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell, CButton} from '@coreui/react'

function PendingVerification() {
  return (
    <>
    <section>
      <div>
      <h4>Pending Verification / To be Received</h4>
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

export default PendingVerification