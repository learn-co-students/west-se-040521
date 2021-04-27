const PaintingCard = (props) => {
    // console.log(props)
    
    // We can use ES6 destructuring assignment to save the values of the painting object as individual variables
    const {image, slug, title, votes, artist} = props.painting

    // then we can use those destructured variables in our JSX below
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