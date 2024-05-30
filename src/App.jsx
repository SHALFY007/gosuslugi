import logo from './logo.svg';
import './App.css';
import Loader from './Components/Loader/Loader';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    console.log(localStorage.getItem('user'))

    if (localStorage.getItem('user') == null) {
      let fio = prompt('Введите ФИО полностью').toUpperCase()
      let gender = prompt('Введите пол (М или Ж)').toUpperCase() == 'М' ? 'Мужской' : 'Женский'
      let birth = prompt('Введите дату рождения в формате DD.MM.YYYY')
      let residentship = 'Россия'
      let city = prompt('Место рождения(как в паспорте)').toUpperCase()
      let pass = prompt('Введите серию и номер паспорта')
      let getFrom = prompt('Кем выдан').toUpperCase()
      let dateGet = prompt('Дата выдачи')
      let code = prompt('Код подразделения')

      const user = {
        fio: fio,
        gender: gender,
        birth: birth,
        residentship: residentship,
        city: city,
        pass: pass,
        getFrom: getFrom,
        dateGet: dateGet,
        code: code
      }

      localStorage.setItem('user', JSON.stringify(user));
    }

  }, [])

  return (
    <div className="App">
      <Header/>
      {loading && <Loader/>}
      <Main />
    </div>
  );
}

export default App;
