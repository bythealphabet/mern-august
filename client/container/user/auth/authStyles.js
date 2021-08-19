import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export default css`
  display: grid;
  grid-template-rows: 100px 350px 50px;

  p {
    grid-column: 2 / -2;
    grid-row: 1;
    align-self: center;
    font-size: 1.8rem;
    @media (min-width: 900px) {
      grid-column: 1 / span 5;
    }
  }

  form {
    grid-column: 2 / -2;
    label {
      font-size: 1.1rem;
    }
    button {
      width: 100%;
      font-size: 1.1rem;
    }
    @media (min-width: 900px) {
      grid-column: 1 / span 5;
      grid-row: 2;
    }
  }

  .second-option {
    grid-column: 2 / -2;
    grid-row: 3;

    @media (min-width: 900px) {
      grid-column: 1 / -1;
    }
  }

  /*------------------------
***************************
		UserAuth Layout
***************************
------------------------*/

  .FormGrid {
    display: grid;
    grid-template-columns:
      1em repeat(6, 1fr)
      1em;
    grid-template-rows: repeat(2, 70px) 1fr repeat(5, 40px);
  }

  @media (min-width: 900px) {
    .FormGrid {
      grid-template-columns: 1em repeat(12, 1fr) 1em;
    }
  }

  .ForgotFormGrid {
    grid-template-rows: repeat(2, 100px) 1fr repeat(5, 40px);
    grid-gap: 5px;
  }

  .FullHeight {
    height: 60vh;
  }

  .Row4 {
    grid-row: 4 / span 2;
  }
  .Row5 {
    grid-row: 5;
  }
  .Row6 {
    grid-row: 6;
  }
  .Row7 {
    grid-row: 7;
  }

  .RowFull {
    grid-row: 1 / -1;
  }

  .FormGrid > * {
    width: 100%;
    max-width: 500px;
    grid-column: 2 / -2;
    /*justify-self: center;*/
  }

  @media (min-width: 900px) {
    .FormGrid > * {
      grid-column: 6 / span 5;
    }
  }

  /*typography ------------*/

  .Heading {
    font-size: 1.8rem;
    font-weight: 300;
    grid-row: 1 / span 2;
    align-self: center;
    text-transform: capitalize;
  }

  .ErrorMsg {
    font-size: 0.7rem;
    color: red;

    grid-row: 2;
    align-self: end;
  }

  .InfoText,
  .TopText {
    font-size: 0.8rem;
    grid-row: 2;
  }

  .TopText {
    font-weight: bold;
    align-self: center;
  }

  .InfoText {
    align-self: end;
  }

  .ForgotPassWd {
    font-size: 0.8rem;
    align-self: center;
  }

  .BottomFormText {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-self: center;
  }

  .SuccesText {
    text-align: center;
    align-self: center;
  }

  /*form ------------*/

  .Form {
    grid-row: 3;
    display: grid;
  }

  /*buttons ------------*/

  .GoSignupSignIn {
    font-size: 0.8rem;
    display: inline-block;
    padding: 0.3em 0 1.3em;
    font-weight: 300;
    text-align: center;
    align-self: center;
    justify-self: start;
  }

  .GoogleBtn {
    align-self: center;
  }

  .FacebookBtn {
    align-self: center;
  }

  .Buttons {
    display: flex;
  }

  .Buttons > :last-child {
    margin-left: 1em;
  }

  .DeleteShopBtn {
    border: solid 0.5px #ccc;
    grid-row: 6 / span 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
