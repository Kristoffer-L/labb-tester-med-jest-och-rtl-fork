import { useState } from "react"

type LoginFormProps = {
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


// Skapa ett test för funktionen LoginForm i LoginForm.test.ts
    // kontrollerar att formuläret rendreras korrekt
    // kontrollerar att knappen har rätt text
    // kontrollerar att inputfälten ändras korrekt
    // kontrollerar att inputfältet har rätt placeholder
    // kontrollerar att formuläret kan skickas med korrekt data

