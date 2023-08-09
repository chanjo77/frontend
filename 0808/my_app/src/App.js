import { useState } from 'react'
import "./App.css"

function App() {

  const [lottoNumbers, setLottoNumbers] = useState([])
  const [lottoColors, setLottoColors] = useState([])

  const colors = ["red", "orange", "yellow", "green", "blue", "purple"]

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const now = `${year}년 ${month}월 ${date}일 `

  return (
    <div className="container">
      <div className="lotto">
        <h3><span>{now}</span>로또 번호 추첨</h3>
        <div className="numbers">
          {lottoNumbers.map((num, idx) => {
            const color = lottoColors[idx] || "black";
            return (
              <div
                className="eachnum"
                key={idx}
                style={{ backgroundColor: color }}
              >
                {num}
              </div>
            );
          })}
        </div>
        <button onClick={() => {
          const newLottoNumbers = [];
          const newLottoColors = [];
          while (newLottoNumbers.length < 6) {
            let ran = Math.floor(Math.random() * 45) + 1;
            if (newLottoNumbers.indexOf(ran) === -1) {
              newLottoNumbers.push(ran);
              newLottoColors.push(colors[Math.floor(Math.random() * colors.length)]);
            }
          }
          setLottoNumbers(newLottoNumbers);
          setLottoColors(newLottoColors);
        }}>추첨</button>
        <button onClick={() => {
          setLottoNumbers([]);
          setLottoColors([]);
        }}>다시</button>
      </div>
    </div>
  );
}

export default App;
