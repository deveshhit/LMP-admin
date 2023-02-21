import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))

//sales advisor
const salesDashboard = React.lazy(() => import('./views/sales_advisor/dashboard/SalesDashboard'))
const salesGraph = React.lazy(() => import('./views/sales_advisor/graphical_view/salesGraph'))
// sales advisor

//Document Chaser
const DcDashboard = React.lazy(() => import('./views/document_chaser/dc_chase_dashboard/DcDashboard'))
const DcDocument = React.lazy(() => import('./views/document_chaser/dc_chasing_document/DcDocument'))
const DcGraph = React.lazy(() => import('./views/document_chaser/dc_graphical_view/DcGraph'))
const DcVerify = React.lazy(() => import('./views/document_chaser/dc_pending_verification/DcVerify'))
//Document Chaser

//Policy Issue
const PiDashboard = React.lazy(() => import('./views/policy_issue/pi_dashboard/PiDashboard'))
const PiGraph = React.lazy(() => import('./views/policy_issue/pi_graphical_view/PiGraph'))
const PiIssuedpolicy = React.lazy(() => import('./views/policy_issue/pi_issued_policy/PiIssuedpolicy'))
const PiPendingPolicy = React.lazy(() => import('./views/policy_issue/pi_pending_policy/PiPendingPolicy'))
//Policy Issue



const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/sales_advisor', name: 'Sales Advisor', element: Cards, exact: true },
  { path: '/sales_advisor/dashboard', name: 'Dashboard', element: salesDashboard, exact: true },
  { path: '/sales_advisor/graphical_view', name: 'Graphical View', element: salesGraph, exact: true },
  // { path: '/document_chaser', name: 'Document Chaser', element: Cards, exact: true },
  { path: '/document_chaser/dc_chase_dashboard', name: 'Dashboard', element: DcDashboard, exact: true },
  { path: '/document_chaser/dc_graphical_view', name: 'Chasing Document', element: DcGraph, exact: true },
  { path: '/document_chaser/dc_chasing_document', name: 'Graphical View', element: DcDocument, exact: true },
  { path: '/document_chaser/dc_pending_verification', name: 'Pending For Verification', element: DcVerify, exact: true },
  // { path: '/policy_issue', name: 'Policy Issue', element: Cards, exact: true },
  { path: '/policy_issue/pi_dashboard', name: 'Dashboard', element: PiDashboard, exact: true },
  { path: '/policy_issue/pi_graphical_view', name: 'Graphical View', element: PiGraph, exact: true },
  { path: '/policy_issue/pi_pending_policy', name: 'Pending Policies', element: PiPendingPolicy, exact: true },
  { path: '/policy_issue/pi_issued_policy', name: 'Issued Policies', element: PiIssuedpolicy, exact: true },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
