import logo from '../assets/quiz-logo.png';
export default function Header() {
  return (
    <header>
      <div className='container'>
        <div>
          <img src={logo} alt="React Quiz App" />
          <h1>React Quiz</h1>
        </div>
        <div>
          <div className='questions'></div>
          <div className='answers'></div>
        </div>
      </div>
    </header>
  );
  
}

