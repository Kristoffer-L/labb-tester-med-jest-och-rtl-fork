import { useState } from "react"

interface LoginFormProps {
    onSubmit?: (data: { email: string; password: string }) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit?.({ email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email" 
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password" 
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" data-testid="login-button">Login</button>
        </form>
            
    )
}

export default LoginForm