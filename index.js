function mendchilgee(){
return <h1>hello</h1>;

};
function mendchilgee2(props){
return <h1>{props.ner}</h1>;
}

function mendchilgee3(props){
    return(<div>
        <h1>{props.ner}</h1>
    <p>{props.nas}</p>
</div>        )}
function EtsegComp(props){
    return(
        <div>
            <mendchilgee/>
            <mendchilgee2 ner={props.ner}/>
            <mendchilgee3/>
            <table>
    <tr><td>{props.angi[1]}</td></tr>
    <tr><td>{props.angi[2]}</td></tr>
    <tr><td>{props.angi[3]}</td></tr>
            </table>
        </div>
    )
}
ReactDOM.render(
<EtsegComp ner="james" nas="25" angi={['программ хангамж','MC','нябо-мэдээллийн систэм']}/>
document.getElementById('root')



)
