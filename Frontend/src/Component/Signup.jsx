import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email id"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                <p>
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Conditional rendering for the Login modal */}
      {showLoginModal && (
        <dialog id="my_modal_3" className="modal" open>
          <Login />
          <button onClick={() => setShowLoginModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </dialog>
      )}
    </>
  );
}

export default Signup;
