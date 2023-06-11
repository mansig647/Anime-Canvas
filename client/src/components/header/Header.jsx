import "./header.css";

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Anime</span>
        <span className="headerTitleSm">Canvas</span>
      </div>
      <img
        className="headerImg"
        src="https://trumpwallpapers.com/wp-content/uploads/Shinchan-Wallpaper-14-1920x1080-1.jpg"
        alt=""
      />
    </div>
  );
}
