function Greeting({language}) {
    switch (language) {
        case "es":
            return <h1>Hola</h1>;
        case "fr":
            return <h1>Bonjour</h1>;
        default:
            return <h1>Hello</h1>
    }
}

export default Greeting;