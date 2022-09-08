import React from 'react'
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import lock from '../../images/key & lock/lock.png'

const SignUp = () => {
    // google log in........
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user || guser) {
        console.log(user,guser)
    }


    let errorMessage;
    if (error || gerror) {
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message}</p>;
    }

    const handleSignUp = event => {
        event.preventDefault();
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        console.log(name,email,password)
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div>
            <div className='flex justify-center mt-5' >
                <div class="card lg:card-side bg-base-100 shadow-xl w-50 lg:flex-row-reverse">
                    <figure><img  src={lock} alt="Album" /></figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title ">Sign Up</h2>
                        <form onSubmit={handleSignUp}>

                            <input type="text" placeholder="Name" name="name" class="input input-bordered input-warning w-full max-w-xs my-3" required />
                            <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-warning w-full max-w-xs my-3" required />
                            <input type="password" placeholder="Password" name="password" class="input input-bordered input-warning w-full max-w-xs mb-3" required />

                            {errorMessage}

                            <div class="card-actions justify-center">
                                <button type='submit' class="btn btn-accent" >Sign Up</button>
                            </div>
                        </form>

                        <p>Have an Account <Link to='/login' className='text-primary'>Please Login</Link> </p>

                        <div class="divider">OR</div>

                        <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Login</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;