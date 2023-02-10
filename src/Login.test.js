import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '../src/Login';
//import { Router, useNavigate, RouterProvider,createMemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

// const router = createMemoryRouter(
//     [
//       {
//         path: "/",
//         element: <Login />,
//       },
//     ],
//     // { initialEntries: ["/login"] }
//   );

describe('ログイン画面の部品存在チェック', () => {

  const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
    }
  })

  const { container } = render(
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  );

    // const route = '../src/pages/SignUp'
    // render(<MemoryRouter initialEntries={[route]}><SignIn /></MemoryRouter>)
    // render(<RouterProvider router={router} />)
    // const nav = useNavigate()
    // const history = nav('../src/pages/SignIn')
    // render(<Router location={history.location} navigator={history}><SignIn /></Router>)
    // render(<BrowserRouter><SignIn /></BrowserRouter>);
    //screen.debug()
    // const utils = render(<SignIn />)
    test('inputはあるか', () => {
    //     const { getByTestId } = render(<SignIn />);
        const emailInput = screen.getByRole('heading', { name: 'サインイン'});
    //     const emailInput = screen.getByLabelText("メールアドレス");
    //     const passwordInput = screen.getByLabelText("パスワード");
    //     const button = screen.getByRole('button');
        expect(emailInput).toBeVisible;
    //     expect(passwordInput).toBeVisible();
    //     expect(button).toBeVisible();
    })
})