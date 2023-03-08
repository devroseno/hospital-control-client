import {Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {PatientsTable} from '../pages/Patients'

export function PrivateRoutes() {
  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/inicio' component={DashboardWrapper} />
        <Route path='/pacientes' component={PatientsTable} />
      </Switch>
    </Suspense>
  )
}
