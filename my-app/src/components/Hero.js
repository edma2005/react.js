const Hero = (props) => {
    return (
        <div className="hero" style={{backgroundColor: props.color}}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Hero