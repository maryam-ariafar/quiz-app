import logo from '../assets/quiz-logo.png';

export default function Start({onStart}) {

  return (
    <div id="start">
      {/* <img id='logo' src={logo} alt="logo"/> */}
      <h1>welcome to the React Quiz App</h1>
      <hr />
      <p>
        We have designed 7 questions for you, each question has four options; You
        have only 20 seconds to answer each question. After two seconds of
        clicking on each option, if the answer is correct, its color will change
        to green, and if the answer is wrong, it will change to red. At the end
        of this test, you will receive a summary of the results of your answers.
        Good Luck!
      </p>
      <button
      id="start-btn"
      onClick={onStart}
      >
        click here to start the test
        </button>
    </div>
  );
}
