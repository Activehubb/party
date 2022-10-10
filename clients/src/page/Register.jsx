import React, { useEffect, useState } from "react";
import { clearUserError, registerUser } from "../redux/apiCalls/userApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAlert } from "react-alert";
import Footer from "../components/footer/Footer";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user, error, pending } = useSelector((state) => state.user);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      clearUserError(dispatch);
    }
    if (user) {
      navigate("/event/create");
    }
  }, [alert, navigate, error, user]);

  const [userInfo, setUserInfo] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });

  const { email, fname, lname, password } = userInfo;

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set("email", email);
    formData.set("fname", fname);
    formData.set("lname", lname);
    formData.set("password", password);
    formData.set("avatar", avatar);

    registerUser(formData, dispatch);
  };

  return (
    <div>
      <div>
        <div className="relative lg:flex h-full w-full">
          <div className="h-screen lg:w-1/2 w-full">
            <div className="mx-auto flex h-full w-2/3 flex-col justify-center  xl:w-1/2">
              <span className=" md:block text-[#F84B05] font-bold lg:text-2xl ">
                PartyMode
              </span>
              <div>
                <p className="text-4xl py-2 text-[#39364f] font-roboto font-semibold">
                  Create an account
                </p>
              </div>
              <div className="my-6">
                <button className="flex w-full justify-center rounded-3xl border-none font-roboto bg-white p-1 text-black hover:bg-orange-600 hover:text-white sm:p-2">
                  <img
                    src="https://freesvg.org/img/1534129544.png"
                    className="mr-2 w-6 object-fill"
                  />
                  Create account with Google
                </button>
              </div>
              <div>
                <fieldset className="border-t border-solid border-gray-600">
                  <legend className="mx-auto px-2 text-center text-sm">
                    Or create account via our secure system
                  </legend>
                </fieldset>
              </div>
              <div className="mt-10">
                <div className="flex justify-center">
                  {avatarPreview && (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className=" w-12 h-12 shadow-md rounded-full"
                    />
                  )}
                </div>
                <form onSubmit={handleSubmit} encType=" multipart/form-data">
                  <div>
                    <label
                      className="mb-2.5 block font-semibold"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="inline-block w-full border-[#39364f47] border-solid border rounded bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                      placeholder="mail@user.com"
                    />
                  </div>
                  <>
                    <div className=" flex gap-4">
                      <div className="mt-4 w-full">
                        <label
                          className="mb-2.5 block font-semibold"
                          htmlFor="fname"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          value={fname}
                          onChange={handleChange}
                          placeholder="John"
                          id="fname"
                          name="fname"
                          required
                          className="inline-block w-full border-[#39364f47] border-solid rounded border bg-white p-2.5 leading-none text-black placeholder:placeholder-indigo-900 shadow"
                        />
                      </div>
                      <div className="mt-4 w-full">
                        <label
                          className="mb-2.5 block font-semibold"
                          htmlFor="lname"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={lname}
                          onChange={handleChange}
                          placeholder="Simeon"
                          id="lname"
                          name="lname"
                          required
                          className="inline-block w-full border-[#39364f47] border-solid rounded border bg-white p-2.5 leading-none text-black placeholder:placeholder-indigo-900 shadow"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        className="mb-2.5 block font-semibold"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={handleChange}
                        id="password"
                        name="password"
                        placeholder="***********"
                        required
                        className="inline-block w-full border-[#39364f47] border-solid rounded border bg-white p-2.5 leading-none text-black placeholder:placeholder-indigo-900 shadow"
                      />
                    </div>
                    {password && (
                      <div className=" z-10  ">
                        {!avatarPreview && (
                          <div className="extraOutline p-4 bg-white bg-whtie rounded-lg">
                            <div className="file_upload w-[100%] p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                              <svg
                                className="text-orange-500 w-24 mx-auto mb-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                              </svg>
                              <div className="input_field flex flex-col w-max mx-auto text-center">
                                <label>
                                  <input
                                    className="text-sm cursor-pointer w-36 hidden"
                                    type="file"
                                    name="avatar"
                                    multiple
                                    accept="images/*"
                                    onChange={handleChange}
                                  />
                                  <div className="text bg-orange-600 font-roboto text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-Orange-500">
                                    Select
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>

                  {!pending ? (
                    <>
                      <div className="my-10">
                        <input
                          type={"submit"}
                          value={"Create account"}
                          className="w-full font-roboto text-base rounded-md text-white bg-orange-600 p-4 shadow-md hover:bg-orange-700  cursor-pointer"
                          data-modal-toggle="popup-modal"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="my-10">
                      <button
                        disabled
                        type="button"
                        className="text-white bg-orange-600 shadow-sm w-full p-4 hover:bg-orange-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm font-roboto px-5 py-2.5 text-center mr-2 dark:bg-orange-600  dark:hover:bg-orange-700  dark:focus:ring-orange-800 flex justify-center items-center cursor-not-allowed"
                      >
                        <svg
                          role="status"
                          className="inline mr-3 w-4 h-4 text-white animate-spin"
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
          <div className="h-screen w-1/2 bg-blue-600 hidden lg:block">
            <img
              src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
