import "./assets/App.css"
import { TwitterFollowCard } from "./components/TwitterFollowCard"
const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',    
      isFollowing: true
    },
    {
      userName: 'cristian7b',
      name: 'Cristian Bonilla',
      isFollowing: false
    }
  ]
export function App() {
    return(
        <div className="app">
            {
                users.map(({userName, name, isFollowing}) => (
                  <TwitterFollowCard key = {userName} userName = {userName} initialIsFollowing = {isFollowing}>
                      {name}
                    </TwitterFollowCard>
                ))
            }
        </div>
    )
}