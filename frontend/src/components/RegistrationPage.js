import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("USER");

    const history = useHistory();



    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };


    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };


    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePhoneNumber = (e) => {
        const contactNumber = e.target.value;
        setPhoneNumber(contactNumber);
    };

    const handleRegister = (e) => {

        e.preventDefault()



        axios.post("http://localhost:8080/api/v1/registration/signup", {
            firstName,
            lastName,
            email,
            password,
            contactNumber,
            role


        })

            .then(axios.spread((req1, req2) => {
                // output of req.

            }));

        history.push("/login");


    }

    return (

        <div class="flex flex-col content-center ml-auto mr-auto mt-40 mb-64 max-w-md px-4 py-8 bg-white bg-opacity-70 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 ">
            <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account ?
                <a href="/login" target="_blank" class="text-sm text-blue-500 hover:underline hover:text-blue-700">
                    Sign in
                </a>
            </span>
            <div class="p-6 mt-8">
                <form onSubmit={handleRegister}
                    className="flex flex-col"
                    method="POST"
                    action="#">

                    <div class="flex gap-4 mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name" onChange={onChangeFirstName} />
                        </div>
                        <div class=" relative ">
                            <input type="text" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name" onChange={onChangeLastName} />
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Email" placeholder="Email" type="email" onChange={onChangeEmail} />
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-number" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Number" placeholder="Phone Number" onChange={onChangePhoneNumber} />
                        </div>
                    </div>
                    <div class="flex flex-col mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Password" placeholder="Password" type="password" onChange={onChangePassword} />
                        </div>
                    </div>
                    <div class="flex w-full my-4">
                        <button type="submit" class="c py-2 px-4 hover:bg-red-600 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default RegistrationPage;
