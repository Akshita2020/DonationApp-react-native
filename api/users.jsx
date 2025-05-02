import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log('User account created & signed in!', user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: error, message: 'That email address is already in use!'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: error, message: 'That email address is invalid!'};
    }

    console.log(error);
    return {error: error, message: 'An unknown error occurred.'};
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        email: response.user.email,
        displayName: response.user.displayName,
        uid: response.user.uid,
        token: token,
      },
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      return {status: false, error: 'Please enter right password'};
    } else if (error.code === 'auth/user-not-found') {
      return {status: false, error: 'User not found'};
    } else if (error.code === 'auth/invalid-email') {
      return {status: false, error: 'Invalid email address'};
    }
    return {status: false, error: 'Something went wrong, please try again'};
  }
};
