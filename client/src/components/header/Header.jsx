import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.pinimg.com/originals/5f/e5/6f/5fe56fbf6ecfceb0fe643d8361e945d7.jpg"
        alt=""
      />
    </div>
  );
}
