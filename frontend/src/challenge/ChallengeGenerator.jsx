import "react"
import {useState, useEffect} from "react"
import {MCQChallenge} from "./MCQChallenge.jsx"
export function ChallengeGenerator(){ 
    const [challenge, setChallenge] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [difficulty, setDifficulty] = useState("easy")
    const [quota, setQuota] = useState(null)

    const fetchQuota = async () => {}

    const generateChallenge = async () => {}

    const getNextResetTime = () => {}

    return <div className="challenge-container">
        <div className="quota-display">
            <p>Challenges remaining today: {quota?. quota_remaining || 0}</p>
            {quota ? quota_remaining === 0 && (
                <p>Next reset: {0}</p>
                ): (
                <p>Loading quota...</p>
            )}
            </div> 
    </div>
}