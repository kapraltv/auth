import React from 'react';
import './App.css';
import Form from './Form/Form.js'
import Users from './Users/Users.js'

export const LogIn = React.createContext(false)
export const UsersContext = React.createContext({})

class App extends React.Component {

    state = {
      access: false,
      users: [ 
        {
        password: '',
        login: '',
        nickname: 'fatherEurope',
        firstName: 'Petr',
        lastName: 'First'
        },
        {
          password: '',
          login: '',
          nickname: 'schoolBoy',
          firstName: 'Vasya',
          lastName: 'Pupkin'
          }
        ]
    }

    
  render() {

    return (

      <div>

        { this.state.access 
        ?
          <UsersContext.Provider value = { this.state.users }>
            <Users />
          </UsersContext.Provider>
        :
          <LogIn.Provider value = { 
            { 
              actions: {
                  handlerInputLogin: event => {
                    this.setState({
                      login: event.target.value
                    })
                    console.log(this.state.login)
                    },
                  handlerInputPassword: event => {
                    this.setState({
                      password: event.target.value
                    })
                    console.log(this.state.password)
                  },
                  handlerClick: () => {
                    (this.state.login === 'admin'
                    &&  this.state.password === 'admin') 
                    ? this.setState({
                      access: true
                    }) : alert('Неверный логин или пароль')
                  }
                }
              }
            }>
            <Form />
          </LogIn.Provider>
        }

        </div>
  
    )

  }

}

export default App;
