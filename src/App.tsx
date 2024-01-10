import { styled } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <div>
      <Title>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </Title>
    </div>
  );
}

export default App;
