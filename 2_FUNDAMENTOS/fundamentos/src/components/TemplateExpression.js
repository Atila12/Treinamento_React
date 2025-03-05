const TemplateExpressions = () => {
    const name = "Átila";
    const data = {
        age: 31,
        job: "programador",
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>você atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )

}

export default TemplateExpressions