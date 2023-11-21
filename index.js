const Button = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;
  return <button className={`btn ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button buttonText="Like" className="btn-1" />>
      <Button buttonText="Comment" className="btn-2" />
      <Button buttonText="Share" className="btn-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
