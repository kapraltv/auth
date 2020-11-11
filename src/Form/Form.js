import React from 'react'
import { LogIn } from '../App.js'

const Form = () => (

        <div>

            <LogIn.Consumer>

                    { ({actions}) => {
                        return (

                            <div className='form'>

                                <h1>Авторизация</h1>

                                <input
                                placeholder='Введите логин'
                                type='text'
                                onChange={actions.handlerInputLogin}/>

                                <input
                                placeholder='Введите пароль'
                                type='password'
                                onChange={actions.handlerInputPassword}/>

                                <button onClick={actions.handlerClick}>
                                    Войти
                                </button>

                            </div>

                        )
                      }
                    }

            </LogIn.Consumer>

        </div>

)

export default Form;