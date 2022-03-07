import styled from "styled-components";

interface Props {}

const FormWrapper = styled.form<Props>`
  margin: 10.5rem auto;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  box-shadow: var(--shadow_1);
  border-radius: 0.8rem;
  padding: 4.8rem;
  width: 55.2rem;
  color: var(--grey_darker);
  .marginBottom {
    margin-bottom: 4.8rem;
  }
  .marginTop_large {
    margin-top: 4.8rem;
  }
  .marginTop_small {
    margin-top: 1.2rem;
  }
  img {
    height: 3.6rem;
  }
  .setprofileHeading{
text-align: center;

  }
  h3 {
    font-size: 3.6rem;
    color: var(--text);
    line-height: 4.8rem;
    margin: 2.4rem 0 1.2rem;
  }
  a{
    color:var(--primary_dark)
  }
  & > div + div {
    margin-top: 2.4rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  .small {
    font-size: 1rem;
    line-height: 1.4rem;
  }
  fieldset {
    border-width: 1px 0 0 0;
    border-color: #efefef30;
    margin: 2.4rem 0;
  }
  legend {
    text-align: center;
    padding: 0.6rem;
  }
  hr {
    margin: 4.8rem 0;
    background-color: red;
  }
`;
export default FormWrapper;
