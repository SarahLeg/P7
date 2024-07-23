const composant1 = () => {
    return <div>Un test</div>
}
ReactDOM.render(<composant1 />, document.getElementById("React"))

Header

Description = () => {
    return (<p>Ici un exemple de description</p>)
}
ReactDOM.render(<div><Header /><Description /></div>, document.getElementById("root"))

Banner = () => {
    return (<div>
        <Header/>
        <Description/>
    </div>)
}