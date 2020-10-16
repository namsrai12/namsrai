function Mendchilgee(){
return <h1>hello</h1>;
};
function Mendchilgee2(props){
return <h1>{props.ner}</h1>;
};

function Mendchilgee3(props){
    return(<div>
        <h1>{props.ner}</h1>
    <p>{props.nas}</p>
</div>        )};
function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee2 ner={props.ner}/>
            <Mendchilgee3/>
            <table>
    <tr><td>{props.angi[1]}</td></tr>
    <tr><td>{props.angi[2]}</td></tr>
    <tr><td>{props.angi[3]}</td></tr>
            </table>
        </div>
    )
}
ReactDOM.render(
<EtsegComp ner="james" nas="25" angi={['программ хангамж','MC','нябо-мэдээллийн систэм']}/>,
document.getElementById('root')



)
