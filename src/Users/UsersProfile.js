import React from 'react'
import { UsersContext } from '../App.js'
import UserOne from './UserOne.js'
import UserTwo from './UserTwo.js'

const UsersProfile = () => (

    <UsersContext.Consumer>
        { (context) => { 
            return (
                <div> 
                    <div>
                        <h1>Профиль {context[0].nickname}</h1>
                            <UserOne />
                    </div>
                    <div>
                        <h1>Профиль {context[1].nickname}</h1>
                            <UserTwo />
                    </div>
                </div>
            )
        }}
    </UsersContext.Consumer>
    
)

export default UsersProfile;