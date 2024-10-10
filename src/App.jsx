import Chat from './chat/Chat'
import List from './list/List'
import Detail from './detail/Detail'

const App = ()  => {
  return (
    <div className="container">
      <List/>
      <Chat/> 
      <Detail/>
    </div>
  )
}

export default App