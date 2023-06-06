import React from 'react';
import { connect } from 'react-redux';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from './store';

interface User {
  id: number;
  name: string;
  email: string;
}

enum LoadingState {
  Idle,
  Loading,
  Loaded,
  Failed
};

interface UsersState {
  users: User[];
  loadingState: LoadingState;
  error: string | null;
};

const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `/users`,
    }),
  }),
});

type Props = any

class Users extends React.Component<Props, UsersState> {
  componentDidMount() {

    console.log('%c [ xxx ]-40', 'font-size:13px; background:pink; color:#bf2c9f;', this.props)
    // this.props.getUsers().unwrap().then(data => {
    //   this.setState({
    //     users: data ?? [],
    //     loadingState: LoadingState.Loaded
    //   }
    // )}).catch(
    //   error => this.setState({ error: error.message, loadingState: LoadingState.Failed })
    // );
  }

  render() {
    // const { users, loadingState, error } = this.state;

    // if (loadingState === LoadingState.Loading) {
    //   return <div>Loading...</div>;
    // }

    // if (error) {
    //   return <div>Error: {error}</div>;
    // }

    return (
      <ul>
        {/* {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </ul>
    );
  }
}

// const mapStateToProps = (state: RootState) => ({
//   users: state.usersApi.users,
//   loadingState: (() => {
//     if (state.usersApi.loading === 'idle') {
//       return LoadingState.Idle;
//     } else if (state.usersApi.loading === 'pending') {
//       return LoadingState.Loading;
//     } else if (state.usersApi.error) {
//       return LoadingState.Failed;
//     } else {
//       return LoadingState.Loaded;
//     }
//   })(),
//   error: state.usersApi.error,
// });
const mapDispatchToProps = {
    getUsers: usersApi.endpoints.getUsers.initiate
  };
const ConnectedUsers = connect(null,mapDispatchToProps)(Users);

export default ConnectedUsers;