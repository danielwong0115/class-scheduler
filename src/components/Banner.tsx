import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const Banner = ({ title }: { title: string }) => {
  const { user } = useAuthState();

  return (
    <div>
      <div className="p-2 flex gap-4 items-center">
        <h1 className="font-bold text-4xl">{title}</h1>
        <span className="ml-auto text-lg text-blue-600">
          Welcome, {user ? user.displayName : 'guest'}!
        </span>
        <button
          onClick={user ? signOut : signInWithGoogle}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {user ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
      {/* <hr className="my-4" /> */}
      <br></br>
    </div>
  );
};

export default Banner;