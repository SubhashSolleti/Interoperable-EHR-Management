import checkAuth from '../../helpers/userAuth';
import { Redirect } from 'react-router-dom';

function UserHOC(Component) {
  function MemberCustomHOC(props) {

    const isMember = checkAuth();

    if (!isMember) {
      return <Redirect to="/user/login" />;
    }

    return (
      <div className="className">
        <Component {...props} />
      </div>
    );
  }
  return MemberCustomHOC;
}

export default UserHOC;