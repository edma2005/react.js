const Greeting = ({isLoggedIn}) => {
    return <p>{isLoggedIn ? 'Hello user!' : 'You need to log in'}</p>
}

export default Greeting;