import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { clearUserError, forgotPassword } from "../redux/apiCalls/userApiCalls";
import Footer from "../components/footer/Footer";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user, pending, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      navigate();
    }

    if (error) {
      alert.error(error);
      clearUserError();
    }
  }, [user, alert, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword({ email }, dispatch);
  };

  return (
    <div>
      <div class="relative lg:flex h-full w-full">
        <div class="h-screen lg:w-1/2 w-full">
          <div class="mx-auto flex h-full w-2/3 flex-col justify-center  xl:w-1/2">
            <span className=" md:block text-[#F84B05] font-bold lg:text-2xl ">
              PartyMode
            </span>
            <div>
              <p class="text-5xl py-2 text-[#39364f] font-roboto font-semibold">
                Forgot Password
              </p>
              <p class="text-3xl py-2 text-[#39364f] font-roboto font-semibold">
                Enter your email to continue
              </p>
            </div>

            <div class="mt-10">
              <form onSubmit={handleSubmit}>
                <div>
                  <label class="mb-2.5 block font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="inline-block w-full border-[#39364f47] border-solid border rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="mail@user.com"
                  />
                </div>
                {!pending ? (
                  <>
                    <div class="my-10">
                      <input
                        type={"submit"}
                        value={"Send me email to continue"}
                        class="w-full font-roboto text-base rounded-md text-white bg-orange-600 p-4 shadow-md hover:bg-orange-700  cursor-pointer"
                      />
                    </div>
                  </>
                ) : (
                  <div class="my-10">
                    <button
                      disabled
                      type="button"
                      class="text-white bg-orange-600 shadow-sm w-full p-4 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm font-roboto px-5 py-2.5 text-center mr-2 dark:bg-orange-600  dark:hover:bg-orange-700  dark:focus:ring-orange-800 flex justify-center items-center cursor-not-allowed"
                    >
                      <svg
                        role="status"
                        class="inline mr-3 w-4 h-4 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div class="h-screen w-1/2 bg-blue-600 hidden lg:block">
          <img
            src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
            class="h-full w-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
