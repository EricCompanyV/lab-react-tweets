import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";


function Tweet({tweet}) {
  const {message, timestamp, user} = tweet
  return (
    <div className="tweet">
    <ProfileImage image={user.image}/>
      

      <div className="body">
        <div className="top">
          <span className="user">
          <User name={user.name} handle={user.handle} />
          </span>

          <Timestamp timestamp={timestamp}/>
        </div>
        
        <Message message={message}/>

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
