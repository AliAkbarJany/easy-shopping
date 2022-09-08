import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading';
import key from '../../images/key & lock/key.png'

const Login = () => {

    // google log in........
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    // email & password log in...........
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user || guser) {
        console.log(user,guser)
    }

    // if (true||loading || gloading) {
    //      <Loading></Loading>
    // }

    let errorMessage;
    if (error || gerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div >

            <div className='flex justify-center mt-5' >
                <div class="card lg:card-side bg-base-100 shadow-xl w-50">
                    <figure><img className='h-full' src={key} alt="Album" /></figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title ">Login</h2>
                        <form onSubmit={handleLogin}>

                            <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-warning w-full max-w-xs my-3" required />
                            <input type="password" placeholder="Password" name="password" class="input input-bordered input-warning w-full max-w-xs mb-3" required />

                            {errorMessage}

                            <div class="card-actions justify-center">
                                <button type='submit' class="btn btn-accent" >Login</button>
                            </div>
                        </form>

                        <p>New to Easy-shopping?? <Link to='/signUp' className='text-primary'>Please Sign Up</Link> </p>

                        <div class="divider">OR</div>

                        <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Login</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;