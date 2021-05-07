import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </a>
      <button onClick={props.changeColor}>Change color</button>
      <div className="right menu">
        <Link to='/paintings/about' className="item">About</Link>
        <Link to='/paintings/new' className="item">Add a painting</Link>
        <Link to='/paintings' className="item">Go to Painting List</Link>

      </div>
    </div>
  );
};

export default NavBar;
