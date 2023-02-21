import React from 'react'
import { CRow, CCol, CWidgetStatsC,CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell, CButton} from '@coreui/react'

function WarmLead() {
  return (
    <>
    <section>
      <div>
      <h4>WARM LEADS </h4>
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

export default WarmLead