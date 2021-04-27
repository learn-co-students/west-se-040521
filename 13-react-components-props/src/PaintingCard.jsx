const PaintingCard = (props) => {
    console.log(props)
    const {image, slug, title, votes, artist} = props.painting
    return (
        <div className="item">
            <div className="ui small image">
                <img src={image} alt={slug} />
            </div>
            <div className="middle aligned content">
                <div className="header">{`"${title}" by ${
                artist.name
                }`}</div>
                <div className="description">
                <a>
                    <i className="large caret up icon" />
                    {votes} votes
                </a>
                </div>
            </div>
        </div>
    )        
}

export default PaintingCard