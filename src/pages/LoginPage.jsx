import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = reactUseCookie("my_token");
  const [userCookie, setUserCookie] = reactUseCookie("user");
  const [disable, setDisable] = useState(false);
  const handleDisable = () => {
    setDisable(true);
  };

  const handleLogin = async (e) => {
    // e.preventDefault();
    setDisable(true);
    const res = await fetch(import.meta.env.VITE_API_URL + "login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login Successfully");
      console.log(json);
      setToken(json.access_token);
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard");
    } else {
      console.log(json);
      setDisable(false);
      toast.error("Login failed Please try again");
    }
  };

  return (
    <>
      <div className="">
        <section className=" dark:bg-gradient-to-tl scroll-py-10 to-slate-00 from-neutral-800 dark:text-white ">
          <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl  text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-10 mr-2 text-pink-500 "
                src="./src/img/cute-svgrepo-com (1).svg"
                alt="logo"
              />
              Voucher Generator
            </a>
            <div className="w-full rounded-lg shadow md:mt-0 mt-1 bg-slate-800 sm:max-w-md  xl:p-0">
              <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-start text-gray-900 md:text-xl mb-2 dark:text-gray-200">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-xs dark:bg-gray-700 dark:border-gray-600 mt-5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      placeholder="name@company.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      {...register("password")}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 mt-5 h-10 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border text-gray-900 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      to="/forgot"
                      id="forgot"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    disabled={disable}
                    className={`w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center transition
                    ${disable
                        ? "bg-slate-300 text-gray-200 border border-gray-300 cursor-not-allowed focus:ring-0 focus:outline-none"
                        : "bg-slate-600 hover:bg-slate-400 duration-200 text-white border border-gray-800 hover:bg-primary-700 focus:ring-0 focus:outline-none"
                      }`}
                  >
                    Sign in
                  </button>
                  <p className=" text-sm font-light text-gray-800 dark:text-gray-300 text-center">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-200 text-gray-300 hover:text-gray-100"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginPage;
