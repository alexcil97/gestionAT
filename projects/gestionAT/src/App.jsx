import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing= {true} userName="alexcil97" name="Alex Cil"/>
        <TwitterFollowCard isFollowing= {false} userName="midudev" name="Miguel Ángel Durán"/>
        <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard isFollowing userName="vxnder" name="VanderHart"/>
        </section>
    )
}
