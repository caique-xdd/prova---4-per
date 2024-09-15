import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summery } from './components/summery'
// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/*<EmptyGoals />*/}

      <Summery />

      <CreateGoal />
    </Dialog>
  )
}
