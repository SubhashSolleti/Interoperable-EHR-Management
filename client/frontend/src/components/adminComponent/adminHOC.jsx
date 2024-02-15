import checkAuthAdmin from '../../helpers/adminAuth';
import { Redirect } from 'react-router-dom';

function AdminHOC(Component) {
  function MemberCustomHOC(props) {

    const isMember = checkAuthAdmin();

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

export default AdminHOC;