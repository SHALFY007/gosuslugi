import { useState } from 'react'
import './Main.css'

function Main() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    return (
        <main className="main">
            <a href="#" className="main_back">
                <img src="data:image/svg+xml,%3Csvg width%3D%226%22 height%3D%2210%22 viewBox%3D%220 0 6 10%22 fill%3D%22none%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E  %3Cpath d%3D%22M6 1.0125L4.99063 2.18147e-07L-2.18557e-07 5L4.99062 10L6 8.9875L2.02187 5L6 1.0125Z%22 fill%3D%22%230D4CD3%22%2F%3E%3C%2Fsvg%3E" alt="" />
                Назад</a>

            <h2 className="passport_title mt_32 mb_30">Паспорт РФ</h2>
            <div className="help_buttons">
                <button className="help_btn">
                    <img src="https://gu-st.ru/lk-profile-st/assets/icons/icon-share.svg" alt="" />
                    <a href="#" className="main_back">Поделиться</a>
                </button>
                <button className="help_btn">
                    <img src="https://gu-st.ru/lk-profile-st/assets/icons/icon-copy.svg" alt="" />
                    <a href="#" className="main_back">Скопировать</a>
                </button>
            </div>
            <section className="pass">
                {user ? <>
                    <h4 className="pass_name">{user.fio}</h4>
                    <div className="pass_block">
                        <p className="crit">Пол</p>
                        <p className="crit_name">{user.gender}</p>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Дата рождения</p>
                        <p className="crit_name">{user.birth}</p>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Гражданство</p>
                        <p className="crit_name">Россия</p>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Место рождения</p>
                        <p className="crit_name">{user.city}</p>
                    </div>
                    <div className="pass_block">
                        <hr />
                    </div>
                    <div className="pass_block">
                        <p className="crit">Серия и номер паспорта</p>
                        <b><p className="crit_name">{user.pass}</p></b>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Выдан</p>
                        <p className="crit_name">{user.getFrom}</p>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Дата выдачи</p>
                        <p className="crit_name">{user.dateGet}</p>
                    </div>
                    <div className="pass_block">
                        <p className="crit">Код подразделения</p>
                        <p className="crit_name">{user.code}</p>
                    </div>
                    <div className="pass_block">
                        <hr />
                    </div>
                    <div className="pass_block">
                        <a href="https://lk.gosuslugi.ru/profile/personal/id-doc">
                            <div className="file_block">
                                <div className="file_block_content">
                                    <img src="https://gu-st.ru/lk-profile-st/skrepka-blue.a5276fb8eccb9453.svg" alt="" />
                                    <p className='crit_name blue'>Выбрать файл</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </>
                    :
                    <p>Обновите страницу</p>
                                
                                }

            </section>
            <section className='answears'>
                <h4 className='passport_title mt_32 mb_30'>Частые вопросы</h4>
            </section>
        </main>
    )
}

export default Main