import './jsx_expression.css'
//define variables
const name = 'big john'

const getAge = () => {
    return 18
}

//map render;
//list need a unpeated number/string key to improve performance
const songs = [
    { id: 1, name: 'first song' },
    { id: 2, name: 'second song' },
    { id: 3, name: 'third song' },
    // {id: 1, name: 'forth song'}
]

//conditional render: ternary expression 
//&&
const flag = true

//type condition: 1 2 3
//show red h1; green h2; blue h3
const style = {
    color: 'red',
    fontSize: '30px'
}

const h3activeFlag = true

const getHtag = (type) => {
    if (type === 1) {
        return <h1 style={style}> this is h1</h1>
    }
    if (type === 2) {
        return <h2 style={{ color: 'green' }}> this is h2 </h2>
    }
    if (type === 3) {
        return <h3 className={h3activeFlag ? 'h3active' : ''}> this is h3</h3>
    }
}

//jsx: className <- class; htmlFor <- for;

function JsExpression () {
    return (
        <div>
            <h1>---JS Expression---</h1>
            parameters: {name} {getAge()}
            <ul>
                {songs.map(s => <li key={s.id}> {s.name} </li>)}
            </ul>
            {flag ? (<span>flag = true span</span>) : null}
            {false && (<span>false span not show</span>)}
            {getHtag(1)}{getHtag(2)}{getHtag(3)}

        </div>
    )
}
export default JsExpression