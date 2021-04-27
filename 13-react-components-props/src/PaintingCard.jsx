const PaintingCard = (props) => {
    console.log(props)
    return (
        <div className="item">
            <div className="ui small image">
                <img src={props.painting.image} alt={props.painting.slug} />
            </div>
            <div className="middle aligned content">
                <div className="header">{`"${props.painting.title}" by ${
                props.painting.artist.name
                }`}</div>
                <div className="description">
                <a>
                    <i className="large caret up icon" />
                    {props.painting.votes} votes
                </a>
                </div>
            </div>
        </div>
    )        
}

export default PaintingCard