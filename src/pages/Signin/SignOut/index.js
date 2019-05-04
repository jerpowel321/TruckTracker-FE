import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div className="font" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </div>
);

export default withFirebase(SignOutButton);