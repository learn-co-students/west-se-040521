# React-Props-Components

## SWBATs

* See what a React Component actually is (an object, made by a class or function)
* Learn how to identify components on a page, visually
* Understand how create-react-app works and what it offers a developer
* Get more familiarity with component hierarchy and the flow of information
    * Learn props 


## Challenge: Solidifying Props
Create component for NavBar(see following question) and pass color="red", title="Paintr", icon="paint brush", and description="an app we made" as props from app component.

**Note: make sure to import `semantic-ui-css/semantic.min.css` package in app component for styling.=**

Question:

```js
 const NavBar = props => {
  return (
    <div className={"ui inverted red menu"}>
      <a className="item">
        <h2 className="ui header">
          <i className={"paint brush icon"} />
          <div className="content">Paintr</div>
          <div className="sub header">an app we made</div>
        </h2>
      </a>
    </div>
  );
};

export default NavBar;
```