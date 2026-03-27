export default function App() {
    return (
        <main className="page-shell">
            <section className="login-wrap">
                <div className="brand-column">
                    <p className="eyebrow">AI Resume Analyzer</p>
                    <h1>Welcome back</h1>
                    <p className="lead">
                        Sign in to track resume scores, interview readiness, and application
                        momentum in one place.
                    </p>
                    <div className="accent-card" aria-hidden="true">
                        <span className="line" />
                        <span className="line short" />
                        <span className="line tiny" />
                    </div>
                </div>

                <div className="form-card">
                    <h2>Login</h2>
                    <p className="form-subtitle">Use your student account credentials.</p>

                    <form className="login-form">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter email" />

                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Enter password" />

                        <button type="submit">Sign In</button>
                    </form>

                    <div className="helper-row">
                        <p className="helper-text">
                            Forgot password? <a href="#">Reset it</a>
                        </p>
                        <p className="helper-text helper-right">
                            Not a member? <a href="/register">Register here</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}


