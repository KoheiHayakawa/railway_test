import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "./authSlice";
//import { url } from "../const";
//import { useForm } from 'react-hook-form';

export const Login = () => {
  //const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = useSelector((state) => state.auth.isSignIn)
  const nav = useNavigate();
  const [, setCookie] = useCookies();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();

  const onSignIn = (event) => {
    console.log(event);
    const data = {
      email: event.email,
      password: event.password
    };
    axios.post(`hoge/signin`, data)
      .then((res) => {
        setCookie("token", res.data.token);
        dispatch(signIn());
        nav("/");
      })
      .catch((err) => {
        setErrorMessage(`サインインに失敗しました。${err}`);
      })
  }

  if(auth){
    return <Navigate to="/" />
  } 

  return (
    <div>
      <main className="signin">
        <h2 id="test">サインイン</h2>
        <p className="error-message">{errorMessage}</p>
        <Link to="/signup">新規作成</Link>
      </main>
    </div>
  )
}