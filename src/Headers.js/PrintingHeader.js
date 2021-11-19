export default function PrintingHeader (props){

    return(
        <>
        <h1>{props.children}</h1>
        <img src={props.source}/>
        </>
    );

}