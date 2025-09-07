import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobsatom, messagesatom, networkatom, notificationatom, totalNotificationSelector } from './atoms'


function App() {

  return <div>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </div>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkatom);
  const jobsNotificationCount = useRecoilValue(jobsatom);
  const messagesNotificationCount = useRecoilValue(messagesatom);
  const NotificationCount = useRecoilValue(notificationatom);
  const TotalNotificatonCount = useRecoilValue(totalNotificationSelector)

  return (
    <div>
      <button>My network ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount} )</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagesNotificationCount})</button>
      <button>Notifications ({NotificationCount})</button>
      <button>Me ({TotalNotificatonCount})</button>
    </div>
  )
}

export default App
